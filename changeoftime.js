$(document).ready(function(){
    $(".memes").hover(function(){
      $(this).css("filter", "blur(0px)");}, function(){$(this).css("filter", "blur(6px)");});
  });

// $(document).ready(function(){
//     $(".year2022").hover(function(){
//       $(this).css("background-color", "red");}, function(){$(this).css("background-color", "blue");});
//   });

$(document).ready(function(){
    $(".leftbar").click(function(){
      $(this).css("filter", "blur(0px)");}, function(){$(this).css("filter", "blur(6px)");});
  });