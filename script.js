const text = "Full-Stack Web Developer | Automation & Systems Assistant | AI Automation Learner";
let index = 0;

const projects = [
  {
    id: "portfolio",
    icon: "🌐",
    title: "Modern Portfolio Website",
    description: "A responsive personal website designed to showcase web development and automation skills.",
    url: "https://vincentdoctolerocalica.github.io/portfolio/"
  },
  {
    id: "lead-automation",
    icon: "📩",
    title: "Lead Automation System",
    description: "Website form connected to webhook, Pabbly, AI lead scoring, and Pipedrive CRM.",
    url: "https://vincentdoctolerocalica.github.io/portfolio/"
  },
  {
    id: "crm-pipeline",
    icon: "📊",
    title: "CRM Pipeline Setup",
    description: "Lead stages, sales activities, customer records, and automated follow-up tracking.",
    url: "https://vincentdoctolerocalica.github.io/portfolio/"
  }
];

function typeText() {
  const typingElement = document.getElementById("typing");

  if (typingElement && index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 45);
  }
}

typeText();

document.getElementById("year").textContent = new Date().getFullYear();

const fadeElements = document.querySelectorAll(".fade");

function showOnScroll() {
  fadeElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const modal = document.getElementById("projectModal");
const projectList = document.getElementById("projectList");
const openProjectsButton = document.getElementById("openProjects");
const projectCards = document.querySelectorAll(".project-card");

function renderProjects() {
  projectList.innerHTML = projects.map(project => `
    <a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer" data-project-link="${project.id}">
      <span class="project-icon">${project.icon}</span>
      <span class="project-meta">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </span>
      <span class="project-action">Open Site →</span>
    </a>
  `).join("");
}

function openProjectModal(projectId) {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const selectedProject = modal.querySelector(`[data-project-link="${projectId}"]`);
  const firstProject = modal.querySelector(".project-link");
  const target = selectedProject || firstProject;

  if (target) {
    target.focus();
  }
}

function closeProjectModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  openProjectsButton.focus();
}

renderProjects();

openProjectsButton.addEventListener("click", () => openProjectModal());

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    openProjectModal(card.dataset.projectId);
  });
});

modal.querySelectorAll("[data-close-modal]").forEach(element => {
  element.addEventListener("click", closeProjectModal);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("show")) {
    closeProjectModal();
  }
});
