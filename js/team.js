$(document).ready(function() {

    var team_photo = $('.abc');

    team_photo.on('mouseover',function() {
        $(this).attr('src', 'http://fakeimg.pl/127x127/?text=127x127')
    });

    team_photo.on('mouseout',function() {
        $(this).attr('src', 'http://fakeimg.pl/227x227/?text=227x227')
    });


});
