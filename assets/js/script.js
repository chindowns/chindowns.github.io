// hold value of current displayed section/article element.
var hide = "#about";

// Listeners
$('#nav-projects').click(function(){
    if (hide !== "#projects") {
        $(hide).hide('slow');
        $('#projects').show('slow');
        hide = "#projects";
    }
});

$('#nav-about').click(function(){
    if (hide !== '#about') {
        $(hide).hide('slow');
        $('#about').show('slow');
        hide = '#about';
    }
});

$('#nav-blog').click(function(){
    if(hide !== '#blog') {
        $(hide).hide('slow');
        $('#blog').show('slow');
        hide = '#blog';
    }
});

function hide() {
    $('hide').hide(1000);
}


