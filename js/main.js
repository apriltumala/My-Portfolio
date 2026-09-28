/**
 * April Rose A. Tumala — Master Portfolio Script
 * Interactive Case Studies, Dynamic Filtering, Live Timezone,
 * Custom Magnetic Cursor, and Clipboard Micro-interactions.
 */

// Comprehensive Project Case Study Database
const projectDatabase = {
  solis: {
    id: "solis",
    title: "Solis Botanica — Restorative Herbal Elixirs",
    subtitle: "Sustainable luxury packaging suite, botanical vector system, and 3D kinetic launch sequence.",
    categoryBadge: "Packaging & Motion Case Study",
    tags: ["Packaging", "Botanical Illustration", "Motion Graphics"],
    image: "assets/images/solis-botanica.jpg",
    imageAlt: "Solis Botanica luxury packaging boxes and amber dropper bottles with gold foil botanicals",
    meta: {
      role: "Lead Designer & Illustrator",
      discipline: "Packaging, Illustration & Motion",
      timeline: "4 Weeks (Personal Brief)",
      tools: "Illustrator, InDesign, After Effects, Blender"
    },
    sections: [
      {
        heading: "01 / The Strategic Challenge",
        content: `The herbal wellness and adaptogen market is crowded with two extremes: sterile pharmaceutical vials or overly rustic, faux-vintage apothecary bottles. <em>Solis Botanica</em> was designed to carve out an elevated third path: an architectural, museum-grade bathroom vanity piece that feels both scientifically intentional and spiritually grounding.<br><br>
        The objective was to create a modular 3-bottle product line (<em>Dawn Focus</em>, <em>Dusk Balance</em>, and <em>Nocturne Rest</em>), engineering custom reverse-tuck cartons with zero plastic lamination, metallic foil stamping, and a kinetic launch teaser for social and digital billboards.`
      },
      {
        heading: "02 / Hand-Drawn Botanical System",
        content: `Rather than using stock vector assets, I developed a bespoke series of botanical line illustrations inspired by 19th-century scientific lithographs. Each formulation corresponds to a specific active botanical:
        <ul style="margin-top: 0.75rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>No. 01 Dawn Focus:</strong> Wild Rosemary &amp; Stinging Nettle (clean vertical strokes symbolizing mental alertness).</li>
          <li><strong>No. 02 Dusk Balance:</strong> Lavender Spike &amp; Golden Oat Straw (flowing horizontal curves).</li>
          <li><strong>No. 03 Nocturne Rest:</strong> Ashwagandha Root &amp; Black Elderberry (intricate, grounding root structures).</li>
        </ul>
        The vector line weights were calibrated down to 0.45pt to ensure razor-sharp reproduction during hot-foil stamping on textured paper stock.`
      },
      {
        heading: "03 / Dieline Engineering & Material Finishes",
        content: `Every physical touchpoint was specified for sustainable tactile luxury:
        <table class="specs-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Material Specification</th>
              <th>Finishing &amp; Craft Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Outer Carton</strong></td>
              <td>350gsm G.F Smith Colorplan (Natural White)</td>
              <td>Embossed blind brandmark, copper hot-foil, matte varnish</td>
            </tr>
            <tr>
              <td><strong>Bottle Label</strong></td>
              <td>FSC-certified uncoated wet-strength paper</td>
              <td>Die-cut asymmetric fill window revealing liquid level</td>
            </tr>
            <tr>
              <td><strong>Closure</strong></td>
              <td>Recyclable frosted glass dropper with rubber bulb</td>
              <td>Single-color screenprinted graduation marks</td>
            </tr>
            <tr>
              <td><strong>Structural Fold</strong></td>
              <td>Reverse-tuck folding box with safety seal</td>
              <td>No adhesive glue points required for outer shell</td>
            </tr>
          </tbody>
        </table>`
      },
      {
        heading: "04 / Kinetic Extension (Motion Graphics)",
        content: `To translate the tactile packaging to digital commerce, I created a 15-second kinetic launch sequence in Adobe After Effects. Using custom cubic bezier easing curves (<code>cubic-bezier(0.16, 1, 0.3, 1)</code>), the botanical vector lines organically draw themselves across the screen, mimicking the unfurling of a fern frond, before resolving into the 3D rendered unboxing rotation.`
      },
      {
        heading: "05 / Key Takeaways & Learnings",
        content: `This project deepened my technical command of vector stroke tolerances for metal die stamping. Calculating the 0.5mm bleed requirements alongside structural paper fold resistance taught me that great packaging is equal parts engineering precision and poetic storytelling.`
      }
    ]
  },

  tactility: {
    id: "tactility",
    title: "In Praise of Tactility — Monograph on Print Culture",
    subtitle: "An 80-page editorial publication celebrating the sensory weight of paper, Swiss binding, and baseline typography.",
    categoryBadge: "Editorial & Print Case Study",
    tags: ["Editorial Design", "Swiss Binding", "Typography"],
    image: "assets/images/tactility-print.jpg",
    imageAlt: "Exposed Swiss binding editorial monograph open on linen table showing open spine and architectural typography",
    meta: {
      role: "Editorial Designer & Curator",
      discipline: "Book Design & Typography",
      timeline: "5 Weeks (Curatorial Project)",
      tools: "Adobe InDesign, Photoshop, Illustrator, Risograph"
    },
    sections: [
      {
        heading: "01 / The Strategic Challenge",
        content: `In an era of fleeting screen scrolls, the physical weight of ink on paper carries profound emotional permanence. <em>In Praise of Tactility</em> is an 80-page curatorial publication examining how paper grain, binding methods, and typographic grids shape human reading comprehension and memory retention.`
      },
      {
        heading: "02 / Editorial Architecture & Typographic System",
        content: `The layout is anchored by a strict 6-column asymmetric grid. Wide outer margins allow room for marginalia, footnotes, and tactile handling without thumbs obscuring the body copy.
        <ul style="margin-top: 0.75rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Display Type:</strong> <em>Fraunces</em> — chosen for its sculpted, warm serifs and humanist optical sizing.</li>
          <li><strong>Body Text:</strong> <em>Plus Jakarta Sans</em> — set at 9.5pt on 14.5pt leading for effortless, fatigue-free reading.</li>
          <li><strong>Folios &amp; Data:</strong> <em>JetBrains Mono</em> — providing archival cataloguing precision.</li>
        </ul>`
      },
      {
        heading: "03 / Substrate & Binding Craft",
        content: `The book was designed as a physical study of material transitions:
        <table class="specs-table">
          <thead>
            <tr>
              <th>Section</th>
              <th>Paper Stock</th>
              <th>Binding &amp; Production Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cover</strong></td>
              <td>400gsm Duplex Archival Board</td>
              <td>Raw deckled edges with deep letterpress deboss</td>
            </tr>
            <tr>
              <td><strong>Essay Pages</strong></td>
              <td>120gsm Munken Print White 15</td>
              <td>Warm uncoated paper with high bulk and opacity</td>
            </tr>
            <tr>
              <td><strong>Image Plates</strong></td>
              <td>90gsm Translucent Vellum Interleaves</td>
              <td>Overlaying architectural wireframes atop duotone photos</td>
            </tr>
            <tr>
              <td><strong>Spine Binding</strong></td>
              <td>Exposed Swiss Ota-bind</td>
              <td>Thread-sewn with custom Terracotta linen thread; lays 180° flat</td>
            </tr>
          </tbody>
        </table>`
      },
      {
        heading: "04 / Motion Editorial Teaser",
        content: `To bridge the physical book with social media channels, I filmed and animated high-frame-rate page turn simulations with typographic breakdown overlays in After Effects, highlighting how the golden ratio grid governs the composition.`
      }
    ]
  },

  kinesis: {
    id: "kinesis",
    title: "Kinesis — Contemporary Independent Film Showcase",
    subtitle: "A motion-first dynamic brand identity driven by 24fps cinematic shutter cadences and elastic typography.",
    categoryBadge: "Motion Graphics & Brand Identity",
    tags: ["Motion Graphics", "Kinetic Typography", "Event Identity"],
    image: "assets/images/kinesis-motion.jpg",
    imageAlt: "Kinetic typography poster for Kinesis Indie Film Festival in contemporary gallery exhibition",
    meta: {
      role: "Motion & Identity Designer",
      discipline: "Dynamic Identity & Motion Graphics",
      timeline: "3 Weeks (Event Concept)",
      tools: "After Effects, Illustrator, Cinema 4D, Premiere Pro"
    },
    sections: [
      {
        heading: "01 / The Strategic Challenge",
        content: `Film festival branding frequently defaults to literal clichés: celluloid strips, clapperboards, and camera lens circles. <em>Kinesis</em> was built for a forward-thinking international film festival celebrating avant-garde, non-linear cinema. The identity needed to embody raw momentum, narrative tension, and cinematic frame-rates directly within the typography itself.`
      },
      {
        heading: "02 / Kinetic Design System",
        content: `The core visual mechanic is the <strong>Elastic Typographic Shutter</strong>. Letters compress along the horizontal axis and snap open in rhythm with the 24fps motion cadence of cinema projection.
        <br><br>
        Each festival category is signaled by a distinct motion velocity:
        <ul style="margin-top: 0.75rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Narrative Features:</strong> Slow, sweeping 48-frame typographic dissolves.</li>
          <li><strong>Short Films &amp; Animation:</strong> Snappy, elastic 8-frame pop-snap easing curves.</li>
          <li><strong>Experimental Showcase:</strong> Waveform distortion passes that react dynamically to ambient sound frequencies.</li>
        </ul>`
      },
      {
        heading: "03 / Multi-Format Deployment",
        content: `The system was deployed across both digital and physical touchpoints:
        <table class="specs-table">
          <thead>
            <tr>
              <th>Deliverable</th>
              <th>Format &amp; Medium</th>
              <th>Motion / Print Treatment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Subway OOH Billboards</strong></td>
              <td>Vertical 9:16 LED Screens (4K 60fps)</td>
              <td>High-contrast kinetic typography loops designed for peripheral glance retention</td>
            </tr>
            <tr>
              <td><strong>Screen Title Sequence</strong></td>
              <td>15-Second Cinema Opener (DCI 4K)</td>
              <td>Sub-bass audio sync with modular kinetic type transitions</td>
            </tr>
            <tr>
              <td><strong>VIP Festival Passes</strong></td>
              <td>Matte PVC with Clear Spot Gloss</td>
              <td>Translating kinetic motion blur into static layered holographic foil</td>
            </tr>
          </tbody>
        </table>`
      }
    ]
  },

  nocturne: {
    id: "nocturne",
    title: "Nocturne Chocolatier — Single-Origin Botanical Bars",
    subtitle: "Artisanal confectionery packaging inspired by vintage botanical woodcuts, copper foil, and cotton paper wraps.",
    categoryBadge: "Packaging & Illustration Case Study",
    tags: ["Packaging", "Botanical Illustration", "Printmaking"],
    image: "assets/images/nocturne-chocolate.jpg",
    imageAlt: "Single origin dark chocolate bar packaging with intricate botanical block print illustration and copper foil on stone",
    meta: {
      role: "Packaging Designer & Illustrator",
      discipline: "Packaging, Illustration & Print",
      timeline: "3 Weeks (Brand Identity Brief)",
      tools: "Procreate, Adobe Illustrator, InDesign, Photoshop"
    },
    sections: [
      {
        heading: "01 / The Strategic Challenge",
        content: `Single-origin bean-to-bar chocolate is an agricultural craft similar to fine wine. <em>Nocturne Chocolatier</em> required packaging that communicates the terroir of the cacao farm (Ecuador 75%, Madagascar 80%, Peru 70%) while commanding a premium $14 retail shelf presence in boutique grocers.`
      },
      {
        heading: "02 / Linocut Botanical Illustrations",
        content: `I hand-drew intricate botanical compositions highlighting the cacao pod (<em>Theobroma cacao</em>), flowering blossoms, and jungle foliage. The drawings were styled with the bold, textured chisel marks of traditional linocut printmaking, giving the packaging an artisanal, human touch that stands out against sterile geometric competitors.`
      },
      {
        heading: "03 / Structural Wrap & Foil Stamping",
        content: `The chocolate packaging consists of an inner protective gold-leaf foil sleeve wrapped in an outer band made of <strong>220gsm Gmund Cotton Paper</strong>. Copper hot-foil stamping catches ambient retail lighting, elevating the hand-drawn cacao pods with warm, radiant luster.`
      }
    ]
  }
};

