var loadButton = document.getElementById('load-more');
var feed = new Instafeed({

    // button pressed = this function
    after: function () {

        // deaktivere btn om alt er ladet
        if (!this.hasNext()) {
            loadButton.setAttribute('disabled', 'disabled');
        }
    },
});

// load more button
loadButton.addEventListener('click', function () {
    feed.next();
});

// kjør feed!
feed.run();