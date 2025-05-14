// Configurações
const config = {
    translations: {
        pt: {
            name: "Ronaldo da Silva Alves",
            title: "Especialista em Soluções Inovadoras",
            about: "30 anos | Rio de Janeiro, Brasil",
            skills: ["Gestão de Projetos", "Desenvolvimento Web", "Análise de Dados"]
        },
        en: {
            name: "Ronaldo da Silva Alves",
            title: "Innovative Solutions Expert",
            about: "30 years old | Rio de Janeiro, Brazil",
            skills: ["Project Management", "Web Development", "Data Analysis"]
        },
        es: {
            name: "Ronaldo da Silva Alves",
            title: "Experto en Soluciones Innovadoras",
            about: "30 años | Río de Janeiro, Brasil",
            skills: ["Gestión de Proyectos", "Desarrollo Web", "Análisis de Datos"]
        }
    },
    currentLang: 'pt'
};

// Funções Principais
function initApp() {
    setupEventListeners();
    loadContent();
    applyTheme();
}

function setupEventListeners() {
    // Troca de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            config.currentLang = btn.dataset.lang;
            updateContent();
            document.querySelectorAll('.lang-btn').forEach(b => 
                b.classList.toggle('active', b.dataset.lang === config.currentLang)
            );
        });
    });

    // Tema escuro
    document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
}

function loadContent() {
    updateContent();
}

function updateContent() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        const translation = config.translations[config.currentLang][key];

        if (translation) {
            element.textContent = translation;
        }
    });

    // Atualizar as habilidades
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = config.translations[config.currentLang].skills
            .map(skill => `<div class="skill-card">${skill}</div>`).join('');
    }
}

// Tema Escuro
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

function applyTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Inicialização
document.addEventListener('DOMContentLoaded', initApp);
