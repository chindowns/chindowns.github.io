// Get the information from about.json
$.getJSON("./assets/db/about.json", db => {
    console.log(db);
    let image = `<img id="profile-img" src=${db.about.image} />`;
    let aboutDescriptiion = `<div id="aboutDesc"></div><br /><br />`;
    $("#about").html(image, aboutDescriptiion);

    let paragraphs = db.about.paragraphs;
    paragraphs.forEach(paragraph => 
        $("#about").append(`${paragraph}<br /><br />`));

    $("#about").append(`<div id="snippets"><hr /></div>`)

    db.snippets.forEach(paragraph => 
        $("#snippets").append(`
            <icon class="${paragraph.icon} center" /></icon>
            <h3 class="center">${paragraph.title}</h3>
            <p class="center">${paragraph.description}</p>
            <hr />
        `));

    $("#about").append(`<div id="skills"></div>`);

    db.techSkills.skills.forEach(skill => 
        $("#skills").append(`<div class="btn btn-secondary">${skill}</div>`))
});

