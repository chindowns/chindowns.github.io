$.getJSON("./assets/db/projects.json", db => {

    db.projects.forEach((project, i) => {
        $("#projects").append(`
            <tr>
                <td>
                    <h3><a href="${project.url}" target="blank">${project.title}</a></h3>
                    <p>${project.description}</p>
                    <h5>Learning</h5>
                    <p>${project.learning}</p>
                </td>
                <td>
                    <a class="fab fa-github fa-2x" href="${project.github}" target="blank"></a>
                    <a class="fa fa-link fa-2x" href="${project.url}" target="blank"></a>
                    <a href="${project.url}" target="blank"><img src="${project.image}" width="400px"></a>
                    <div id="project-skills-${i}" class="skills"></div>
                </td>
            </tr>
    `)  
        project.skills.forEach(skill => addSkill(skill, i))
    })
});

function addSkill(skill, i){
    $("#project-skills-"+i).append(`<a class="btn btn-secondary skill">${skill}</a>`);
}