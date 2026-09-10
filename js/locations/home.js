// home.js
// The KidsTown main/welcome page. Matches the original mainPgHdr.pl /
// ktmap.pl / mainPgTxt.pl / mainPgFtr.pl output: a "Welcome to KidsTown"
// heading, the clickable town map image (with the same clickable regions
// as the original image map, now routed to hash links instead of KEYs),
// and the "About KidsTown" blurb.

// Same polygon coordinates as the ALT/AREA map in the original ktmap.pl,
// just pointed at hash routes instead of kt.cgi?KEY=####.
const HOME_MAP_AREAS = [
  { coords: "10,37,27,37,38,20,53,16,54,6,71,1,74,18,85,20,88,33,106,34,105,49,94,64,33,71,17,45,7,42,10,37", href: "#township", alt: "Go to the Town Ship!" },
  { coords: "91,101,111,106,136,96,143,89,157,89,176,94,191,75,194,65,204,60,211,67,204,71,200,71,192,96,189,108,188,137,127,137,126,115,109,116,91,102", href: "#museum", alt: "Go to the Museum!" },
  { coords: "168,2,216,22,236,11,241,2,260,1,260,19,241,24,242,36,284,29,308,15,308,46,292,60,231,70,193,55,166,32,161,19,162,2", href: "#zoo", alt: "Go to the Zoo!" },
  { coords: "237,287,238,272,239,265,239,246,233,239,257,214,257,196,263,186,267,180,270,169,285,171,282,182,271,179,273,185,279,194,281,206,285,206,305,235,301,240,300,263,279,288,242,287", href: "#school", alt: "Go to the School!" },
  { coords: "226,145,239,132,240,109,234,99,260,95,268,87,270,70,290,72,288,87,273,84,285,93,289,101,309,118,307,124,307,161,251,173,226,144", href: "#cityhall", alt: "Go to City Hall!" },
  { coords: "7,195,8,151,35,143,36,132,86,130,86,143,90,144,91,194,62,201,35,202,7,195", href: "#toystore", alt: "Go to the Toy Store!" },
  { coords: "7,307,4,222,35,216,61,227,63,287,10,310,7,307", href: "#citypark", alt: "Go to the Park!" },
  { coords: "97,301,102,241,143,217,169,227,167,280,131,309,113,312,97,301", href: "#library", alt: "Go to the Library!" },
];

KidsTown.locations["home"] = {
  render(container) {
    const areaTags = HOME_MAP_AREAS.map(
      (area) =>
        `<area shape="poly" coords="${area.coords}" href="${area.href}" alt="${area.alt}">`
    ).join("\n");

    container.innerHTML = `
      <div align="center">
        <b><font size="+2">Welcome to<br></font>
        <font size="+4">KidsTown</font></b>
      </div>
      <br>

      <div align="center">
        <img src="graphics/home/hometown.gif" alt="Map of KidsTown"
          width="310" height="318" hspace="0" vspace="0" border="0"
          usemap="#home" ismap>
        <map name="home">
          ${areaTags}
        </map>
      </div>

      <br><br>
      <center>
        <table width="600" border="0">
          <tr><td>
            <font face="arial,helvetica"><b>KidsTown</b> is an interactive experience with
            stories, puzzles, and games, focused on enhancing the literacy of elementary
            school-aged children. Learn how the <b>University of Colorado at Denver</b>
            and the <b>Tattered Cover Book Store</b> joined together in
            <b><a href="#about">The Making of KidsTown</a></b>.
            </font>
          </td></tr>
        </table>
      </center>
    `;
  },
};
