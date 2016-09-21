/**
 * Created by alice on 2016/9/21.
 */
$(document).ready(function(){

    /* $(".main_visual").hover(function(){
     $("#btn_prev,#btn_next").fadeIn()
     },function(){
     $("#btn_prev,#btn_next").fadeOut()
     });*/

    $dragBln = false;

    $(".main_image").touchSlider({
        flexible : true,
        speed : 200,
        btn_prev : $("#btn_prev"),
        btn_next : $("#btn_next"),
        paging : $(".flicking_con a"),
        counter : function (e){
            $(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
            if($('.flicking_con a').eq(0).hasClass('on')){
                $('.n1 .box .left').animate({
                    right: '57%',
                    opacity: 1
                },'100');
                $('.n1 .box .right').animate({
                    left: '44%',
                    opacity: 1
                },'100');
            }
            if($('.flicking_con a').eq(1).hasClass('on')){
                $('.n2 .box .left').animate({
                    left: '0'
                    /*backgroundColor: '#0b151a',*/
                },'100');
                $('.n2 .box .right').animate({
                    left: 0,
                    /*backgroundColor: '#0b151a',*/
                    opacity: 0.6
                },'100');
            }
            if($('.flicking_con a').eq(2).hasClass('on')){
                $('.n3 .box .top').animate({
                    fontSize: '36px',
                    opacity:'1'
                },'100');
                $('.n3 .box .mid').animate({
                    opacity:'1'
                },'100');
                $('.n3 .box .bottom').animate({
                    opacity:'1'
                },'100');
            }
            if($('.flicking_con a').eq(3).hasClass('on')){
                $('.n4 .box .top').animate({
                    bottom: '50%',
                    opacity:'1'
                },'100');
                $('.n4 .box .bottom').animate({
                    top: '50%',
                    opacity:'1'
                },'100');
            }
        }
    });

    $(".main_image").bind("mousedown", function() {
        $dragBln = false;
    });

    $(".main_image").bind("dragstart", function() {
        $dragBln = true;
    });

    $(".main_image a").click(function(){
        if($dragBln) {
            return false;
        }
    });

    timer = setInterval(function(){
        $("#btn_next").click();
    }, 5000);

    $(".main_visual").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            $("#btn_next").click();
        },5000);
    });

    $(".main_image").bind("touchstart",function(){
        clearInterval(timer);
    }).bind("touchend", function(){
        timer = setInterval(function(){
            $("#btn_next").click();
        }, 5000);
    });
/*$('container').hover(function () {
    $('.container p').css('color','#ffffff');
})*/
});
