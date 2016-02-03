$(document).ready(function(){
    $('#gallery').justifiedGallery({
        rowHeight: 250,
        lastRow: 'justify',
        randomize: true,
        margins: 5
    }).on('jg.complete', function(){
        $('#gallery a').swipebox({
            hideBarsDelay: false
        });
    });
});
