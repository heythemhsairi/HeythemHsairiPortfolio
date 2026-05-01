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
// Local image (own design, not posted):
//   { brand, platform: "image", image, type, title?, ratio? }
//   image: relative path under assets/images/
// ──────────────────────────────────────────────────────────────────────

const brands = {
  mory: {
    name: "mory__collection",
    role: "Direction de contenu · Vidéo · Carrousels · Posts",
    socials: [
      { platform: "Instagram", handle: "@mory__collection", url: "https://www.instagram.com/mory__collection/" },
    ],
  },
  frida: {
    name: "Frida Store",
    role: "Affiche événementielle · Design social",
    socials: [],
  },
  bebelle: {
    name: "Bebelle Cosmétiques",
    role: "Direction artistique · Visuels comparatifs · Design social",
    socials: [],
  },
};

const posts = [
  // mory__collection — ordre tel que fourni
  { brand: "mory", shortcode: "DMYJ-2dPm0i", type: "post" },
  { brand: "mory", shortcode: "DK44jRHt_ru", type: "post" },
  { brand: "mory", shortcode: "DJwyXIyI7zr", type: "post" },
  { brand: "mory", shortcode: "DJroxNsM_Fv", type: "post" },
  { brand: "mory", shortcode: "DJmfMTRBYqQ", type: "post" },
  { brand: "mory", shortcode: "DMnm2EaKvcJ", type: "post" },
  { brand: "mory", shortcode: "DWcGgAhjVu8", type: "video" },
  { brand: "mory", shortcode: "DRple_1DPjb", type: "video" },
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
  { brand: "mory", shortcode: "DSTBwOcAElQ", type: "video" },
  { brand: "mory", shortcode: "DSDl4ZvkfcG", type: "video" },
  { brand: "mory", shortcode: "DSVcwdsjAig", type: "carousel" },

  // Vidéos récentes
  { brand: "mory", shortcode: "DVBTR6FAapF", type: "video" },
  { brand: "mory", shortcode: "DWWPM9ok1uo", type: "video" },
  { brand: "mory", shortcode: "DVVRmoRj7Uj", type: "video" },
  { brand: "mory", shortcode: "DUv5rAXkjtf", type: "video" },

  // Facebook
  { brand: "mory", platform: "facebook", type: "post",
    url: "https://www.facebook.com/photo.php?fbid=122170259894509908&set=pb.61565297247993.-2207520000&type=3" },
  { brand: "mory", platform: "facebook", type: "post",
    url: "https://www.facebook.com/photo.php?fbid=122170258706509908&set=pb.61565297247993.-2207520000&type=3" },

  { brand: "mory", shortcode: "DRPbEPQCE7m", type: "carousel" },

  // Carrousels carrés (1:1)
  { brand: "mory", shortcode: "DFdUuy5o-JO", type: "carousel", ratio: "1080 / 1080" },
  { brand: "mory", shortcode: "DEz9airNOKx", type: "carousel", ratio: "1080 / 1080" },
  { brand: "mory", shortcode: "DCPVorBoNX9", type: "carousel", ratio: "1080 / 1080" },
  { brand: "mory", shortcode: "DBwhVIKI0_-", type: "carousel", ratio: "1080 / 1080" },

  // Frida Store — affiche événementielle (4:5)
  { brand: "frida", platform: "image", type: "post", image: "assets/images/frida-bazar.jpg", title: "Frida Bazar — Vide Dressing 28-30 nov." },

  // Bebelle Cosmétiques — visuel comparatif (4:5)
  { brand: "bebelle", platform: "image", type: "post", image: "assets/images/bebelle-poster.png", title: "Bebelle Cosmétiques — Avant / Après" },
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
  if (p.platform === "image") {
    return { url: p.image, embed: null, platform: "image" };
  }
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
  const platformLabel =
    platform === "facebook" ? "Facebook" :
    platform === "image"    ? "image"    : "Instagram";
  const cta =
    platform === "image" ? "Voir en grand ↗" : `Voir sur ${platformLabel} ↗`;
  const media = platform === "image"
    ? `<img src="${p.image}" alt="${p.title || ''}" loading="lazy" />`
    : `<iframe src="${embed}" loading="lazy" scrolling="no" allowtransparency="true" frameborder="0" allow="encrypted-media"></iframe>`;
  return `
    <a class="post-card" data-type="${p.type}" data-platform="${platform}"${ratioStyle} href="${url}" target="_blank" rel="noopener" aria-label="Voir ce ${TYPE_LABEL[p.type].toLowerCase()}">
      <div class="post-card__media">${media}</div>
      <div class="post-card__overlay">
        <span class="post-card__badge">${TYPE_LABEL[p.type]}</span>
        <span class="post-card__cta">${cta}</span>
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

function renderBrands(filter) {
  const container = document.getElementById("brands-container");
  const empty = document.getElementById("grid-empty");
  if (!container) return;

  const html = TYPE_GROUP
    .filter((g) => filter === "all" || filter === g.key)
    .map((g) => buildTypeGroup(g.key, posts.filter((p) => p.type === g.key)))
    .join("");

  container.innerHTML = html;

  const totalShown = posts.filter((p) => filter === "all" || p.type === filter).length;
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

// ─── TESTIMONIALS ─────────────────────────────────────────────────────
const testimonials = [
  {
    brand: "Atla3campy",
    stars: 5,
    quote: "7awlet nikhdem les conceptions wahdi, mais la manière dont vous avez transformé ma nouvelle page en une plateforme professionnelle prête à vendre, louer et attirer des partenaires est incroyable. J'apprécie vraiment la créativité que vous avez apportée ainsi que notre collaboration.",
    delivered: "Transformation complète du profil Instagram en marque cohérente et professionnelle.",
  },
  {
    brand: "Lab Equipment World",
    stars: 5,
    quote: "Vous m'impressionnez toujours ! J'adore le logo créatif et l'apparence du site web maintenant. Même si travailler avec vous est un peu coûteux, cela en vaut vraiment la peine. Vous êtes désormais mon équipe de confiance pour tous nos projets.",
    delivered: "Création du logo, pack de posts social media et bannières de site — esthétique propre, moderne et professionnelle.",
  },
  {
    brand: "Vayno",
    stars: 5,
    quote: "Je tiens à vous remercier pour votre excellent travail. Ce que j'ai le plus apprécié, c'est votre service client. L'équipe de design m'a expliqué tous les détails nécessaires et m'a guidé à travers les étapes pour arriver au résultat final. Je suis très satisfait du service.",
    delivered: "Identité de marque from scratch · cartes de visite · photos de profil · couverture Facebook · icônes highlights Instagram personnalisées.",
  },
  {
    brand: "Jardinage.K",
    stars: 4,
    quote: "L'expérience était parfaite. J'adore le logo et le style que vous avez choisi pour moi. J'aimerais simplement que les choses soient un peu plus rapides la prochaine fois. Nous collaborerons à nouveau très bientôt !",
    delivered: "Logo qui reflète l'essence de la marque · carrousels engageants · contenu photo · scripts, montage et voix-off.",
  },
  {
    brand: "Zenpharma",
    stars: 5,
    quote: "Zeyeed maakoum parfait. Totally worth it — hedeka aleh bech nwali netaamel maakoum.",
    delivered: "Collaboration sur un projet de montage vidéo marketing pour amplifier le message de la marque.",
  },
  {
    brand: "Meduse",
    stars: 4,
    quote: "Je suis globalement satisfait de la qualité de vos designs et de votre créativité. Je reste confiant quant à notre collaboration future et suis certain que nous pourrons continuer à grandir ensemble. Merci encore pour votre travail.",
    delivered: "Bannières publicitaires et PDF imprimables · refonte des cartes de visite · roll-ups · catalogue produit en cours.",
  },
  {
    brand: "GenZ",
    stars: 5,
    quote: "Un service rapide et une qualité exceptionnelle — je ne m'attendais pas à ça pour le prix ! n'chleh na9lo hajet oukhrine 3an 9ribe, merci !",
    delivered: "Construction d'une identité de marque qui résonne avec leur audience cible.",
  },
];

function buildTestimonialCard(t, i) {
  const stars = Array.from({ length: 5 }, (_, idx) =>
    `<span class="testimonial-card__star${idx < t.stars ? ' is-filled' : ''}" aria-hidden="true">★</span>`
  ).join("");
  return `
    <article class="testimonial-card" style="--i:${i}">
      <header class="testimonial-card__head">
        <h3 class="testimonial-card__brand">${t.brand}</h3>
        <div class="testimonial-card__rating" aria-label="${t.stars} étoiles sur 5">${stars}</div>
      </header>
      <blockquote class="testimonial-card__quote">${t.quote}</blockquote>
      <p class="testimonial-card__delivered">
        <span class="testimonial-card__delivered-label">Livrables ·</span>
        ${t.delivered}
      </p>
    </article>
  `;
}

function renderTestimonials() {
  const grid = document.getElementById("testimonials-grid");
  if (!grid) return;
  // Sort by rating descending so the strongest endorsements lead each column.
  const sorted = [...testimonials].sort((a, b) => b.stars - a.stars);
  grid.innerHTML = sorted.map((t, i) => buildTestimonialCard(t, i)).join("");
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

// ─── DYNAMIC EFFECTS ─────────────────────────────────────────────────
// Wrap each word of an element in <span class="word"> with --i index so
// CSS can stagger its rise-in animation. Preserves inline tags like <em>.
function staggerWords(root) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let n;
  while ((n = walker.nextNode())) textNodes.push(n);
  let i = 0;
  textNodes.forEach((node) => {
    const parts = node.textContent.split(/(\s+)/);
    if (parts.length === 1 && parts[0] === "") return;
    const frag = document.createDocumentFragment();
    parts.forEach((part) => {
      if (part === "") return;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
      } else {
        const span = document.createElement("span");
        span.className = "word";
        span.style.setProperty("--i", i++);
        span.textContent = part;
        frag.appendChild(span);
      }
    });
    node.parentNode.replaceChild(frag, node);
  });
}

// Count up from 0 to data-count when the element scrolls into view.
function animateCounters() {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10) || 0;
        const suffix = el.dataset.suffix || "";
        const duration = target > 100 ? 1600 : 1100;
        const start = performance.now();
        function tick(now) {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  els.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initial render
  updateFilterCounts();
  renderBrands("all");
  renderBrandIdentity();
  renderTestimonials();

  // Dynamic effects
  staggerWords(document.querySelector(".hero__title"));
  animateCounters();

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
