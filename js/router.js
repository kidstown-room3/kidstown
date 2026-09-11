// router.js
// Reads the URL hash (e.g. #zoo) and renders the matching location into
// the #app container. Locations register themselves on KidsTown.locations
// (see js/locations/*.js).
//
// Also handles sub-routes like #cityhall/5010, for locations that have
// more than one page. The part after the slash is passed to render()
// as a second argument.

const KidsTown = window.KidsTown || (window.KidsTown = { locations: {} });

const DEFAULT_LOCATION = "home";

function renderLocation(name, subRoute) {
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

  // City Park uses a different background than the rest of the site --
  // see css/style.css's body.loc-* rules.
  document.body.className = `loc-${name}`;

  app.innerHTML = "";
  location.render(app, subRoute);

  // A location can add an empty <div id="navbar-slot"> to put the nav
  // bar somewhere other than the default spot (e.g. Home puts it mid-page).
  const slot = app.querySelector("#navbar-slot");
  if (slot && navbar) {
    slot.replaceWith(navbar);
  }
}

function handleRouteChange() {
  const rawHash = window.location.hash.replace("#", "") || DEFAULT_LOCATION;
  const slashIndex = rawHash.indexOf("/");
  const name = slashIndex === -1 ? rawHash : rawHash.slice(0, slashIndex);
  const subRoute = slashIndex === -1 ? null : rawHash.slice(slashIndex + 1);

  renderLocation(name, subRoute);
  highlightActiveNavLink(name);
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
