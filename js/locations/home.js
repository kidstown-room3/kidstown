// home.js
// The KidsTown welcome page, plus the About, Participants, and Help pages
// linked from it. Ported from scripts/home/*.pl in the original CGI.

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

function homeMapAreaTags() {
  return HOME_MAP_AREAS.map(
    (area) =>
      `<area shape="poly" coords="${area.coords}" href="${area.href}" alt="${area.alt}">`
  ).join("\n");
}

KidsTown.locations["home"] = {
  render(container) {
    const areaTags = homeMapAreaTags();

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

      <br>
      <blockquote>
        <div align="center">
          <font face="arial,helvetica" size="+2">Discover Exciting KidsTown!
          <br><a href="#citypark"><font color="#238E68">Go on a journey, </font></a>
          <a href="#cityhall"><font color="#38B0DE">become a detective, </font></a>
          <br><a href="#school"><font color="#FF1CAE">solve puzzles and play games, </font></a>
          <br><a href="#zoo"><font color="#B87333">learn about animals of different regions, </font></a>
          <br><a href="#library"><font color="blue">explore the United States, </font></a>
          and MORE ...<br><br>
          <font color="magenta">Visit<font size="+3"> KidsTown </font>Points of Interest!</font>
          <br><br>
          Just click on the picture above or<br>on the buttons or words below.</font>
        </div>
      </blockquote>

      <div id="navbar-slot"></div>

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

// About KidsTown (scripts/home/about.pl, KEY=1100)
KidsTown.locations["about"] = {
  render(container) {
    container.innerHTML = `
      <section class="location home-subpage">
        <img src="graphics/home/tatcvrlogo.jpg" alt="Tattered Cover" width="77" height="103" align="left">
        <img src="graphics/home/nuu3.gif" alt="" width="118" height="83" align="right">
        <div align="center">
          <b><br><font size="+2">The Making of<br></font><font size="+4">KidsTown</font></b>
        </div>

        <div align="left" style="clear: both">
          <br><br>
          KidsTown was conceived, designed and developed by students at the University
          of Colorado at Denver through participation in the Senior Design Project
          course offered by the Department of Computer Science and Engineering. The
          course represents the capstone experience of the Bachelor of Science in
          Computer Science and Engineering degree program and involves integrating and
          applying academic learning through the design and creation of practical
          products.
          <p>
          KidsTown is a result of the <a href="http://www.jodypaul.com/CLP">Children's
          Literacy Project</a>, a joint effort by the
          <a href="http://www.tatteredcover.com">Tattered Cover Book Store</a> and
          the <a href="http://www.cudenver.edu">University of Colorado at Denver</a> to
          provide CU-Denver students with real-world experience in developing a
          working relationship with a business while designing and creating
          computer-based tools for promoting literacy skills among children.
          Through this collaboration, <a href="#participants">the participants</a>
          address their individual goals in a manner that acknowledges a common
          responsibility for addressing the needs of other community members.
          <p>
          For more information regarding KidsTown and the Children's Literacy
          project, please contact <a href="http://www.jodypaul.com">Dr. Jody
          Paul</a> at <a href="mailto:jody@acm.org">jody@acm.org</a>.
        </div>

        <div align="center">
          <br><br><b><font size="+2"><a href="#home">Return to KidsTown</a></font></b>
        </div>
      </section>
    `;
  },
};

// Children's Literacy Project participants (scripts/home/participants.pl, KEY=1200)
const PARTICIPANT_COLUMNS = [
  {
    heading: "Project Team<br>1998",
    subheading: "Computer Science &amp;<br>Engineering",
    names: [
      "Mohammed Al-Mubarak", "Stephanos Antonomanolakis", "Dia Buhamrah", "Michael Bustos",
      "Guy Determann", "William Ern", "Michael Fremont", "Andrew Gaidar", "Joseph Gee",
      "John Graham", "Michael Hauck", "Kenneth Holck", "Dwight Hull", "Gordon Kirk",
      "William Mackey", "Dacey Mathews", "Steven Mighell", "Garret Rittenhouse",
      "Stephen Scrivner", "Maria Sieber", "Chu Son", "Alejandro Ramirez Tafoya",
      "Giai Truong", "Justin Wade", "Usman Waheed",
    ],
    extraHeading: "College of Liberal Arts &amp; Sciences<br>Graduate Student, M.S.<br>Technical Communication",
    extraNames: ["Aviva Rothschild"],
  },
  {
    heading: "Project Team<br>1997",
    subheading: "Computer Science &amp;<br>Engineering",
    names: [
      "Abdelmajid Afiri", "Alexander Amador", "Dustin Bond", "Ian Cahoon", "Kelly Clauson",
      "Sean Patrick Crotty", "Michael Curran", "Clayton Dean", "Huy Do", "Mark Dunn",
      "Carl Edwards", "Russell Glissmann", "Keith Griess", "Leroy Guatney",
      "Christopher Hassell", "Gerald Juhl", "Xiaoli Liang", "Monglinh Luu",
      "Marvin Mollnow", "Chi Nguyen", "Michael Nguyen", "Stephen Ogden", "Byung Park",
      "Myla Silby", "Michael Suydam", "Raymond Taylor", "William Trobaugh", "Linh Truong",
      "Tien Quoc Vo", "Allan Walker", "Jang Yang", "Shang Yee", "Alexander Zesch",
    ],
    extraHeading: "School of Education<br>Graduate Student, M.A.<br>Curriculum &amp; Instruction, Literacy",
    extraNames: ["Kimberly Gillmore"],
  },
  {
    heading: "Project Team<br>1996",
    subheading: "Computer Science &amp;<br>Engineering",
    names: [
      "Jeffery Belaire", "Hoa Bui", "Bruce Carver", "Ana Escarcega-Macaya", "Rodney Fortney",
      "Lori Halderson", "James Heider", "Kim Heise", "Edward Jones", "John La France",
      "Frank La Polla", "Hiep Lai", "Hanh Nguyen", "Yan Petchatnikov", "Dong Pham",
      "David Pollack", "Deborah Prenger", "Daniel Rotert", "Gary Smith", "Hugh Smith",
      "Thomas Svare", "Aaron Swanson", "Bich Tran", "Cuong Tran", "Khanh Tran", "Le Tran",
      "Thinh Tran", "Kenneth Wong",
    ],
  },
];

const PARTICIPANT_ADVISORS = ["Jody Paul", "Tammy Kilgore", "Roy Laird", "John Clark", "Kimberly Gillmore", "Marcia Baker", "Mary Lou Fenili"];

function renderParticipantColumn(col) {
  const extra = col.extraHeading
    ? `<br><br><font size="-3">${col.extraHeading}</font><br>${col.extraNames.join("<br>")}`
    : "";
  return `
    <div class="participant-column">
      <font size="4"><b>${col.heading}</b></font><br>
      <font size="-3">${col.subheading}</font>
      <br><br>
      ${col.names.join("<br>")}
      ${extra}
    </div>
  `;
}

KidsTown.locations["participants"] = {
  render(container) {
    const columnsHtml = PARTICIPANT_COLUMNS.map(renderParticipantColumn).join("");

    container.innerHTML = `
      <section class="location home-subpage">
        <img src="graphics/home/tatcvrlogo.jpg" alt="Tattered Cover" width="77" height="103" align="left">
        <img src="graphics/home/nuu3.gif" alt="" width="118" height="83" align="right">
        <div align="center" style="clear: both">
          <b><br><font size="+3">Children's Literacy Project</font>
          <br><font size="+4">Principal Participants</font></b>
        </div>

        <div class="participant-columns">
          ${columnsHtml}
          <div class="participant-column">
            <br><br><br>
            <font size="4"><b>Advisors</b></font><br><br>
            ${PARTICIPANT_ADVISORS.join("<br>")}
            <br><br><br><br>
            <font size="4"><b>Organizations</b></font><br><br>
            <b><a href="http://www.tatteredcover.com">Tattered Cover Book Store</a></b><br><br>
            <b><a href="http://www.cudenver.edu">University of Colorado at Denver</a></b>
          </div>
        </div>

        <div align="center">
          <br><br><b><font size="+2"><a href="#home">Return to KidsTown</a></font></b>
          <br><br>
          Copyright 1996, 1997, 1998. All images and text appearing in
          KidsTown are the work of the authors, have been distributed for use
          of this type, or are believed to be in the public domain.
        </div>
      </section>
    `;
  },
};

// Help (scripts/home/helphdr.pl + helptxt.pl, KEY=1010)
KidsTown.locations["help"] = {
  render(container) {
    const areaTags = homeMapAreaTags();

    container.innerHTML = `
      <section class="location home-subpage">
        <h1 align="center"><font size="+4">KidsTown</font><br>Help</h1>

        <div align="center">
          <img src="graphics/home/hometown.gif" alt="Map of KidsTown"
            width="310" height="318" hspace="0" vspace="0" border="0"
            usemap="#help-map" ismap>
          <map name="help-map">
            ${areaTags}
          </map>
        </div>

        <blockquote>
          <font size="+2"><b>
            You may go to any of the points of interest in KidsTown by clicking on the
            places shown in the picture above, or by clicking on the buttons or words
            below.
            <br><br>
            If for some reason you cannot see the pictures, click on the words that
            appear like <a href="#help">this</a> word.
            <br><br>
            Links to KidsTown points of interest appear at the top or bottom of most
            pages.
            <br><br>
            <img src="graphics/home/navbtn_town.gif" alt="KidsTown" width="54" height="60"
              hspace="10" align="left">
            <img src="graphics/home/navbtn_help.gif" alt="Help" width="54" height="60"
              hspace="10" align="right">
            A link back to the KidsTown map will be on the left. A link to a Help page
            will be on the right.
            <br clear="all"><br>
            Now, choose where you would like to visit, and enjoy your stay at KidsTown!
          </b></font>
        </blockquote>
      </section>
    `;
  },
};
