var cheerio = require( "cheerio" )


var wraph1Tags = function(page){

    var $ = cheerio.load(page.content);

    $('h1').each(function(){

        var h1Wrapper = $('<div style="text-align: center;line-height: 2px;">');

        var h1 = $(this).text();

        var $h1tag = $('<h1>'+h1);

        h1Wrapper.append($h1tag);
        
        $(this).before(h1Wrapper);
        
        $(this).remove();
    });

    $('h5').each(function(){

        var h5Wrapper = $('<div style="text-align: center;line-height: 2px;">');

        var h5 = $(this).text();

        var $h5tag = $('<h5>'+h5);

        h5Wrapper.append($h5tag);
        
        $(this).before(h5Wrapper);

        $(this).remove();
    });

    $('h6').each(function(){

        var h6Wrapper = $('<div style="text-align: center;">');

        var h6 = $(this).text();

        var $h6tag = $('<h6>'+h6);

        h6Wrapper.append($h6tag);
        
        $(this).before(h6Wrapper);

        $(this).remove();
    });

    
    page.content = $.html();

    return page;

}

module.exports = {


    // Map of hooks
    hooks: {

    	'page': function(page){    		
    		return wraph1Tags(page);
    	}
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};
