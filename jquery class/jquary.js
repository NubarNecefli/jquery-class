$(document).ready(function(){
    $("#btn1").click(function(){
        $("div").hide();
    });

    $("#btn2").click(function(){
        $("div").show();
    });


$("#btn3").click(function(){
        $("div").toggle();
    });
})




$(document).ready(function(){
        $("#bn1").click(function(){
            $("#a").slideUp();
        });
    
        $("#btn2").click(function(){
            $("#b").slideDown();
        });
    
    
    $("#btn3").click(function(){
            $("#c").toggle();
        });
    })
    




$("h1").mouseover(function(){
    $("h1").css("background-color", "green")
});


$("h1").mouseleave(function(){
    $("h1").css("background-color", "red")
});
