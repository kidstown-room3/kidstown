// router.js
// Reads the URL hash (e.g. #zoo) and renders the matching location
// into the #app container. Each location module registers itself
// on the shared KidsTown.locations object (see js/locations/*.js).

const KidsTown = window.KidsTown || (window.KidsTown = { locations: {} });

const DEFAULT_LOCATION = "home";

function renderLocation(name) {
  const app = document.getElementById("app");
  const navbar = document.getElementById("navbar");
  const location = KidsTown.locations[name];

  // Move the nav bar back to its default spot first, in case the last
  // location moved it into a slot (see below).
  if (navbar && app.contains(navbar)) {
    app.insertAdjacentElement("afterend", navbar);
  }

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

  // A location can add an empty <div id="navbar-slot"> to put the nav
  // bar somewhere other than the default spot (e.g. Home puts it mid-page).
  const slot = app.querySelector("#navbar-slot");
  if (slot && navbar) {
    slot.replaceWith(navbar);
  }
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
