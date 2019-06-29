//waits until page is loaded first
$(document).ready(function(){

    //applies colour red to paragraphs when clicked on 
    $("p").click(function(){
        $("p").addClass("highlight_text");
    });

    //will add lightblue to h2 elements
    $("h2").hover(function(){
        $("h2").addClass( "h2_color");   
    });

    /*
    this will apply larger font size to the active h2 element 
    by adding the h2_font_size class but 
    not the other h2 elements by removing class h2_font_size from them
    */
    $("#hr_html").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_html").addClass("h2_font_size");
    });

    $("#hr_mysql").hover(function(){
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").addClass("h2_font_size");
    });

    $("#hr_python").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_python").addClass("h2_font_size");
    });

    $("#hr_jquery").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_jquery").addClass("h2_font_size");
    });

    $("#hr_django").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_django").addClass("h2_font_size");
    });

    $("#hr_css").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });

    //applies colour black to body background when mouse enters over buttons
    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });

    //applies colour grey to body background when mouse leaves buttons
    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee"); 
    });
    
    /*$("#button_one").click(function (){
        $("#button_one").hide('fast');
    });*/
    
    $("#button_one").click(function (){
        $("#para_one").slideToggle('1000');
    });
    $("#button_two").click(function (){
        $("#para_two").slideToggle('1000');
    });
    $("#button_three").click(function (){
        $("#para_three").slideToggle('1000');
    });
    $("#button_four").click(function (){
        $("#para_four").slideToggle('1000');
    });
    $("#button_five").click(function (){
        $("#para_five").slideToggle('1000');
    });
    $("#button_six").click(function (){
        $("#para_six").slideToggle('1000');
    });
    
     $("#button_one").click(function (){
        $("#para_one").slideToggle('1000');
    });
    
    
     // Use the fadeTo effect when the mouse hovers over a specific button
    // and fadeTo again when the mouse is no longer hovering over the button
    $("#button_one").mouseenter(function(){
        $('#button_one').fadeTo(1000, 0.5);
    });
    $("#button_one").mouseleave(function(){
        $('#button_one').fadeTo(1000, 1);
    });

    $("#button_two").mouseenter(function(){
        $('#button_two').fadeTo(1000, 0.5);
    });
    $("#button_two").mouseleave(function(){
        $('#button_two').fadeTo(1000, 1);
    });

    $("#button_three").mouseenter(function(){
        $('#button_three').fadeTo(1000, 0.5);
    });
    $("#button_three").mouseleave(function(){
        $('#button_three').fadeTo(1000, 1);
    });

    $("#button_four").mouseenter(function(){
        $('#button_four').fadeTo(1000, 0.5);
    });
    $("#button_four").mouseleave(function(){
        $('#button_four').fadeTo(1000, 1);
    });

    $("#button_five").mouseenter(function(){
        $('#button_five').fadeTo(1000, 0.5);
    });
    $("#button_five").mouseleave(function(){
        $('#button_five').fadeTo(1000, 1);
    });

    $("#button_six").mouseenter(function(){
        $('#button_six').fadeTo(1000, 0.5);
    });
    $("#button_six").mouseleave(function(){
        $('#button_six').fadeTo(1000, 1);
    });
    
$(".stream-nav").on("click" function() {
    // A selector to match all cards in all streams
    var allStreamsCardsSelector = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    var thisStreamCardsSelector = "." + this.id + "-card";

    // First remove the highlight from all of the cards
    $(allStreamsCardsSelector).removeClass("card-highlight");
    // Then apply the highlight to just this stream's cards
    $(thisStreamCardsSelector).addClass("card-highlight");
});
 
 

 
 
});
