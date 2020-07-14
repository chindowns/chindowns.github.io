// hold value of current displayed section/article element.
var hide = "#about";

// Listeners
$('#nav-projects').click(function () {
    if (hide !== "#projects") {
        $(hide).hide('slow');
        $('#projects').show('slow');
        hide = "#projects";
    }
});

$('#nav-about').click(function () {
    if (hide !== '#about') {
        $(hide).hide('slow');
        $('#about').show('slow');
        hide = '#about';
    }
});

$('#nav-blog').click(function () {
    if (hide !== '#blogs') {
        $(hide).hide('slow');
        $('#blogs').show('slow');
        hide = '#blogs';
    }
});



// Display blogs from Medium

$(function () {
    const data = {
        rss_url: 'https://medium.com/feed/@chindowns'
    };

    $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
        if (response.status === 'ok') {

            console.log(response);
            const items = response.items;

            items.forEach((item, i) => {
                let blog = `<div id="blog-${i} class="blog">
                <h2><a href="${item.link}" SameSite=None;Secure >${item.title}</a></h2>
                 <p>${item.description}</p></div>
                 <br /><hr /><br />
                 `;

                $('#blogs').append(blog);

            });
        };
    });
});


// const getBlogs = (feed) => {

//     $.get('https://medium.com/feed/@chindowns', function(response){
//         if(response.status === "ok"){
//             console.log(response)
//     }

// })
// }

// const parseBlogs = (blogs) => {
//     let children = [...blogs.children];

//   // base case for recursion. 
//   if (!children.length) {
//     return srcDOM.innerHTML
//   }

//   // initializing object to be returned. 
//   let jsonResult = {};

//   for (let child of children) {

//     // checking is child has siblings of same name. 
//     let childIsArray = children.filter(eachChild => eachChild.nodeName === child.nodeName).length > 1;

//     // if child is array, save the values as array, else as strings. 
//     if (childIsArray) {
//       if (jsonResult[child.nodeName] === undefined) {
//         jsonResult[child.nodeName] = [parseBlogs(child)];
//       } else {
//         jsonResult[child.nodeName].push(parseBlogs(child));
//       }
//     } else {
//       jsonResult[child.nodeName] = parseBlogs(child);
//     }
//   }

//   return jsonResult;

// }

// console.log(getBlogs('chindowns'));