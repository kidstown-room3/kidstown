// navbar.js
// Builds the shared navigation bar shown on every location, using the
// same image nav buttons as the original navbar.pl (graphics/home/navbtn_*.gif),
// just as an in-page hash link instead of a KEY query-string link.

const NAV_LINKS = [
  { name: "home", label: "KidsTown", img: "navbtn_town.gif" },
  { name: "cityhall", label: "CityHall", img: "navbtn_cityhall.gif" },
  { name: "school", label: "School", img: "navbtn_school.gif" },
  { name: "library", label: "Library", img: "navbtn_library.gif" },
  { name: "zoo", label: "Zoo", img: "navbtn_zoo.gif" },
  { name: "toystore", label: "ToyStore", img: "navbtn_toystore.gif" },
  { name: "citypark", label: "CityPark", img: "navbtn_citypark.gif" },
  { name: "township", label: "TownShip", img: "navbtn_township.gif" },
  { name: "museum", label: "Museum", img: "navbtn_museum.gif" },
];

function renderNavbar() {
  const nav = document.getElementById("navbar");

  const cells = NAV_LINKS.map(
    (loc) => `
      <td>
        <a href="#${loc.name}" data-location="${loc.name}">
          <img src="graphics/home/${loc.img}" alt="${loc.label}">
          <center>${loc.label}</center>
        </a>
      </td>`
  ).join("");

  nav.innerHTML = `
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>${cells}</tr>
    </table>
  `;

  const footer = document.getElementById("footer");
  if (footer) {
    footer.innerHTML = "";
  }
}
