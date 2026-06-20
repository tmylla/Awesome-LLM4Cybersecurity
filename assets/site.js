const state = {
  papers: [],
  categories: [],
  rqs: [],
  filters: {
    query: "",
    rq: "all",
    category: "all",
    year: "all",
  },
};

const els = {
  totalPapers: document.querySelector("#total-papers"),
  categoryCount: document.querySelector("#category-count"),
  venueCount: document.querySelector("#venue-count"),
  latestYear: document.querySelector("#latest-year"),
  lastUpdated: document.querySelector("#last-updated"),
  rqLanes: document.querySelector("#rq-lanes"),
  resultCount: document.querySelector("#result-count"),
  paperList: document.querySelector("#paper-list"),
  searchInput: document.querySelector("#search-input"),
  rqFilter: document.querySelector("#rq-filter"),
  categoryFilter: document.querySelector("#category-filter"),
  yearFilter: document.querySelector("#year-filter"),
  resetFilters: document.querySelector("#reset-filters"),
  trendRow: document.querySelector("#trend-row"),
  figureSourceCount: document.querySelector("#figure-source-count"),
  timelineTotal: document.querySelector("#timeline-total"),
  wordCloudTotal: document.querySelector("#word-cloud-total"),
  yearChart: document.querySelector("#year-chart"),
  categoryChart: document.querySelector("#category-chart"),
  wordCloud: document.querySelector("#word-cloud"),
  toTop: document.querySelector("#to-top"),
};

const RQ_DESCRIPTIONS = {
  "RQ1": "Construct cybersecurity-oriented domain LLMs",
  "RQ2": "Apply LLMs across cybersecurity tasks",
  "RQ3": "Track future directions and agentic systems",
};

const CATEGORY_ACCENTS = ["#2758d4", "#28785f", "#b7472a", "#c28b1b", "#6f4bb8", "#277f95"];
const TITLE_STOP_WORDS = new Set([
  "about", "after", "against", "all", "also", "among", "analysis", "and", "are", "based", "been", "being", "between", "beyond",
  "can", "case", "challenging", "comprehensive", "does", "doing", "during", "each", "enhanced", "evaluating", "evaluation",
  "for", "from", "framework", "how", "into", "its", "large", "language", "lessons", "model", "models", "more", "new",
  "not", "novel", "over", "paper", "papers", "practical", "real", "real-world", "rethinking", "study", "systematic", "than",
  "that", "the", "their", "through", "toward", "towards", "under", "understanding", "using", "via", "was", "what", "when", "where",
  "whether", "which", "while", "with", "without", "world"
]);

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[char]));
}

function stripHtml(value) {
  const template = document.createElement("template");
  template.innerHTML = value;
  return template.content.textContent.replace(/\s+/g, " ").trim();
}

function normalizeVenue(value) {
  return value.replace(/\*/g, "").trim() || "Unknown";
}

function parseLinks(line) {
  const links = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  while ((match = pattern.exec(line)) !== null) {
    const label = stripHtml(match[1]).replace(/\s+/g, " ").trim();
    links.push({ label: label || "Link", url: match[2] });
  }
  return links;
}

