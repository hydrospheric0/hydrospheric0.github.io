'use strict';

/* ── Posts (newest-first) ──────────────────────────────────────── */
const POSTS = [
  /*
  {
    title: 'twitcher',
    date: 'March 23, 2026',
    href: 'posts/post-twitcher.html',
    thumb: 'images/twitcher-thumbnail.png',
    excerpt: 'Interactive tool for tracking eBird rarity and target-species sightings by region. Queries the eBird API to flag rare and unusual birds and renders occurrence maps for trip planning and local monitoring.'
  },
  {
    title: 'ebird-rarity-mapper',
    date: 'March 23, 2026',
    href: 'posts/post-ebird-rarity-mapper.html',
    thumb: null,
    excerpt: 'Tools for mapping rare bird occurrence using eBird data.'
  },
  {
    title: 'cbc-webtools',
    date: 'March 23, 2026',
    href: 'posts/post-cbc-webtools.html',
    thumb: null,
    excerpt: 'Web tools supporting Christmas Bird Count data workflows.'
  },
  {
    title: 'cbc-weather',
    date: 'March 23, 2026',
    href: 'posts/post-cbc-weather.html',
    thumb: null,
    excerpt: 'CBC weather mapping tool \u2014 visualizes weather conditions recorded during Audubon Christmas Bird Counts.'
  },
  {
    title: 'cbc-historic',
    date: 'March 23, 2026',
    href: 'posts/post-cbc-historic.html',
    thumb: null,
    excerpt: 'Tool for improving access to historical Christmas Bird Count data.'
  },
  {
    title: 'CBC compiler',
    date: 'March 23, 2026',
    href: 'posts/post-cbc-compiler.html',
    thumb: null,
    excerpt: 'Automation scripts for compiling Audubon Christmas Bird Count data \u2014 merging field sheets, computing sector summaries, and generating formatted reports.'
  },
  {
    title: 'cbc-capcplot',
    date: 'March 23, 2026',
    href: 'posts/post-cbc-capcplot.html',
    thumb: null,
    excerpt: 'Visualization tool for Christmas Bird Count data.'
  },
  */
  {
    title: 'Help complete the California Bird Atlas',
    date: 'March 22, 2026',
    href: 'posts/post-calbirds-atlas.html',
    thumb: 'images/calbirds-atlas-thumbnail.png',
    excerpt: 'A small mobile web-app that shows your location relative to the California Breeding Bird Atlas grid and provides block coverage statistics.'
  },
  {
    title: 'Mapping my \u201cLifer\u201d Bird List with lifeR',
    date: 'March 21, 2026',
    href: 'posts/post-lifer.html',
    thumb: 'images/lifer-thumbnail.jpg',
    excerpt: 'Using eBird Status &amp; Trends occurrence data to generate animated weekly maps of potential life-list birds across the US.'
  }
];

