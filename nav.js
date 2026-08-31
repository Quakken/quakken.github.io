const setupNavigation = () => {
    const nav = document.querySelector(".site-nav");
    if (!nav || nav.parentElement.querySelector(".nav-toggle")) return;

    const toggle = document.createElement("button");
    toggle.className = "nav-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "site-navigation");
    toggle.setAttribute("aria-label", "Open navigation menu");
    toggle.innerHTML = '<span class="nav-toggle__lines" aria-hidden="true"></span>';
    nav.id = "site-navigation";
    nav.before(toggle);

    const close = () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");
    };

    toggle.addEventListener("click", () => {
        const open = !nav.classList.contains("is-open");
        nav.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    });

    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
    window.addEventListener("resize", () => { if (window.innerWidth > 760) close(); });
};

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setupNavigation);
else setupNavigation();
