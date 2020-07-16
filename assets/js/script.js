// hold value of current displayed section/article element.
let show = "#about";
let showBlog = '#cards'

// Listeners
$('#nav-projects').click(() => {
    if (show !== "#projects") {
        $(show).hide('slow');
        $('#projects').show('slow');
        show = "#projects";
    }
});

$('#nav-about').click(() => {
    if (show !== '#about') {
        $(show).hide('slow');
        $('#about').show('slow');
        show = '#about';
    }
});

$('#nav-blog').click(() => {
    console.log(show, showBlog);
    showBlog = '#cards';
    if (show !== '#blogs') {
        $(show).hide('slow');
        $('#blogs').show('slow');
        $('#cards').show('slow');
        show = '#blogs';
    } else {
        $('#blogs').show('slow');
        $('#cards').show('slow');
        };
});

// Display blogs from Medium

let blog;

$(() => {
    $('#blogs').append(`<div id="cards"></div>`)
    $('#blogs').append(`<div id="blog"></div>`)

    const data = {
        rss_url: 'https://medium.com/feed/@chindowns'
    };

    $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
        if (response.status === 'ok') {
            response.items.forEach((item, i) => {
                blog = item;
                let text = exampleText(item.description)
                let card = `<div id="blog-${i}>
                <div class="card" style="width: 18rem;" SameSite=None;Secure >
                    <img class="card-img-top" src="${item.thumbnail}" alt="Card image cap"  SameSite=None;Secure >
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${text}</p>
                        <button id="btn${i}" class="btn btn-primary" >Read More</a>
                    </div>
                </div>
                `
                $("#cards").append(card)

                $("#btn"+i).click(() => displayBlog(item))
            });
        };
    });

    function exampleText(description) {
        let start = description.indexOf("<p>");
        let text = description.slice(start, start + 150);
        return text;
    }
    
    function displayBlog(blog) {
        console.log("displaying Blog");
        console.log(blog);
    
        if (showBlog !== '#blog') {
            $(showBlog).hide('slow');
            $('#blog').show('slow');
            show = '#blog';
        }
    
        $('#blog').html(`
                <h2><a href="${blog.link}" SameSite=None;Secure >${blog.title}</a></h2>
                <p>${blog.description}</p></div>
                <br /><br />`
        );
    }

});


