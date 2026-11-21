'use strict';

/* ── Projects (tiles on the home page) ──────────────────────── */
const PROJECTS = [
  {
    title: 'CalBirds',
    href: 'https://calbirds.org/',
    thumb: 'images/calbirds-thumb.jpg',
    text: 'Free tools for birders: plan your Christmas Bird Count, chase rarities, find hotspots on a road trip and explore your life list. With a write-up for every tool.'
  }
];

/* ── Coding projects ──────────────────────────────────────────── */
const CODING_PROJECTS = [
  {
    name: 'CBC count dates',
    tags: ['My code', 'JavaScript', 'CBC', 'mapping', 'Birds'],
    type: 'mine',
    thumb: 'images/cbc-count-dates-thumb.png',
    thumbAlt: 'Map of Christmas Bird Count circles colored by count date',
    postHref: 'https://calbirds.org/posts/post-cbc-count-dates',
    webappHref: 'https://cbc-dates.calbirds.org/',
    description: 'Map of every Audubon Christmas Bird Count circle, colored by its count date.'
  },
  {
    name: 'PyLifer: Mapping my life birds with Python',
    tags: ['My code', 'Python', 'eBird', 'mapping', 'Birds'],
    type: 'mine',
    thumb: 'images/pylifer-thumbnail.jpg',
    thumbAlt: 'PyLifer 3 km map thumbnail',
    postHref: 'https://calbirds.org/posts/post-pylifer',
    sourceHref: 'https://github.com/hydrospheric0/PyLifer',
    webappHref: null,
    description: 'Python successor to my lifeR fork and a significant upgrade over it: generates animated personal lifer maps from eBird Status &amp; Trends occurrence data.'
  },
  {
    name: 'california-bird-atlas',
    tags: ['My code', 'JavaScript', 'eBird', 'Birds', 'maps'],
    type: 'mine',
    thumb: 'images/atlas_small.png',
    thumbAlt: 'CA Bird Atlas app',
    postHref: 'https://calbirds.org/posts/post-calbirds-atlas',
    sourceHref: 'https://github.com/calbirds/calbirds-atlas',
    webappHref: 'https://atlas.calbirds.org/',
    description: 'Lightweight mobile-first Leaflet app that locates your position on the CA Breeding Bird Atlas block grid and color-codes blocks by survey coverage. Built with vanilla JS, Cloudflare Pages, and the eBird API.'
  },
  {
    name: 'lifeR',
    tags: ['Fork', 'R', 'eBird', 'mapping', 'Birds'],
    type: 'fork',
    thumb: 'images/lifer-thumbnail.jpg',
    thumbAlt: 'lifeR animated map',
    postHref: 'https://calbirds.org/posts/post-lifer',
    sourceHref: 'https://github.com/hydrospheric0/lifeR',
    webappHref: null,
    description: 'Create animated maps of missing lifer birds using eBird Status &amp; Trends occurrence data. Fork of <a href="https://github.com/smsfrn/lifeR" target="_blank" rel="noopener noreferrer">lifeR</a> by Samuel Safran. Succeeded by <a href="posts/post-pylifer.html">PyLifer</a>.'
  },
  {
    name: 'twitcher',
    tags: ['My code', 'JavaScript', 'eBird', 'Rarities', 'Birds'],
    type: 'mine',
    thumb: 'images/twitcher-thumbnail.png',
    thumbAlt: 'Twitcher screenshot',
    postHref: 'https://calbirds.org/posts/post-twitcher',
    webappHref: 'https://twitcher.io',
    description: 'Lightweight mobile-first Leaflet app that helps "twitchers"\u2014extreme bird chasers\u2014find rarities based on eBird reports across the entire continental US. Applies ABA rarity codes for filtering. Built with vanilla JS, Cloudflare Pages, and the eBird API.'
  },
  {
    name: 'cbc-compiler',
    tags: ['My code', 'JavaScript', 'CBC', 'Birds'],
    type: 'mine',
    thumb: 'images/cbc-compiler-thumbnail.png',
    thumbAlt: 'cbc-compiler screenshot',
    postHref: 'https://calbirds.org/posts/post-cbc-compiler',
    sourceHref: 'https://github.com/calbirds/cbc-compiler',
    webappHref: 'https://cbc-compiler.calbirds.org/',
    description: 'Automation scripts for compiling Audubon Christmas Bird Count data \u2014 merging field sheets, computing sector summaries, and generating formatted reports for submission.'
  },
  {
    name: 'cbc-capcplot',
    tags: ['My code', 'HTML', 'CBC', 'Birds'],
    type: 'mine',
    thumb: 'images/cbc-capcplot-thumb.png',
    thumbAlt: 'CBC CAPC plot example',
    postHref: 'https://calbirds.org/posts/post-cbc-capcplot',
    sourceHref: 'https://github.com/calbirds/cbc-capcplot',
    webappHref: 'https://cbc-capcplot.calbirds.org/',
    description: 'Visualization tool for Christmas Bird Count data.'
  },
  {
    name: 'cbc-historic',
    tags: ['My code', 'JavaScript', 'CBC', 'Birds'],
    type: 'mine',
    thumb: 'images/cbc-historic-thumb.png',
    thumbAlt: 'CBC historic data tool',
    postHref: 'https://calbirds.org/posts/post-cbc-historic',
    sourceHref: 'https://github.com/calbirds/cbc-historic',
    webappHref: 'https://cbc-historic.calbirds.org/',
    description: 'Tool for improving access to historical Christmas Bird Count data.'
  },
  {
    name: 'cbc-weather',
    tags: ['My code', 'JavaScript', 'CBC', 'weather', 'Birds'],
    type: 'mine',
    thumb: null,
    postHref: 'https://calbirds.org/posts/post-cbc-weather',
    sourceHref: 'https://github.com/calbirds/cbc-weather',
    webappHref: 'https://cbc-weather.calbirds.org/',
    description: 'CBC weather mapping tool \u2014 visualizes weather conditions recorded during Audubon Christmas Bird Counts.'
  },
  {
    name: 'eBird-tripreport-csv',
    tags: ['My code', 'JavaScript', 'eBird', 'Birds'],
    type: 'mine',
    thumb: null,
    postHref: 'https://calbirds.org/posts/post-ebird-tripreport-csv',
    sourceHref: 'https://github.com/hydrospheric0/ebird-tripreport-csv',
    webappHref: null,
    description: 'Browser extension for downloading your trip report as a CSV. Works best with Firefox but a preliminary Chrome extension is also provided.'
  }
];

