//ES6
'use strict';

$(document).ready(function () {
    var userfeed = new Instafeed({
        get: 'user',
        userId: '257728237',
        //        clientId: '',
        
     //   get:'tagged',
   //     tagName: 'wittest1',
       limit: 20,
        resolution: 'standard_resolution', //could also wrap them in a link
        accessToken: '257728237.1677ed0.da14365741ae4d87a3154b86dda4e81d', //todo: instert token
        sortBy: 'most-recent', //eller mostl-liked
        //template is where the magic happens
        template: '<div class="col-lg-3 col-sm-3 col-xs-5 instafeed"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a> </div>',
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