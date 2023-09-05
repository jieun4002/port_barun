//
$(function () {
    AOS.init();




    // 인재채용
    $('.recruit_text').click(function () {
        $(this).siblings('.text_area').slideToggle();
        $(this).toggleClass('active');
    });

    $(document).ready(function () {
        // $('.gnb li a').click(function(e){
        //     e.preventDefault();
        // })

        $('.aboutus').click(function () {
            var offset = $('#about').offset();
            $('html').animate({
                scrollTop: offset.top
            }, 800);
        });

        $('.whyus').click(function () {
            var offset = $('#why').offset();
            $('html').animate({
                scrollTop: offset.top
            }, 800);
        });

        $('.service').click(function () {
            var offset = $('#service').offset();
            $('html').animate({
                scrollTop: offset.top
            }, 800);
        });

        $('.contactus').click(function () {
            var offset = $('#contact').offset();
            $('html').animate({
                scrollTop: offset.top
            }, 800);
        });

        // $('보내기 or 전송하기 버튼').click(function(){
        //     Email = $('이메일 input 아이디').val();

        //     var regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        //    //조건을 만족하면 true를 반환, 만족하지 못하면 false반환
        //     if(regEmail.test(Email)){
        //         alert("메일을 성공적으로 전송했습니다.");
        //     } else{     
        //         alert("올바른 이메일 형식이 아닙니다.");
        //     }

        // });

    });

    $('.serve .menu_btn').click(function () {
        $('.nav_box').toggleClass('active');
        $('body').toggleClass('active');
    });


    $(window).resize(function () {
        var width = window.innerWidth;
        if (width < 769) {
            console.log(1);

            $('.nav .aboutus').click(function () {
                var offset = $('#about').offset();
                $('html').animate({
                    scrollTop: offset.top
                }, 800);
                $('.nav_box').removeClass('active');
                $('body').removeClass('active');
            });

            $('.nav .whyus').click(function () {
                var offset = $('#why').offset();
                $('html').animate({
                    scrollTop: offset.top
                }, 800);
                $('.nav_box').removeClass('active');
                $('body').removeClass('active');
            });

            $('.nav .service').click(function () {
                var offset = $('#service').offset();
                $('html').animate({
                    scrollTop: offset.top
                }, 800);
                $('.nav_box').removeClass('active');
                $('body').removeClass('active');
            });

            $('.nav .contactus').click(function () {
                var offset = $('#contact').offset();
                $('html').animate({
                    scrollTop: offset.top
                }, 800);
                $('.nav_box').removeClass('active');
                $('body').removeClass('active');
            });
        }
    }).resize();

});



// const $topBtn = document.querySelector(".top");

// // 버튼 클릭 시 맨 위로 이동
// $topBtn.onclick = () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });  
// }

$(window).scroll(function () {
    let wscroll = $(window).scrollTop();
    console.log('scrollTop: ' + wscroll);
    // let obj = $('footer').offset().top - $(window).height();
    // console.log('offset: ' + obj);
    const $topBtn = document.querySelector(".top");
    // 버튼 클릭 시 맨 위로 이동
    $topBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    if (200 < wscroll) {
        $('.top').animate({
            right: 15
        }, 350)
    } else {
        $('.top').stop(1, 1).animate({
            right: -300
        }, 500)
    }
});