var cheerio = require( "cheerio" )


var wraph1Tags = function(page){

    var $ = cheerio.load(page.content);

    $('h1').each(function(){

        var h1Wrapper = $('<div style="text-align: center;">');

        var h1 = $(this).text();

        var $h1tag = $('<h1>'+h1);

        h1Wrapper.append($h1tag);
        
        $(this).before(h1Wrapper);
        
        // Remove the image
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
