//ES6
'use strict';

$(document).ready(function () {
    var userfeed = new Instafeed({
        get: 'user',
        userId: '8890310250',
        //        clientId: '',
        
//   get:'tagged',
//  326 tagName: 'wittest1',
       limit: 28,
        resolution: 'standard_resolution', //could also wrap them in a link
        accessToken: '8890310250.1677ed0.826c5d443d244611aea46fa8bdb36806', //todo: instert token
        sortBy: 'most-recent', //eller mostl-liked
        //template is where the magic happens
        template: '<div class="instafeed"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a> </div>',
        //to go to instagram when click on picture change href="" to link.
    });
    userfeed.run();

    //Makes a gallery of all element with the class 
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a', //target the anker tag
        gallery: {
            enabled: true
        }
    });
});

$().ready(function() {
            $('[rel="tooltip"]').tooltip();
        });
        function rotateCard(btn) {
            var $card = $(btn).closest('.card-container');
            console.log($card);
            if ($card.hasClass('hover')) {
                $card.removeClass('hover');
            } else {
                $card.addClass('hover');
            }
        };