


//Få brukernamn og tag
/* 
var feed = new Instafeed({
    get: 'user',
    userId: 'USER_ID',

    filter: function (image) {
        return image.tags.indexOf('TAG_NAME') >= 0;
    }
});
feed.run();


var feed = new Instafeed({
    get: 'tagged',
    tagName: 'awesome',

    clientId: 'YOUR_CLIENT_ID',
    template: '<a href="{{link}}"><img src="{{image}}" /></a>'
});
feed.run();

*/

    var loadButton = document.getElementById('load-more');
    var feed = new Instafeed({
        // every time we load more, run this function
        after: function() {
            // disable button if no more results to load
            if (!this.hasNext()) {
                loadButton.setAttribute('disabled', 'disabled');
            }
        },
    });

    // bind the load more button
    loadButton.addEventListener('click', function() {
        feed.next();
    });

    // run our feed!
    feed.run();