// Global State
let currentProjectId = "solis";
const projectOrder = ["solis", "tactility", "kinesis", "nocturne"];

document.addEventListener("DOMContentLoaded", () => {
  initLiveClock();
  initCustomCursor();
  initFiltering();
  initCaseStudyModal();
  initResumeModal();
  initClipboardInteraction();
  initEssayClipboard();
  initAiClipboard();
  initReflectionTabs();
  initMobileMenu();
  initSmoothScroll();
});

/**
 * 1. Live Timezone Clock (Manila GMT+8)
 */
function initLiveClock() {
  const timeEl = document.getElementById("currentTime");
  if (!timeEl) return;

  function updateTime() {
    const options = {
      timeZone: "Asia/Manila",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    };
    const now = new Date();
    const formatted = new Intl.DateTimeFormat("en-US", options).format(now);
    timeEl.textContent = `${formatted} (Active)`;
  }

  updateTime();
  setInterval(updateTime, 30000);
}

/**
 * 2. Magnetic Interactive Cursor Follower
 */
function initCustomCursor() {
  const cursor = document.getElementById("cursorFollower");
  const cursorText = document.getElementById("cursorText");
  if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

  let mouseX = -100, mouseY = -100;
  let cursorX = -100, cursorY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth lerp loop
  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Attach hover triggers
  const interactiveMedia = document.querySelectorAll(".project-media-wrap");
  interactiveMedia.forEach((media) => {
    media.addEventListener("mouseenter", () => {
      cursor.classList.add("visible");
      const customLabel = media.getAttribute("data-cursor") || "View";
      if (cursorText) cursorText.textContent = customLabel;
    });

    media.addEventListener("mouseleave", () => {
      cursor.classList.remove("visible");
    });
  });
}

