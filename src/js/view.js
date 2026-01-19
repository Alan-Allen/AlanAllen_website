class ProjectView {
    constructor() {
        this.projectContainer = document.querySelector('.projects-grid');
        this.filterButtons = document.querySelectorAll('.filter-btn');

        this.themeBtn = document.querySelector('.nav-actions button');
        this.themeIcon = this.themeBtn.querySelector('.icon');

        this.backToTopBtn = document.querySelector('.back-to-top');
        this.initBackToTop();

        this.body = document.body;
    }

    render(projects) {
        this.projectContainer.innerHTML = "";

        if (projects.length === 0) {
            this.projectContainer.innerHTML = "<p>目前沒有此類別的專案。</p>";
            return;
        }

        projects.forEach(project => {
            const html = `
                <div class="project-card">
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <div class="tags">
                            ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                        </div>
                        <p>${project.desc}</p>
                        <a href="#" class="link">查看內容 &rarr;</a>
                    </div>
                </div>
            `;
            this.projectContainer.insertAdjacentHTML('beforeend', html);
        });
    }

    bindFilterCategory(handler) {
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', event => {
                const category = event.target.dataset.category;
                handler(category);
            });
        });
    }    

    toggleThemeDisplay() {
        this.body.classList.toggle('light-mode');
    }

    bindToggleTheme(handler) {
        this.themeBtn.addEventListener('click', () => {
            handler();
        });
    }

    initBackToTop() {
        if (!this.backToTopBtn) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                this.backToTopBtn.classList.add('visible');
            } else {
                this.backToTopBtn.classList.remove('visible');
            }
        });
    }
}