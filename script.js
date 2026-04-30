// Heythem Portfolio — interactions, brands & post-grid rendering
//
// ─── HOW TO ADD A NEW BRAND ────────────────────────────────────────────
// 1) Add an entry to the `brands` object with id, name, role, socials.
// 2) Add posts to the `posts` array referencing that brand id.
// ─── HOW TO ADD A POST ─────────────────────────────────────────────────
// Instagram (default):
//   { brand, shortcode, type }
//   type:   "post" | "video" | "carousel"
//   isReel: true → URL uses /reel/ instead of /p/
//   ratio:  "1080 / 1080" → optional override of the default per-type ratio
// Facebook:
//   { brand, platform: "facebook", url, type }
//   url: full https://www.facebook.com/... post or photo URL
// ──────────────────────────────────────────────────────────────────────

const brands = {
  mory: {
    name: "mory__collection",
    role: "Direction de contenu · Vidéo · Carrousels · Posts",
    socials: [
      { platform: "Instagram", handle: "@mory__collection", url: "https://www.instagram.com/mory__collection/" },
      // Ajouter Facebook / TikTok / Site web ici quand tu auras les liens, ex :
      // { platform: "Facebook",  handle: "Mory Collection", url: "https://www.facebook.com/..." },
      // { platform: "TikTok",    handle: "@mory__collection", url: "https://www.tiktok.com/@..." },
    ],
  },
  // Pour ajouter une nouvelle marque, ex. Areen Cubs :
  // areen: {
  //   name: "Areen Cubs",
  //   role: "CMO · Stratégie · Branding · Contenu",
  //   socials: [
  //     { platform: "Instagram", handle: "@areencubs", url: "https://www.instagram.com/areencubs/" },
  //     { platform: "LinkedIn",  handle: "Areen Cubs",  url: "https://www.linkedin.com/company/areencubs/" },
  //   ],
  // },
};

const posts = [
  // mory__collection — ordre tel que fourni
  { brand: "mory", shortcode: "DMYJ-2dPm0i", type: "post" },
  { brand: "mory", shortcode: "DK44jRHt_ru", type: "post" },
  { brand: "mory", shortcode: "DJwyXIyI7zr", type: "post" },
  { brand: "mory", shortcode: "DJroxNsM_Fv", type: "post" },
  { brand: "mory", shortcode: "DJmfMTRBYqQ", type: "post" },
  { brand: "mory", shortcode: "DMnm2EaKvcJ", type: "post" },
  { brand: "mory", shortcode: "DHJS4ESKdyI", type: "video" },
  { brand: "mory", shortcode: "DWcGgAhjVu8", type: "video" },
  { brand: "mory", shortcode: "DRple_1DPjb", type: "video" },
  { brand: "mory", shortcode: "DPCbBcGDBKo", type: "video" },
  { brand: "mory", shortcode: "DPhO2PFjL27", type: "video" },
  { brand: "mory", shortcode: "DVjpliZjOSj", type: "video" },
  { brand: "mory", shortcode: "DVUHHHSDFIg", type: "video" },
  { brand: "mory", shortcode: "DVJ0RLHjB49", type: "video" },
  { brand: "mory", shortcode: "DVwSSomjNx7", type: "video", isReel: true },
  { brand: "mory", shortcode: "DSIJ61_jdKM", type: "post" },
  { brand: "mory", shortcode: "DSDbyfugv4f", type: "video" },
  { brand: "mory", shortcode: "DQmUiKjiCUt", type: "post" },
  { brand: "mory", shortcode: "DPly-fOCLFb", type: "post" },
  { brand: "mory", shortcode: "DKZHKozoQWB", type: "post" },
  { brand: "mory", shortcode: "DQ-EuoBCCMx", type: "carousel" },
  { brand: "mory", shortcode: "DNixHO6IT4H", type: "carousel" },
  { brand: "mory", shortcode: "DMA1vW5NFtN", type: "video" },
  { brand: "mory", shortcode: "DNgGkDSIgMB", type: "post" },
  { brand: "mory", shortcode: "DPOwTXCCD3U", type: "post" },
  { brand: "mory", shortcode: "DPWaXtSiOFo", type: "post" },
  { brand: "mory", shortcode: "DRRljldCF6m", type: "post" },

  // Nouveaux ajouts
  { brand: "mory", shortcode: "DXUGKozAOvW", type: "video" },
  { brand: "mory", shortcode: "DS2pMMYiqAL", type: "video" },
  { brand: "mory", shortcode: "DSTBwOcAElQ", type: "video" },
  { brand: "mory", shortcode: "DSDl4ZvkfcG", type: "video" },
  { brand: "mory", shortcode: "DSVcwdsjAig", type: "carousel" },

  // Facebook
  { brand: "mory", platform: "facebook", type: "post",
    url: "https://www.facebook.com/photo.php?fbid=122170259894509908&set=pb.61565297247993.-2207520000&type=3" },
  { brand: "mory", platform: "facebook", type: "post",
    url: "https://www.facebook.com/photo.php?fbid=122170258706509908&set=pb.61565297247993.-2207520000&type=3" },
];

