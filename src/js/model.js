class ProjectModel {
    constructor() {
        this.projects = [
            {
                id: 1,
                title: "智慧麵包辨識",
                category: "AI",
                tags: ["Python", "Machine Learning", "OpenCV"],
                desc: "解決結帳效率問題的影像辨識模型，負責資料清洗與訓練。",
                href: "https://github.com/Alan-Allen"
            },
            {
                id: 2,
                title: "TimeMarker",
                category: "App",
                tags: ["Web", "Productivity", "UI/UX"],
                desc: "結合番茄鐘與任務管理的網站。",
                href: "#"
            },
            {
                id: 3,
                title: "個人網站",
                category: "App",
                tags: ["Web", "My self", "UI/UX"],
                desc: "個人介紹網站",
                href: "#"
            },
            {
                id: 4,
                title: "Unity 2D 動作遊戲",
                category: "Game",
                tags: ["Unity", "C#", "Design Patterns"],
                desc: "運用狀態模式重構角色邏輯，包含自製物理碰撞與敵人 AI。",
                href: "#"
            },
            {
                id: 5,
                title: "給我讓開! Get Out My Way!!",
                category: "Game",
                tags: ["Unity", "C#", "Design Patterns"],
                desc: "一時興起的專案，想到甚麼做什麼。",
                href: "#"
            },
            {
                id: 6,
                title: "機運輪迴 Gambler’s Samsara",
                category: "Game",
                tags: ["Unity", "C#", "Design Patterns"],
                desc: "結合機率與策略的單人賭博遊戲，融合「擲骰」與「幸運輪盤」為核心玩法。",
                href: "#"
            },
            {
                id: 7,
                title: "閒置數據 Idle Data",
                category: "Game",
                tags: ["Unity", "C#", "Design Patterns"],
                desc: "增量掛機遊戲（Incremental Idle Game） 資源管理模擬。",
                href: "#"
            }
        ];
    }

    getAllProjects() {
        return this.projects;
    }

    getProjectsByCategory(category) {
        if (category === 'All') return this.projects;
        return this.projects.filter(p => p.category === category);
    }
}