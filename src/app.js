import home, { homeScript } from "./views/home.js";
import view, { viewScript } from "./views/view.js";
import edit, { editScript } from "./views/edit.js";
import write, { writeScript } from "./views/write.js";

const routes = {
    "/": { title: "Home", render: home, script: homeScript },
    "/view/:id": { title: "View", render: view, script: viewScript },
    "/edit/:id": { title: "Edit", render: edit, script: editScript },
    "/write": { title: "Write", render: write, script: writeScript },
};

function router() {
    let view = routes[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
        view.script();
    } else {
        history.replaceState("", "", "/");
        router();
    }
}

// Handle navigation
window.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
