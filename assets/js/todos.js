//line through the specific li when clicked
//ul will be on the page when event listener added
//li may not be on the page
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//click on x to delete the todo
$("ul").on("click","span",function(event){
    //delete the parent of span (li)
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    //to stop bubbling up to parents 
    event.stopPropagation();
});

//get the value inside the inputbox while enter hit
$("input[type = 'text']").keypress(function(event){
    //if enter key is hit
    if(event.which == 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ todoText + "</li>")
    }
});

//make the edit sign interactive
$(".fa-edit").click(function(){
    $("input[type = 'text']").fadeToggle();
})