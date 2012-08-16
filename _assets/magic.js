$(function() {
    $.fn.parallax = function(options){
        var $$ = $(this);
        offset = $$.offset();
        var defaults = {
            "start": 0,
            "stop": offset.top + $$.height(),
            "coeff": 0.3
        };
        var opts = $.extend(defaults, options);
        return this.each(function(){
            $(window).bind('scroll', function() {
                windowTop = $(window).scrollTop();  
                if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
                    newCoord = windowTop * opts.coeff;
                    //console.log($$)
                     
                    $$.css({
                        "background-position": "right "+ newCoord + "px"
                    });
                } 
            });
        });
    };    
    $('body').parallax({ "coeff":-0.50 });        	    
})