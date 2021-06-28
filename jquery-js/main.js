 // $(window).on('scroll',function(){
            // if ( $(window).scrollTop() > 100 ) {
            //     $('.nav-menu').addClass('nav-scroll-down');
            // }
            // if ( $(window).scrollTop() <= 100 ) {
            //     $('.nav-menu').removeClass('nav-scroll-down');
            // }

            // });
            // 스크롤시 네비게이션 바 디자인 변경 (사이트 전반적 디자인과 안어울려서 삭제)

            $('.login').on('click',function(){
                $('.black-background').addClass('slide-down');
            })

            $('.closer, .black-background').on('click',function(e){
                if(e.currentTarget == e.target){
                    $('.black-background').addClass('slide-up');
                    $('.black-background').removeClass('slide-down');
                }
            })

            $('.category').click(function(){
                $('.list-group').slideToggle();
            })


            let regex_email = RegExp(/\S+@\S+\.\S+/);
            let regex_pw = RegExp(/^[A-Za-z0-9]{8,16}$/);

            $('form').on('submit',function(e){

                let inputEmail = $('#email').val()
                let inputPw = $('#password').val()

                if(regex_email.test(inputEmail) == false ){
                    $('#email-alert').show();
                    e.preventDefault();
                }else{
                    e.preventDefault();
                    $('#email-alert').hide();
                }

                if(regex_pw.test(inputPw)== false){
                    e.preventDefault();
                    $('#pw-alert').show();

                }else{
                    e.preventDefault();
                    $('#pw-alert').hide();
                }
            })

            $('.slide-1').click(function(){
                $('.slide-container').css('transform','translateX(0)');
                $('.slide-1').addClass('btn-slide-focus');
                $('.slide-2, .slide-3').removeClass('btn-slide-focus');
            })

            $('.slide-2').click(function(){
                $('.slide-container').css('transform','translateX(-100vw)');
                $('.slide-2').addClass('btn-slide-focus');
                $('.slide-1, .slide-3').removeClass('btn-slide-focus');
            })

            $('.slide-3').click(function(){
                $('.slide-container').css('transform','translateX(-200vw)');
                $('.slide-3').addClass('btn-slide-focus');
                $('.slide-1, .slide-2').removeClass('btn-slide-focus');
            })
    

            //^^반복문으로 고쳐보기^^

            var img1 = document.querySelectorAll('.slide-box img')[0];
    
            var slide_manager = new Hammer.Manager(img1);
            slide_manager.add(new Hammer.Pan({ threshold: 0 }));
                
            slide_manager.on('pan', function(e){
                if (e.deltaX < -1) {
                console.log(e.deltaX)
                  $('.slide-box').css('transform', 'translateX(' + e.deltaX + ')' );
                }
              })

            var nowPic = 1;

            $('.slide-next').click(function(){
                $('.slide-container').css('transform','translateX(-'+ nowPic +'00vw)');
                if ( nowPic < 3 ){
                    nowPic = nowPic + 1;
                }

                if (nowPic == 1 ){
                    $('.slide-1').addClass('btn-slide-focus');
                    $('.slide-2, .slide-3').removeClass('btn-slide-focus');
                } else if (nowPic == 2 ){
                    $('.slide-2').addClass('btn-slide-focus');
                    $('.slide-1, .slide-3').removeClass('btn-slide-focus');
                } else {
                    $('.slide-3').addClass('btn-slide-focus');
                    $('.slide-1, .slide-2').removeClass('btn-slide-focus');
                }
            });
            
            // $('.slide-previous').click(function(){
            //     $('.slide-container').css('transform','translateX(-'+ (nowPic-2) +'00vw)');
            //     if ( nowPic > 1 ){
            //         nowPic = nowPic - 1;
            //     }

            //     if (nowPic == 1 ){
            //         $('.slide-1').addClass('btn-slide-focus');
            //         $('.slide-2, .slide-3').removeClass('btn-slide-focus');
            //     } else if (nowPic == 2 ){
            //         $('.slide-2').addClass('btn-slide-focus');
            //         $('.slide-1, .slide-3').removeClass('btn-slide-focus');
            //     } else {
            //         $('.slide-3').addClass('btn-slide-focus');
            //         $('.slide-1, .slide-2').removeClass('btn-slide-focus');
            //     }
            // })