/**
 * 3. Project Filter System
 */
function initFiltering() {
  const filterTabs = document.querySelectorAll(".filter-tab");
  const projectCards = document.querySelectorAll(".project-card");
  const heroBadges = document.querySelectorAll(".hero-disciplines-bar .discipline-badge");

  function applyFilter(category) {
    // Update active tab button
    filterTabs.forEach((tab) => {
      const match = tab.getAttribute("data-category") === category;
      tab.classList.toggle("active", match);
      tab.setAttribute("aria-selected", match ? "true" : "false");
    });

    // Update hero badges
    heroBadges.forEach((badge) => {
      badge.classList.toggle("active", badge.getAttribute("data-filter") === category);
    });

    // Filter project cards
    projectCards.forEach((card) => {
      const tags = card.getAttribute("data-tags") || "";
      if (category === "all" || tags.includes(category)) {
        card.style.display = "flex";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 20);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(12px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 250);
      }
    });
  }

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const cat = tab.getAttribute("data-category");
      applyFilter(cat);
    });
  });

  heroBadges.forEach((badge) => {
    badge.addEventListener("click", () => {
      const cat = badge.getAttribute("data-filter");
      applyFilter(cat);
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/**
 * 4. Interactive Case Study Modal
 */
function initCaseStudyModal() {
  const modal = document.getElementById("caseStudyModal");
  const backdrop = document.getElementById("modalBackdrop");
  const closeBtn = document.getElementById("modalCloseBtn");
  const modalBody = document.getElementById("modalBody");
  const modalCategoryBadge = document.getElementById("modalCategoryBadge");
  const prevBtn = document.getElementById("prevProjectBtn");
  const nextBtn = document.getElementById("nextProjectBtn");

  if (!modal || !modalBody) return;

  function openCaseStudy(projectId) {
    const data = projectDatabase[projectId];
    if (!data) return;

    currentProjectId = projectId;

    if (modalCategoryBadge) {
      modalCategoryBadge.textContent = data.categoryBadge;
    }

    // Build modal markup
    let html = `
      <div class="modal-header-hero">
        <div class="modal-discipline-tags">
          ${data.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <h2 class="modal-title" id="modalProjectTitle">${data.title}</h2>
        <p class="section-description" style="margin-bottom: 2rem;">${data.subtitle}</p>
        <img src="${data.image}" alt="${data.imageAlt}" class="modal-lead-visual">
      </div>

      <div class="modal-meta-grid">
        <div class="meta-box">
          <span class="meta-box-label">Role</span>
          <span class="meta-box-val">${data.meta.role}</span>
        </div>
        <div class="meta-box">
          <span class="meta-box-label">Disciplines</span>
          <span class="meta-box-val">${data.meta.discipline}</span>
        </div>
        <div class="meta-box">
          <span class="meta-box-label">Timeline</span>
          <span class="meta-box-val">${data.meta.timeline}</span>
        </div>
        <div class="meta-box">
          <span class="meta-box-label">Tools Used</span>
          <span class="meta-box-val">${data.meta.tools}</span>
        </div>
      </div>
    `;

    data.sections.forEach((sec) => {
      html += `
        <div class="modal-section-block">
          <h3 class="modal-section-title">${sec.heading}</h3>
          <div class="modal-text">${sec.content}</div>
        </div>
      `;
    });

    modalBody.innerHTML = html;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalBody.scrollTop = 0;
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Trigger handlers
  document.querySelectorAll(".case-study-trigger, .project-media-wrap").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const parentCard = trigger.closest(".project-card");
      const projId = trigger.getAttribute("data-project-id") || (parentCard ? parentCard.getAttribute("data-project") : null);
      if (projId) openCaseStudy(projId);
    });
  });

  if (backdrop) backdrop.addEventListener("click", closeModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Keyboard escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal.classList.contains("open")) closeModal();
      const resume = document.getElementById("resumeModal");
      if (resume && resume.classList.contains("open")) resume.classList.remove("open");
    }
  });

  // Next / Prev navigation
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const idx = projectOrder.indexOf(currentProjectId);
      const prevIdx = (idx - 1 + projectOrder.length) % projectOrder.length;
      openCaseStudy(projectOrder[prevIdx]);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const idx = projectOrder.indexOf(currentProjectId);
      const nextIdx = (idx + 1) % projectOrder.length;
      openCaseStudy(projectOrder[nextIdx]);
    });
  }
}

