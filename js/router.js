// router.js
// Reads the URL hash (e.g. #zoo) and renders the matching location
// into the #app container. Each location module registers itself
// on the shared KidsTown.locations object (see js/locations/*.js).

const KidsTown = window.KidsTown || (window.KidsTown = { locations: {} });

const DEFAULT_LOCATION = "home";

function renderLocation(name) {
  const app = document.getElementById("app");
  const location = KidsTown.locations[name];

  if (!location) {
    app.innerHTML = `
      <div class="not-found">
        <h1>Hmm, that place doesn't exist yet</h1>
        <p><a href="#home">Head back home</a></p>
      </div>
    `;
    return;
  }

  app.innerHTML = "";
  location.render(app);
}

function handleRouteChange() {
  const hash = window.location.hash.replace("#", "") || DEFAULT_LOCATION;
  renderLocation(hash);
  highlightActiveNavLink(hash);
}

function highlightActiveNavLink(activeName) {
  document.querySelectorAll("#navbar a").forEach((link) => {
    const isActive = link.getAttribute("data-location") === activeName;
    link.classList.toggle("active", isActive);
  });
}

window.addEventListener("hashchange", handleRouteChange);
window.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  handleRouteChange();
});