/* ── Rendering utilities ──────────────────────────────────────── */

function getProjectTagClass(tag) {
  const tagClasses = {
    JavaScript: 'tag tag--javascript',
    Python: 'tag tag--python',
    R: 'tag tag--r',
    HTML: 'tag tag--html',
    Birds: 'tag tag--theme',
    CBC: 'tag tag--theme',
    eBird: 'tag tag--theme',
    maps: 'tag tag--theme',
    mapping: 'tag tag--theme',
    Rarities: 'tag tag--theme',
    weather: 'tag tag--theme'
  };
  return tagClasses[tag] || 'tag tag--theme';
}

function buildProjectCardHTML(proj) {
  const typePill = proj.type === 'fork'
    ? '<span class="card-type-pill card-type-fork">Fork</span>'
    : '<span class="card-type-pill card-type-mine">My code</span>';
  const tagPills = proj.tags
    .filter(t => t !== 'My code' && t !== 'Fork')
    .map(t => `<span class="${getProjectTagClass(t)}">${t}</span>`).join('');
  // Name element: For webapp-ready coding projects prefer linking via the tile name directly to the app
  const nameEl = proj.webappHref 
    ? `<a href="${proj.webappHref}" target="_blank" rel="noopener noreferrer" class="project-post-link">${proj.name}</a>`
    : (proj.postHref
      ? `<a href="${proj.postHref}" class="project-post-link">${proj.name}</a>`
      : proj.name);
  const linkTags = [
    proj.sourceHref ? `<a href="${proj.sourceHref}" target="_blank" rel="noopener noreferrer" class="tag tag-source">Source</a>` : '',
    proj.webappHref ? `<a href="${proj.webappHref}" target="_blank" rel="noopener noreferrer" class="tag tag-webapp">Web app</a>` : '',
    proj.postHref  ? `<a href="${proj.postHref}" class="tag tag-post">Post</a>` : ''
  ].filter(Boolean).join('\n                  ');
  const body = proj.thumb
    ? `<div class="project-body project-body--thumb">
              ${proj.webappHref 
                ? `<a href="${proj.webappHref}" target="_blank" rel="noopener noreferrer"><img src="${proj.thumb}" alt="${proj.thumbAlt}" class="project-thumb" /></a>` 
                : `<img src="${proj.thumb}" alt="${proj.thumbAlt}" class="project-thumb" />`}
              <div class="project-body-text">
                <p>${proj.description}</p>
              </div>
            </div>
            <div class="project-tags">${linkTags}</div>`
    : `<div class="project-body">
              <p>${proj.description}</p>
            </div>
            <div class="project-tags">${linkTags}</div>`;
  return `        <div class="project-card" data-tags="${proj.tags.join(' ')}" data-name="${proj.name}" data-post-href="${proj.postHref || ''}">
          <div class="project-header">
            <span class="project-summary-name">${nameEl}</span>
            <div class="project-summary-tags">${typePill}${tagPills}</div>
          </div>
            ${body}
        </div>`;
}