const TYPE_LABEL = {
  post: "POST",
  video: "VIDÉO",
  carousel: "CARROUSEL",
};

const TYPE_GROUP = [
  { key: "post",     title: "Posts",      hint: "Format vertical 4:5" },
  { key: "video",    title: "Vidéos",     hint: "Format vertical 9:16 — 1080×1920" },
  { key: "carousel", title: "Carrousels", hint: "Format vertical 4:5" },
];

function buildPostUrls(p) {
  if (p.platform === "facebook") {
    const encoded = encodeURIComponent(p.url);
    return {
      url: p.url,
      embed: `https://www.facebook.com/plugins/post.php?href=${encoded}&show_text=false&width=500`,
      platform: "facebook",
    };
  }
  const path = p.isReel ? "reel" : "p";
  const base = `https://www.instagram.com/${path}/${p.shortcode}/`;
  return { url: base, embed: `${base}embed/captioned/`, platform: "instagram" };
}

function buildCard(p) {
  const { url, embed, platform } = buildPostUrls(p);
  const ratioStyle = p.ratio ? ` style="aspect-ratio: ${p.ratio};"` : "";
  const platformLabel = platform === "facebook" ? "Facebook" : "Instagram";
  return `
    <a class="post-card" data-type="${p.type}" data-platform="${platform}"${ratioStyle} href="${url}" target="_blank" rel="noopener" aria-label="Voir ce ${TYPE_LABEL[p.type].toLowerCase()} sur ${platformLabel}">
      <div class="post-card__media">
        <iframe src="${embed}" loading="lazy" scrolling="no" allowtransparency="true" frameborder="0" allow="encrypted-media"></iframe>
      </div>
      <div class="post-card__overlay">
        <span class="post-card__badge">${TYPE_LABEL[p.type]}</span>
        <span class="post-card__cta">Voir sur ${platformLabel} ↗</span>
      </div>
    </a>
  `;
}

function buildTypeGroup(type, items) {
  if (items.length === 0) return "";
  const group = TYPE_GROUP.find((g) => g.key === type);
  const cards = items.map(buildCard).join("");
  return `
    <section class="type-group type-group--${type}">
      <header class="type-group__head">
        <h4 class="type-group__title">
          <span class="type-group__name">${group.title}</span>
          <span class="type-group__count">${items.length}</span>
        </h4>
        <p class="type-group__hint">${group.hint}</p>
      </header>
      <div class="post-grid post-grid--${type}">${cards}</div>
    </section>
  `;
}

function buildBrandSection(brandId, brand, brandPosts, filter) {
  const groupsHtml = TYPE_GROUP
    .filter((g) => filter === "all" || filter === g.key)
    .map((g) => buildTypeGroup(g.key, brandPosts.filter((p) => p.type === g.key)))
    .join("");
  return `
    <article class="brand-section" data-brand="${brandId}">
      ${groupsHtml}
    </article>
  `;
}

function renderBrands(filter) {
  const container = document.getElementById("brands-container");
  const empty = document.getElementById("grid-empty");
  if (!container) return;

  let totalShown = 0;
  const html = Object.entries(brands)
    .map(([id, brand]) => {
      const brandPosts = posts.filter(
        (p) => p.brand === id && (filter === "all" || p.type === filter)
      );
      if (brandPosts.length === 0) return "";
      totalShown += brandPosts.length;
      return buildBrandSection(id, brand, brandPosts, filter);
    })
    .join("");

  container.innerHTML = html;
  if (empty) empty.hidden = totalShown > 0;
}

function updateFilterCounts() {
  const counts = { all: posts.length, post: 0, video: 0, carousel: 0 };
  posts.forEach((p) => { counts[p.type] = (counts[p.type] || 0) + 1; });
  document.querySelectorAll(".filter__count").forEach((el) => {
    const k = el.dataset.countFor;
    if (counts[k] != null) el.textContent = counts[k];
  });
}

