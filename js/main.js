//new slider
$(document).ready(function(){
    var swiper1 = new Swiper(".swiper1", {
        loop:true,
        // autoplay:{
        //     delay:3000,
        //     disableOnInteraction:false,
        // },
        pagination:{
            el:".swiper1 .swiper-pagination",
            clickable:true,
        },
        navigation:{
            nextEl:".swiper1 .swiper-button-next",
            prevEl:".swiper1 .swiper-button-prev",
        },
    });

    var swiper2 = new Swiper(".swiper2", {
        // 화면에 보여지는 슬라이드 갯수
        slidesPerView: 2.5,
        // 슬라이드 간격(픽셀)
        spaceBetween: 30, 
        freeMode: true,
    });

    var swiper3 = new Swiper(".swiper3", {
        // 화면에 보여지는 슬라이드 갯수
        slidesPerView: 2.5,
        // 슬라이드 간격(픽셀)
        spaceBetween: 30, 
        freeMode: true,
    });
    //스크롤 이벤트에 따른 투명도 애니메이션
    //한번에 사라졌다 나타나야 되기 때문에 똑같은 명령어 두번 씀
    //섹션3 (.ignite)
    gsap.timeline({
        scrollTrigger:{
            trigger:'.ignite',
            pin:true,
            start:"top top",
            end:"bottom top",
            scrub:1, 
        }
    // }).to('.ignite .banner_img1',{duration:4, opacity:0})
        }).to('.ignite .fake img',{duration:4, scale:1.2})
    
    // gsap.timeline({
    //     scrollTrigger:{
    //         trigger:'.ignite',
    //         // pin:true,
    //         start:"top top",
    //         end:"bottom top",
    //         scrub:1, 
    //     }
    // }).to('.ignite .banner_img2',{duration:4, opacity:1});

    // 섹션4 (.hello)
    gsap.timeline({
        scrollTrigger:{
            trigger:'.hello',
            pin:true,
            start:"top top",
            end:"+2000",
            scrub:1, 
        }
    }).to('.hello .banner_img1',{duration:4, opacity:0})
      .to('.hello .banner_img1',{duration:4, scale:0})
      
    //배너 hello 부분 스크롤 애니메이션
    ScrollTrigger.matchMedia({
        //pc버전
        "(min-width:1024px)":function(){
            gsap.timeline({
                scrollTrigger:{
                    trigger:'.hello',
                    // pin:true,
                    start:"top top",
                    end:'+2000',
                    // end:"bottom top",
                    scrub:1, 
                }
            }).to('.hello .banner_img2',{duration:50, opacity:1})
              .to('.hello .banner_img2',{duration:50, scale:0})  
              .to('.hello .banner_img3',{duration:200, top:'5%'})
              .to('.hello .banner_img4',{duration:200, top:'40%'});

              //섹션5 (.jewelry)
            gsap.timeline({
                scrollTrigger:{
                    trigger:'.jewelry',
                    // pin:true,
                    start:"top top",
                    end:'+=2000',
                    scrub:1, 
                }
            })
            .from('.jewelry .banner_img2',{scale:1.3}) //초기값
            .to('.jewelry .banner_img2',{duration:3, scale:1})
            .to('.jewelry .banner_img2',{duration:3, top:'90vh'});

            gsap.timeline({
                scrollTrigger:{
                    trigger:'.jewelry',
                    // pin:true,
                    start:"top top",
                    end:'+2000',
                    scrub:1, 
                }
            })
            .to('.jewelry .banner_img1',{duration:20, top:0, delay:5})
            

            gsap.timeline({
                scrollTrigger:{
                    trigger:'.jewelry',
                    // pin:true,
                    start:"top top",
                    end:'+2000',
                    scrub:1, 
                }
            })
            .to('.jewelry .banner_img3',{duration:20, top:'-13%', delay:5})

            gsap.timeline({
                scrollTrigger:{
                    trigger:'.jewelry',
                    // pin:true,
                    start:"top top",
                    end:'+2000',
                    scrub:1, 
                }
            })
            .to('.jewelry .banner_img4',{duration:20, top:'60%', delay:5})
        },
        //테블릿 버전
        "(min-width:768px) and (max-width:1023px)":function(){
            gsap.timeline({
                scrollTrigger:{
                    trigger:'.hello',
                    // pin:true,
                    start:"top top",
                    end:'+2000',
                    // end:"bottom top",
                    scrub:1, 
                }
            }).to('.hello .banner_img2',{duration:50, opacity:1})
              .to('.hello .banner_img2',{duration:50, scale:0})  
              .to('.hello .banner_img3',{duration:200, top:'5%'})
              .to('.hello .banner_img4',{duration:200, top:'40%'});
              //섹션5 (.jewelry)
    gsap.timeline({
        scrollTrigger:{
            trigger:'.jewelry',
            pin:true,
            start:"top top",
            end:'+=2000',
            scrub:1, 
        }
    })
    .from('.jewelry .banner_img2',{scale:1.2}) //초기값
    .to('.jewelry .banner_img2',{duration:3, scale:1})
    .to('.jewelry .banner_img2',{duration:3, top:'90vh'});

    gsap.timeline({
        scrollTrigger:{
            trigger:'.jewelry',
            // pin:true,
            start:"top top",
            end:'+2000',
            scrub:1, 
        }
    })
    .to('.jewelry .banner_img1',{duration:20, top:0, delay:5})
    

    gsap.timeline({
        scrollTrigger:{
            trigger:'.jewelry',
            // pin:true,
            start:"top top",
            end:'+2000',
            scrub:1, 
        }
    })
    .to('.jewelry .banner_img3',{duration:20, top:'-13vw', delay:5})

    gsap.timeline({
        scrollTrigger:{
            trigger:'.jewelry',
            // pin:true,
            start:"top top",
            end:'+2000',
            scrub:1, 
        }
    })
    .to('.jewelry .banner_img4',{duration:20, top:'15vw', delay:5})
        },
        //모바일 버전
        "(min-width:480px)":function(){

        }
    })

     
    //팝업 갤러리
    $('.library_photo ul li').click(function(e){
        e.preventDefault();
        //클릭한 li의 인덱스 번호를 가져와서 변수에 저장
        var idx=$(this).index()+1;
        $('.container').append('<img src="img/big'+idx+'.png">');
        $('.popup').fadeIn();
    });
    //팝업 갤러리 안의 닫기 버튼
    $('.popup .close_btn').click(function(e){
        e.preventDefault();
        //container영역 비우기
        $('.container').empty();
        $('.popup').hide();
    });
    //팝업 갤러리 아무데나 클릭해도 팝업창 닫기
    $(document).mouseup(function(e){
        e.preventDefault();
        let popup=$('.popup');
        if(!popup.is(e.target) && popup.has(e.target).length===0){
        //container영역 비우기
        $('.container').empty();
        $('.popup').hide();
        }
    });
    //햄버거 메뉴 클릭하면 span 애니메이션
    let sw=false;
    $('.ham_menu').click(function(){
        if(sw==false){
            sw=true;
            // 햄메뉴에서 X자 되기
            $(this).addClass('active');
            // 햄메뉴 클릭했을때 출현
            $('.menu_area').stop().animate({right:0});
        }else{
            sw=false;
            $(this).removeClass('active');
            // 다시 클릭했을때 없어짐
            $('.menu_area').stop().animate({right:'-100vw'});
        }

    });
    // 태블릿(가로길이가 768이상, 1024 미만일 때)
    let winWidth=$(window).width();
    if(winWidth >= 768 && winWidth < 1024){
        // 슬라이드 방향 바꾸는 제이쿼리
        var swiper2 = new Swiper(".swiper2",{
            slidesPerView: 2.7,
            sapaceBetween:0,
            treeMode:true,
        });
        let direction='ltr';
        swiper2.changeLanguageDirection(direction);

        //태블릿 버전에서 
    }
});