/**
 * 5. Resume / CV Modal
 */
function initResumeModal() {
  const resumeModal = document.getElementById("resumeModal");
  const resumeBackdrop = document.getElementById("resumeBackdrop");
  const resumeCloseBtn = document.getElementById("resumeCloseBtn");
  const openButtons = [
    document.getElementById("openResumeModalBtn"),
    document.getElementById("aboutResumeBtn"),
    document.getElementById("footerResumeBtn")
  ];

  function openResume() {
    if (resumeModal) {
      resumeModal.classList.add("open");
      resumeModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  }

  function closeResume() {
    if (resumeModal) {
      resumeModal.classList.remove("open");
      resumeModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  openButtons.forEach((btn) => {
    if (btn) btn.addEventListener("click", openResume);
  });

  if (resumeBackdrop) resumeBackdrop.addEventListener("click", closeResume);
  if (resumeCloseBtn) resumeCloseBtn.addEventListener("click", closeResume);
}

/**
 * 6. Copy Email with Animated Toast Feedback
 */
function initClipboardInteraction() {
  const copyBtn = document.getElementById("copyEmailBtn");
  const copyBtnText = document.getElementById("copyBtnText");
  const copyToast = document.getElementById("copyToast");
  const emailBox = document.getElementById("emailBox");
  const emailAddress = "aprilrosetumala@gmail.com";

  if (!copyBtn) return;

  function copyAction() {
    navigator.clipboard.writeText(emailAddress).then(() => {
      if (copyBtnText) copyBtnText.textContent = "Copied! ✨";
      if (copyToast) copyToast.classList.add("show");

      setTimeout(() => {
        if (copyBtnText) copyBtnText.textContent = "Copy to Clipboard";
        if (copyToast) copyToast.classList.remove("show");
      }, 3500);
    }).catch(() => {
      // Fallback
      window.location.href = `mailto:${emailAddress}`;
    });
  }

  copyBtn.addEventListener("click", copyAction);
  if (emailBox) {
    emailBox.addEventListener("click", (e) => {
      if (e.target !== copyBtn && !copyBtn.contains(e.target)) {
        copyAction();
      }
    });
  }
}

/**
 * 6b. Copy Essay Text Interaction
 */
function initEssayClipboard() {
  const copyBtn = document.getElementById("copyEssayBtn");
  const copyBtnText = document.getElementById("copyEssayBtnText");
  const copyToast = document.getElementById("essayCopyToast");
  const essayContent = document.getElementById("essayTextContent");

  if (!copyBtn || !essayContent) return;

  copyBtn.addEventListener("click", () => {
    const textToCopy = "Reflection: Professionalism in IT\nBy April Rose A. Tumala\n\n" + essayContent.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      if (copyBtnText) copyBtnText.textContent = "Copied! ✨";
      if (copyToast) copyToast.classList.add("show");

      setTimeout(() => {
        if (copyBtnText) copyBtnText.textContent = "Copy Reflection Text";
        if (copyToast) copyToast.classList.remove("show");
      }, 3500);
    }).catch(() => {
      // Fallback
    });
  });
}

/**
 * 7. Mobile Navigation Drawer
 */
function initMobileMenu() {
  const toggle = document.getElementById("mobileToggle");
  const drawer = document.getElementById("mobileDrawer");
  const links = document.querySelectorAll(".mobile-link");

  if (!toggle || !drawer) return;

  toggle.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("open");
    drawer.classList.toggle("open", !isOpen);
    toggle.setAttribute("aria-expanded", !isOpen ? "true" : "false");
    document.body.style.overflow = !isOpen ? "hidden" : "";
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

/**
 * 8. Smooth Scrolling Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId.startsWith("#project-")) return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/**
 * 9. Reflection Tab Switching
 */
function initReflectionTabs() {
  const tabs = document.querySelectorAll(".reflection-tab");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Deactivate all tabs and hide all panels
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      document.querySelectorAll(".reflection-plain-card").forEach((panel) => {
        panel.classList.add("hidden-panel");
      });

      // Activate clicked tab and show its panel
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      const panelId = tab.getAttribute("aria-controls");
      const panel = document.getElementById(panelId);
      if (panel) panel.classList.remove("hidden-panel");
    });
  });
}

/**
 * 10. Copy AI Reflection Text Interaction
 */
function initAiClipboard() {
  const copyBtn = document.getElementById("copyAiBtn");
  const copyBtnText = document.getElementById("copyAiBtnText");
  const copyToast = document.getElementById("aiCopyToast");
  const aiContent = document.getElementById("aiTextContent");

  if (!copyBtn || !aiContent) return;

  copyBtn.addEventListener("click", () => {
    const textToCopy = "Reflection: Introduction to AI Literacy and Responsible Use\nBy April Rose A. Tumala\n\n" + aiContent.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      if (copyBtnText) copyBtnText.textContent = "Copied! ✨";
      if (copyToast) copyToast.classList.add("show");

      setTimeout(() => {
        if (copyBtnText) copyBtnText.textContent = "Copy Text";
        if (copyToast) copyToast.classList.remove("show");
      }, 3500);
    }).catch(() => {});
  });
}