function parseLiteratures(markdown) {
  const lines = markdown.split(/\r?\n/);
  const papers = [];
  const rqs = [];
  const categoryMap = new Map();
  let currentRq = null;
  let currentCategory = null;
  let pendingPaper = "";

  const flushPaper = () => {
    const line = pendingPaper.trim();
    pendingPaper = "";
    if (!line || !currentRq || !currentCategory) return;

    const cleaned = line.replace(/^\d+\.\s*/, "");
    const parts = cleaned.split("|").map((part) => part.trim());
    if (parts.length < 4) return;

    const title = parts[0];
    const venue = normalizeVenue(parts[1]);
    const date = parts[2];
    const yearMatch = date.match(/\b(20\d{2})\b/);
    const links = parseLinks(parts.slice(3).join(" | "));
    const paperLink = links.find((link) => /paper/i.test(link.label)) || links[0] || null;
    const codeLink = links.find((link) => /code/i.test(link.label)) || null;

    papers.push({
      id: `${papers.length + 1}`,
      title,
      venue,
      date,
      year: yearMatch ? yearMatch[1] : "Unknown",
      links,
      paperLink,
      codeLink,
      rq: currentRq.id,
      rqTitle: currentRq.title,
      category: currentCategory,
    });

    const category = categoryMap.get(currentCategory) || {
      name: currentCategory,
      rq: currentRq.id,
      rqTitle: currentRq.title,
      count: 0,
    };
    category.count += 1;
    categoryMap.set(currentCategory, category);
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    const rqMatch = line.match(/^###\s+.*?(RQ\d+):\s*(.*?)\s*\*?\((\d+) papers\)\*?/);
    if (rqMatch) {
      flushPaper();
      currentRq = { id: rqMatch[1], title: stripHtml(rqMatch[2]), declaredCount: Number(rqMatch[3]) };
      rqs.push(currentRq);
      currentCategory = null;
      continue;
    }

    const categoryMatch = line.match(/^####\s+(.+)$/);
    if (categoryMatch) {
      flushPaper();
      currentCategory = stripHtml(categoryMatch[1]);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      flushPaper();
      pendingPaper = line;
      continue;
    }

    if (pendingPaper && line) {
      pendingPaper += ` ${line}`;
    }
  }
  flushPaper();

  return { papers, rqs, categories: Array.from(categoryMap.values()) };
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function populateSelect(select, items, getValue, getLabel) {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = getValue(item);
    option.textContent = getLabel(item);
    fragment.appendChild(option);
  });
  select.appendChild(fragment);
}

function renderStats() {
  const venues = new Set(state.papers.map((paper) => paper.venue));
  const years = state.papers.map((paper) => Number(paper.year)).filter(Boolean);
  const dates = state.papers.map((paper) => paper.date).filter(Boolean).sort().reverse();

  els.totalPapers.textContent = formatNumber(state.papers.length);
  els.categoryCount.textContent = formatNumber(state.categories.length);
  els.venueCount.textContent = formatNumber(venues.size);
  els.latestYear.textContent = years.length ? Math.max(...years) : "--";
  els.lastUpdated.textContent = dates[0] || "Updated";
}

function renderMap() {
  els.rqLanes.innerHTML = "";
  state.rqs.forEach((rq) => {
    const lane = document.createElement("article");
    lane.className = "rq-lane";

    const label = document.createElement("div");
    label.className = "rq-label";
    label.innerHTML = `<strong>${escapeHtml(rq.id)}</strong><span>${escapeHtml(RQ_DESCRIPTIONS[rq.id] || rq.title)}</span>`;

    const strip = document.createElement("div");
    strip.className = "category-strip";

    state.categories.filter((category) => category.rq === rq.id).forEach((category, index) => {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "category-cell";
      cell.style.borderTop = `4px solid ${CATEGORY_ACCENTS[index % CATEGORY_ACCENTS.length]}`;
      cell.innerHTML = `<strong>${category.count}</strong><span>${escapeHtml(category.name)}</span><small>${escapeHtml(category.rq)}</small>`;
      cell.addEventListener("click", () => {
        state.filters.rq = "all";
        state.filters.category = category.name;
        els.rqFilter.value = "all";
        els.categoryFilter.value = category.name;
        renderPapers();
        document.querySelector("#explorer").scrollIntoView({ behavior: "smooth", block: "start" });
      });
      strip.appendChild(cell);
    });

    lane.append(label, strip);
    els.rqLanes.appendChild(lane);
  });
}

function renderFilters() {
  populateSelect(els.rqFilter, state.rqs, (rq) => rq.id, (rq) => `${rq.id} - ${rq.title}`);
  populateSelect(els.categoryFilter, state.categories, (category) => category.name, (category) => category.name);
  const years = Array.from(new Set(state.papers.map((paper) => paper.year))).filter((year) => year !== "Unknown").sort((a, b) => Number(b) - Number(a));
  populateSelect(els.yearFilter, years, (year) => year, (year) => year);
}

function getFilteredPapers() {
  const query = state.filters.query.trim().toLowerCase();
  return state.papers.filter((paper) => {
    const matchesQuery = !query || [paper.title, paper.venue, paper.category, paper.rqTitle].join(" ").toLowerCase().includes(query);
    const matchesRq = state.filters.rq === "all" || paper.rq === state.filters.rq;
    const matchesCategory = state.filters.category === "all" || paper.category === state.filters.category;
    const matchesYear = state.filters.year === "all" || paper.year === state.filters.year;
    return matchesQuery && matchesRq && matchesCategory && matchesYear;
  });
}

function renderTrend(papers) {
  const counts = new Map();
  papers.forEach((paper) => {
    if (paper.year === "Unknown") return;
    counts.set(paper.year, (counts.get(paper.year) || 0) + 1);
  });
  const items = Array.from(counts.entries()).sort((a, b) => Number(a[0]) - Number(b[0]));
  const max = Math.max(1, ...items.map((item) => item[1]));
  els.trendRow.innerHTML = "";

  items.forEach(([year, count]) => {
    const bar = document.createElement("div");
    bar.className = "trend-bar";
    bar.title = `${year}: ${count} papers`;
    const height = Math.max(8, Math.round((count / max) * 88));
    bar.innerHTML = `<span style="height:${height}px"></span><small>${year}</small>`;
    els.trendRow.appendChild(bar);
  });
}

function countBy(items, getKey) {
  const counts = new Map();
  items.forEach((item) => {
    const key = getKey(item);
    if (!key || key === "Unknown") return;
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  return counts;
}

function normalizeTitleToken(token) {
  const aliases = {
    "ai": "AI",
    "aixcc": "AIxCC",
    "api": "API",
    "apis": "API",
    "attackers": "attacker",
    "attacks": "attack",
    "benchmarks": "benchmark",
    "bugs": "bug",
    "codes": "code",
    "ctf": "CTF",
    "cve": "CVE",
    "cves": "CVE",
    "cyber-security": "cybersecurity",
    "datasets": "dataset",
    "defenses": "defense",
    "defensive": "defense",
    "detecting": "detection",
    "detect": "detection",
    "exploits": "exploit",
    "exploiting": "exploit",
    "fuzzing": "fuzz",
    "gpt": "GPT",
    "llm": "LLM",
    "llms": "LLM",
    "malwares": "malware",
    "prompts": "prompt",
    "repairs": "repair",
    "secure": "security",
    "vulnerabilities": "vulnerability",
    "vulnerable": "vulnerability"
  };
  return aliases[token] || token;
}

function titleWordCounts(papers) {
  const counts = new Map();
  papers.forEach((paper) => {
    const tokens = paper.title.toLowerCase().match(/[a-z][a-z0-9-]{1,}/g) || [];
    tokens.forEach((rawToken) => {
      const normalized = normalizeTitleToken(rawToken.replace(/^llm'?s$/, "llm"));
      const stopKey = normalized.toLowerCase();
      if (TITLE_STOP_WORDS.has(stopKey) || stopKey.length < 3) return;
      counts.set(normalized, (counts.get(normalized) || 0) + 1);
    });
  });
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 58);
}

function renderCorpusFigures() {
  const yearCounts = Array.from(countBy(state.papers, (paper) => paper.year).entries())
    .sort((a, b) => Number(a[0]) - Number(b[0]));
  const categoryCounts = [...state.categories]
    .sort((a, b) => b.count - a.count);
  const wordCounts = titleWordCounts(state.papers);

  const years = yearCounts.map(([year]) => Number(year));
  const yearMax = Math.max(1, ...yearCounts.map(([, count]) => count));
  const categoryMax = Math.max(1, ...categoryCounts.map((category) => category.count));
  const wordMax = Math.max(1, ...wordCounts.map(([, count]) => count));
  const wordMin = Math.min(wordMax, ...wordCounts.map(([, count]) => count));
  const wordRange = Math.max(1, wordMax - wordMin);

  els.figureSourceCount.textContent = `${formatNumber(state.papers.length)} papers in the current corpus`;
  els.timelineTotal.textContent = years.length ? `${Math.min(...years)}-${Math.max(...years)}` : "No years";
  els.wordCloudTotal.textContent = `${formatNumber(wordCounts.length)} title terms`;

  els.yearChart.innerHTML = "";
  yearCounts.forEach(([year, count]) => {
    const item = document.createElement("div");
    item.className = "corpus-year-bar";
    item.title = `${year}: ${count} papers`;
    const height = Math.max(12, Math.round((count / yearMax) * 148));
    item.innerHTML = `<span style="height:${height}px"></span><strong>${escapeHtml(year)}</strong><small>${formatNumber(count)}</small>`;
    els.yearChart.appendChild(item);
  });

  els.categoryChart.innerHTML = "";
  categoryCounts.forEach((category, index) => {
    const row = document.createElement("div");
    row.className = "chart-row";
    row.style.setProperty("--row-color", CATEGORY_ACCENTS[index % CATEGORY_ACCENTS.length]);
    const width = Math.max(4, Math.round((category.count / categoryMax) * 100));
    row.innerHTML = `
      <span class="chart-label">${escapeHtml(category.name)}</span>
      <span class="chart-track"><span style="width:${width}%"></span></span>
      <strong>${formatNumber(category.count)}</strong>
    `;
    els.categoryChart.appendChild(row);
  });

  els.wordCloud.innerHTML = "";
  wordCounts.forEach(([word, count], index) => {
    const token = document.createElement("span");
    token.className = "word-token";
    token.style.setProperty("--word-color", CATEGORY_ACCENTS[index % CATEGORY_ACCENTS.length]);
    const size = 14 + Math.round(((count - wordMin) / wordRange) * 32);
    const weight = count > wordMax * 0.58 ? 800 : count > wordMax * 0.34 ? 700 : 600;
    token.style.fontSize = `${size}px`;
    token.style.fontWeight = weight;
    token.title = `${word}: ${count} title mentions`;
    token.textContent = word;
    els.wordCloud.appendChild(token);
  });
}

function paperCard(paper) {
  const article = document.createElement("article");
  article.className = "paper-card";

  const links = paper.links.map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`).join("");
  const title = escapeHtml(paper.title);
  const titleMarkup = paper.paperLink
    ? `<a href="${escapeHtml(paper.paperLink.url)}" target="_blank" rel="noopener noreferrer">${title}</a>`
    : title;
  article.innerHTML = `
    <div class="paper-meta">
      <span>${escapeHtml(paper.rq)}</span>
      <span>${escapeHtml(paper.year)}</span>
      <span>${escapeHtml(paper.venue)}</span>
    </div>
    <h3>${titleMarkup}</h3>
    <div class="paper-category">${escapeHtml(paper.category)}<br>${escapeHtml(paper.date)}</div>
    <div class="paper-links">${links}</div>
  `;
  return article;
}

function renderPapers() {
  const filtered = getFilteredPapers();
  const limited = filtered.slice(0, 120);
  els.resultCount.textContent = `${formatNumber(filtered.length)} of ${formatNumber(state.papers.length)} papers`;
  els.paperList.innerHTML = "";
  renderTrend(filtered);

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No papers match the current filters.";
    els.paperList.appendChild(empty);
    return;
  }

  limited.forEach((paper) => els.paperList.appendChild(paperCard(paper)));

  if (filtered.length > limited.length) {
    const note = document.createElement("div");
    note.className = "empty-state";
    note.textContent = `Showing the first ${limited.length} matches. Narrow the filters to inspect more precisely.`;
    els.paperList.appendChild(note);
  }
}

function bindControls() {
  els.searchInput.addEventListener("input", (event) => {
    state.filters.query = event.target.value;
    renderPapers();
  });
  els.rqFilter.addEventListener("change", (event) => {
    state.filters.rq = event.target.value;
    renderPapers();
  });
  els.categoryFilter.addEventListener("change", (event) => {
    state.filters.category = event.target.value;
    renderPapers();
  });
  els.yearFilter.addEventListener("change", (event) => {
    state.filters.year = event.target.value;
    renderPapers();
  });
  els.resetFilters.addEventListener("click", () => {
    state.filters = { query: "", rq: "all", category: "all", year: "all" };
    els.searchInput.value = "";
    els.rqFilter.value = "all";
    els.categoryFilter.value = "all";
    els.yearFilter.value = "all";
    renderPapers();
  });
  els.toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => {
    els.toTop.classList.toggle("visible", window.scrollY > 600);
  }, { passive: true });
}

function showError(error) {
  els.resultCount.textContent = "Unable to load literature list";
  els.paperList.innerHTML = "";
  const message = document.createElement("div");
  message.className = "empty-state";
  message.textContent = error.message;
  els.paperList.appendChild(message);
}

async function init() {
  bindControls();
  try {
    const response = await fetch("LITERATURES.md", { cache: "no-store" });
    if (!response.ok) throw new Error("LITERATURES.md could not be loaded from this page origin.");
    const markdown = await response.text();
    const parsed = parseLiteratures(markdown);
    state.papers = parsed.papers;
    state.categories = parsed.categories;
    state.rqs = parsed.rqs;
    renderStats();
    renderMap();
    renderFilters();
    renderCorpusFigures();
    renderPapers();
  } catch (error) {
    showError(error);
  }
}

init();