/* ── Coding projects ──────────────────────────────────────────── */
const CODING_PROJECTS = [
  {
    name: 'california-bird-atlas',
    tags: ['My code', 'JavaScript', 'eBird', 'birds', 'maps'],
    type: 'mine',
    thumb: 'images/calbirds-atlas-thumbnail.png',
    thumbAlt: 'CA Bird Atlas app',
    postHref: 'posts/post-calbirds-atlas.html',
    sourceHref: 'https://github.com/hydrospheric0/calbirds-atlas',
    webappHref: 'https://calbirds-atlas.pages.dev/',
    description: 'Web-based app showing your location relative to the California Bird Atlas grid, with basic coverage statistics. Works in any mobile browser.'
  },
  {
    name: 'twitcher',
    tags: ['My code', 'JavaScript', 'eBird', 'rarities'],
    type: 'mine',
    thumb: 'images/twitcher-thumbnail.png',
    thumbAlt: 'Twitcher screenshot',
    postHref: 'posts/post-twitcher.html',
    sourceHref: 'https://github.com/hydrospheric0/twitcher',
    webappHref: null,
    description: 'Interactive tool for tracking eBird rarity and target-species sightings by region. Queries the eBird API to flag rare and unusual birds and renders occurrence maps for trip planning and local monitoring.'
  },
  {
    name: 'lifeR',
    tags: ['Fork', 'R', 'eBird', 'mapping'],
    type: 'fork',
    thumb: 'images/lifer-thumbnail.jpg',
    thumbAlt: 'lifeR animated map',
    postHref: 'posts/post-lifer.html',
    sourceHref: 'https://github.com/hydrospheric0/lifeR',
    webappHref: null,
    description: 'Create animated maps of missing lifer birds using eBird Status &amp; Trends occurrence data. Fork of <a href="https://github.com/smsfrn/lifeR" target="_blank" rel="noopener noreferrer">lifeR</a> by Samuel Safran.'
  },
  {
    name: 'CBC compiler',
    tags: ['My code', 'JavaScript', 'CBC'],
    type: 'mine',
    thumb: null,
    postHref: null,
    sourceHref: 'https://github.com/hydrospheric0/cbc-compiler',
    webappHref: null,
    description: 'Automation scripts for compiling Audubon Christmas Bird Count data \u2014 merging field sheets, computing sector summaries, and generating formatted reports for submission.'
  },
  {
    name: 'cbc-capcplot',
    tags: ['My code', 'HTML', 'CBC'],
    type: 'mine',
    thumb: null,
    postHref: null,
    sourceHref: 'https://github.com/hydrospheric0/cbc-capcplot',
    webappHref: 'https://hydrospheric0.github.io/cbc-capcplot/',
    description: 'Visualization tool for Christmas Bird Count data.'
  },
  {
    name: 'cbc-historic',
    tags: ['My code', 'JavaScript', 'CBC', 'birds'],
    type: 'mine',
    thumb: null,
    postHref: null,
    sourceHref: 'https://github.com/hydrospheric0/cbc-historic',
    webappHref: 'https://hydrospheric0.github.io/cbc-historic/',
    description: 'Tool for improving access to historical Christmas Bird Count data.'
  },
  {
    name: 'cbc-weather',
    tags: ['My code', 'JavaScript', 'CBC', 'weather'],
    type: 'mine',
    thumb: null,
    postHref: null,
    sourceHref: 'https://github.com/hydrospheric0/cbc-weather',
    webappHref: 'https://hydrospheric0.github.io/cbc-weather/',
    description: 'CBC weather mapping tool \u2014 visualizes weather conditions recorded during Audubon Christmas Bird Counts.'
  },
  {
    name: 'cbc-webtools',
    tags: ['My code', 'JavaScript', 'CBC'],
    type: 'mine',
    thumb: null,
    postHref: null,
    sourceHref: 'https://github.com/hydrospheric0/cbc-webtools',
    webappHref: null,
    description: 'Web tools supporting Christmas Bird Count data workflows.'
  }
];

/* ── Rendering utilities ──────────────────────────────────────── */

function getProjectTagClass(tag) {
  const tagClasses = {
    JavaScript: 'tag tag--javascript',
    R: 'tag tag--r',
    HTML: 'tag tag--html',
    birds: 'tag tag--theme',
    CBC: 'tag tag--theme',
    eBird: 'tag tag--theme',
    maps: 'tag tag--theme',
    mapping: 'tag tag--theme',
    rarities: 'tag tag--theme',
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
  const webappHeaderTag = proj.webappHref
    ? `<a href="${proj.webappHref}" target="_blank" rel="noopener noreferrer" class="tag tag-webapp">Web app</a>`
    : '';
  // Name element: For webapp-ready coding projects prefer linking via the tile name directly to the app
  const nameEl = proj.webappHref 
    ? `<a href="${proj.webappHref}" target="_blank" rel="noopener noreferrer" class="project-post-link">${proj.name}</a>`
    : (proj.postHref
      ? `<a href="${proj.postHref}" class="project-post-link">${proj.name}</a>`
      : proj.name);
  const linkTags = [
    `<a href="${proj.sourceHref}" target="_blank" rel="noopener noreferrer" class="tag tag-source">Source</a>`,
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
                <div class="project-tags">${linkTags}</div>
              </div>
            </div>`
    : `<div class="project-body">
              <p>${proj.description}</p>
              <div class="project-tags">${linkTags}</div>
            </div>`;
  return `        <div class="project-card" data-tags="${proj.tags.join(' ')}" data-name="${proj.name}" data-post-href="${proj.postHref || ''}">
          <div class="project-header">
            <span class="project-summary-name">${nameEl}</span>
            <div class="project-summary-tags">${typePill}${tagPills}${webappHeaderTag}</div>
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