// ─── BRAND IDENTITY ───────────────────────────────────────────────────
// Add an entry per brand identity deck/file hosted on Google Drive.
// Make sure each file is shared as "Anyone with the link · Viewer".
// Two card kinds:
//   - `siteUrl` → live-iframe preview of a website (badge: "SITE WEB")
//   - `driveId` → Drive thumbnail of a brand-identity deck (badge: "IDENTITÉ DE MARQUE")
// `cover` = optional local image override (assets/images/...).
const brandIdentities = [
  { name: "Wejden Spire", descriptor: "Proposition & site web",  siteUrl: "https://wejden-spire-proposal.vercel.app/" },
  { name: "Norm Safety",  descriptor: "Identité visuelle & site web", siteUrl: "https://normsafety.vercel.app/" },
  { name: "Maison Turbo",             descriptor: "Directives de marque", driveId: "1MMZ73yEnW3tIOIRxfMprf_lmxlzSJ1dk" },
  { name: "Lab Equipment World Plus", descriptor: "Identité visuelle",    driveId: "1P1RAelLY1OfXBeBcEokHi21bdSwWxzcl" },
  { name: "SH Wear",                  descriptor: "Brand guidelines",     driveId: "11_tSsRzcFWGjbGZoWt3cPjG30WYUafey" },
  { name: "Ab Topo",                  descriptor: "Brand strategy",       driveId: "1xGxkygIw9RPagngq164nRxlxiZdyhv9c" },
];

function buildIdentityCard(item) {
  return item.siteUrl ? buildSiteCard(item) : buildDeckCard(item);
}

function buildSiteCard(item) {
  return `
    <a class="identity-card" data-kind="site" href="${item.siteUrl}" target="_blank" rel="noopener" aria-label="Visiter le site ${item.name}">
      <div class="identity-card__media">
        <iframe src="${item.siteUrl}" loading="lazy" referrerpolicy="no-referrer" sandbox="allow-scripts allow-same-origin"></iframe>
      </div>
      <div class="identity-card__overlay">
        <span class="identity-card__badge identity-card__badge--site">MARQUE RÉACTIVE</span>
        <span class="identity-card__cta">Visiter ↗</span>
      </div>
      <div class="identity-card__caption">
        <strong class="identity-card__name">${item.name}</strong>
        <span class="identity-card__descriptor">${item.descriptor}</span>
      </div>
    </a>
  `;
}

function buildDeckCard(item) {
  const view = `https://drive.google.com/file/d/${item.driveId}/view`;
  const coverPrimary  = item.cover || `https://lh3.googleusercontent.com/d/${item.driveId}=w1600`;
  const coverFallback = `https://drive.google.com/thumbnail?id=${item.driveId}&sz=w1600`;
  return `
    <a class="identity-card" data-kind="deck" href="${view}" target="_blank" rel="noopener" aria-label="Ouvrir l'identité de marque ${item.name}">
      <div class="identity-card__media">
        <img src="${coverPrimary}" alt="${item.name} — couverture" loading="lazy" referrerpolicy="no-referrer"
             onerror="if(!this.dataset.fallback){this.dataset.fallback=1;this.src='${coverFallback}';}else{this.classList.add('is-failed');}" />
      </div>
      <div class="identity-card__overlay">
        <span class="identity-card__badge">IDENTITÉ DE MARQUE</span>
        <span class="identity-card__cta">Ouvrir ↗</span>
      </div>
      <div class="identity-card__caption">
        <strong class="identity-card__name">${item.name}</strong>
        <span class="identity-card__descriptor">${item.descriptor}</span>
      </div>
    </a>
  `;
}

function renderBrandIdentity() {
  const grid = document.getElementById("identity-grid");
  if (!grid) return;
  grid.innerHTML = brandIdentities.map(buildIdentityCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initial render
  updateFilterCounts();
  renderBrands("all");
  renderBrandIdentity();

  // Filter buttons
  const filters = document.querySelectorAll(".filter");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      renderBrands(btn.dataset.filter);
    });
  });

  // Scroll reveal
  const revealTargets = document.querySelectorAll(
    ".section__head, .about__bio, .about__services, .about__stats, .contact__inner"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealTargets.forEach((el) => io.observe(el));
});
