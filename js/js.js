$(document).ready(function () {
    $('#menu').click(function () {
        $('#animation').slideToggle(function () {
            $('#animation').stop().remove();
        },function () {
            $('#animation').stop().add();
        });
    });

    var width_screen = $(window).width();
    if(width_screen < 800){
        $('.header nav li').hover(function () {
            $(this).children('.header nav li ul').remove().slideToggle();
        });
    }
   $('#close').click(function () {
       ('body').removeClass('shade');
       $('#animation').remove();
   });

    $('.bicycle .classify span').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
    });
    $('.header nav li').hover(function () {
        $(this).children('.header nav li ul').stop().slideToggle();
    });

    /*$('#myCarousel').carousel({interval:3000});
    $('#myAuao').carousel({interval:3000});*/


    $('#seek').click(function () {
        if($("#search_txt").val() == ''){
            alert('亲,请输入查询的型号哦');
        }
    });

    /*var credential = $('.credential .list .txt');
    var list = $('.credential .list .listimg');
    list.click(function () {
        $(this).next().addClass('reveal').siblings().removeClass();
    });*/
});

