function renderCodingCards(containerId) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = CODING_PROJECTS.map(buildProjectCardHTML).join('\n');
}

function buildPostCardHTML(post) {
  const thumbHtml = post.thumb
    ? `<img src="${post.thumb}" alt="${post.title}" class="post-card-thumb" />`
    : '';
  return `        <article class="project-card post-card">
          <div class="project-header">
            <span class="project-summary-name"><a href="${post.href}" class="project-post-link">${post.title}</a></span>
            <span class="position-date">${post.date}</span>
          </div>
          <div class="project-body${post.thumb ? ' project-body--thumb' : ''}">
            ${thumbHtml}
            <div class="project-body-text">
              <p>${post.excerpt}</p>
              <div class="project-tags">
                <a href="${post.href}" class="tag tag-post">Read</a>
              </div>
            </div>
          </div>
        </article>`;
}

function renderProjectTiles(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = PROJECTS.map(p => `<a class="proj-tile" href="${p.href}">
      <img src="${p.thumb}" alt="" />
      <span class="proj-tile-body"><span class="proj-tile-title">${p.title} &rarr;</span>
      <span class="proj-tile-text">${p.text}</span></span></a>`).join('');
}

function renderPostCards(containerId) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = POSTS.map(buildPostCardHTML).join('\n');
}

function renderPostPager(featuredId, prevId, counterId, nextId, tilesId) {
  let currentIdx = 0;

  function showPost(idx) {
    const p = POSTS[idx];
    const thumbHtml = p.thumb
      ? `<img src="${p.thumb}" alt="${p.title}" class="post-featured-thumb" />`
      : '';
    document.getElementById(featuredId).innerHTML = `
        <div class="post-featured-inner">
          ${thumbHtml}
          <div class="post-featured-body">
            <span class="post-featured-date">${p.date}</span>
            <p class="post-featured-title"><a href="${p.href}">${p.title}</a></p>
            <p class="post-featured-excerpt">${p.excerpt}</p>
            <a href="${p.href}" class="post-featured-read">Read \u2192</a>
          </div>
        </div>`;
    document.getElementById(prevId).disabled  = (idx === 0);
    document.getElementById(nextId).disabled  = (idx === POSTS.length - 1);
    document.getElementById(counterId).textContent = `${idx + 1} / ${POSTS.length}`;
    document.querySelectorAll('.post-tile').forEach((tile, i) =>
      tile.classList.toggle('active', i === idx));
    currentIdx = idx;
  }

  const tilesEl = document.getElementById(tilesId);
  tilesEl.innerHTML = POSTS.map((p, i) =>
    `<a class="post-tile" href="${p.href}" data-idx="${i}">${p.title}<span class="post-tile-date">${p.date}</span></a>`
  ).join('');
  tilesEl.addEventListener('click', e => {
    const tile = e.target.closest('.post-tile');
    if (tile) { e.preventDefault(); showPost(+tile.dataset.idx); }
  });
  document.getElementById(prevId).addEventListener('click',  () => showPost(currentIdx - 1));
  document.getElementById(nextId).addEventListener('click',  () => showPost(currentIdx + 1));
  showPost(0);
}
