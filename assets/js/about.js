// Get the information from about.json
const db = {};

$.getJSON('../db/about.json', (json) => {
    aboutDB = json;
    setAbout();
});

function setAbout() {
    let portrait = db.about.
}
