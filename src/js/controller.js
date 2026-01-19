class ProjectController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        this.view.bindFilterCategory(this.handleFilter);
        this.view.bindToggleTheme(this.handleThemeToggle);

        this.onProjectListChanged(this.model.getAllProjects());
    }

    onProjectListChanged = (projects) => {
        this.view.render(projects);
    }

    handleFilter = (category) => {
        console.log(`使用者想要篩選: ${category}`);
        const filteredProjects = this.model.getProjectsByCategory(category);
        this.onProjectListChanged(filteredProjects);
    }

    handleThemeToggle = () => {
        this.view.toggleThemeDisplay();
        console.log("主題已切換");
    }
}