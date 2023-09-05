// 

// var swiper = new Swiper(".swiper-left", {
//     slidesPerView: 8,
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

$(function(){
    $('.recruit .list_btn .btn1').click(function(){
        $('.recruit .recruit1').css('display','block');
        $('.recruit .recruit2').css('display','none');
        $('.recruit .recruit3').css('display','none');
        $('.recruit .recruit4').css('display','none');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.recruit .list_btn .btn2').click(function(){
        $('.recruit .recruit2').css('display','block');
        $('.recruit .recruit1').css('display','none');
        $('.recruit .recruit3').css('display','none');
        $('.recruit .recruit4').css('display','none');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.recruit .list_btn .btn3').click(function(){
        $('.recruit .recruit3').css('display','block');
        $('.recruit .recruit1').css('display','none');
        $('.recruit .recruit2').css('display','none');
        $('.recruit .recruit4').css('display','none');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.recruit .list_btn .btn4').click(function(){
        $('.recruit .recruit4').css('display','block');
        $('.recruit .recruit1').css('display','none');
        $('.recruit .recruit2').css('display','none');
        $('.recruit .recruit3').css('display','none');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });





    $('.main_wrap .link').hover(function(){
        $(this).children('div').toggleClass('active');
        // $(this).parents().children('div').removeClass('active');
    });

    $('.intro .menu_btn').click(function(){
        $('.intro_nav .nav_box').toggleClass('active');
    });
});




// function checkIt(){
//     var email = userinput.email.value;
//     var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
//         if(exptext.test(email)==false){
//         //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
//         alert("이메일형식이 올바르지 않습니다.");
//         userinput.email.focus();
//     return false;
//     }
    
// }




