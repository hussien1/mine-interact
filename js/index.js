//
//$("a").click(
//    function(){
//        var aHref=$(this).attr("href");
//        var d=$(aHref).offset().top;
//        $("body").animate({scrollTop:d},2000);
//    }
//)
$("a").click(function(){
    var aHref=$(this).attr("href");
    var d=$(aHref).offset().top;
    $("body ,html").animate({scrollTop:d},2000)
})
$('.navbar-collapse a').click(function (e) {
    $('.navbar-collapse').collapse('toggle');
  });