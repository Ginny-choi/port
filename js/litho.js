;(function($){

   var litho= {
     btn:0,
     init:function(){
       this.headerFn();
       this.scrollFn();  
       this.section1Fn();  
       this.section3Fn();  
       this.modalFn();  
       this.playFn();  
       this.maskFn();  
       this.rotateFn();  
       this.parallaxFn();  
       this.footerFn();  
        
        
     },
    
     scrollFn:function(){
      var $header = $('#header');
      var $scrollBtn = $('.scroll-btn');
      var $scrollWrap = $('.scroll-wrap');
      var $modalSub = $('#modalSub');
      var $logo = $('#header #logo a img');
      var that = this;
      var t=0;
      var a=0;

                   
      //스크롤이 내려가면 헤더가 사라짐. 위로 올리면 다시 생김 
      //예전값 - 현재값 . 음수 -> 다운 . 양수 -> 업
      var scrollOld = 0;
      var scrollNew = 0;

      function scrollEvent(){
          scrollNew = $(window).scrollTop();
          

          var scroll = function(){
            result =  scrollOld - scrollNew <0 ? 'down' : 'up';
          }
          scroll();

          if($(window).scrollTop() == 0){
            $modalSub.stop().fadeOut(1000);
            $header.removeClass('addHide');
            $header.removeClass('addBlack');
            if( $(window).innerWidth() <980 ){
              $logo.attr('src','./img/logo-yellow-gray.png');
            }
            else{
              $logo.attr('src','./img/logo-black.png');
            }
          
          }
          else{
            if( result == 'down'){ //스크롤 내려갈 때. 
              if( that.btn == 1){
              
              $header.removeClass('addHide');
              $header.removeClass('addBlack');
              $logo.attr('src','./img/logo-yellow-gray.png');             
              }
              else{
                $header.addClass('addHide');
                $header.removeClass('addBlack');
              
              }                        
            }
            if( result == 'up'){
              if(that.btn == 1){
                $header.removeClass('addHide');
                $header.addClass('addBlack');               
              }
              else{
                $header.removeClass('addHide');
                $header.addClass('addBlack');                          
              }
              $logo.attr('src','./img/logo-white.png');

            }
          }
          scrollOld = scrollNew;  
      }
     
      $scrollBtn.on({
        click:function(event){
          event.preventDefault();
          var url = $(this).attr('href');
          $('html,body').stop().animate({scrollTop: $(url).offset().top},600);            
        }
      });

      $(window).scroll(function(){
        scrollEvent();
        if( $(window).scrollTop() >= 100 ){
          if(t == 0){
            t=1;
            $scrollWrap.stop().fadeIn(1000);
             if( $(window).innerWidth() > 1200){
              $modalSub.stop().fadeIn(800);             
            }
          }
        }
        else{
          if(t==1){
            t=0;
            $scrollWrap.stop().fadeOut(1000);   
            $modalSub.stop().fadeOut(800);                      
          }
        }
      });

      function resizeFn(){
        if( $(window).innerWidth() > 1200){
            if( $(window).scrollTop() >=100){
              $modalSub.stop().fadeIn(1000);
            }
         
        }
        else{ 
          $modalSub.stop().fadeOut(800);          
        }
      }

     resizeFn();
       $(window).resize(function(){
         resizeFn();
       });

      
    },
     headerFn:function(){
       var $span = $('#header #nav > ul > li > a > span');
       var $icon = $('#header #nav > ul > li > a > span > i');
       var $mainBtn = $('#header .main-btn');
       var $subBtn = $('#header .sub-btn');
       var $subbbBtn = $('#header .subbb-btn');
       var $mobileBtn = $('#header .mobile-btn');
       var $nav = $('#header #nav');
       var $logo = $('#header #logo a img');

       var $sub = $('#header .sub');
       var $subb = $('#header .subb');
       var $subbb = $('#header .subbb');
       var $navLl = $('#header #nav>ul>li');
       var $bar = $('#header .bar');

       var pc =0;
       var mobile = 0;
       var that = this;
       

       function pcFn(){
        $nav.stop().show();
        $sub.stop().hide();
        $subb.stop().hide();
        $subbb.stop().hide();
        $icon.stop().hide();
        $nav.css({display:'inline-block'});
        $logo.attr('src','./img/logo-black.png');

        $mainBtn.on({
          mouseenter:function(e){
           e.preventDefault();
            $(this).next().stop().show();
          }
        });
        $navLl.on({
          mouseleave:function(e){
           e.preventDefault();
            $sub.stop().hide();
          }
        });
 
        $subBtn.on({
          mouseenter:function(e){
           e.preventDefault();
           $subb.stop().hide();
           $(this).next().stop().show();
          }         
        });
        $navLl.on({
         mouseleave:function(e){
          e.preventDefault();
           $subb.stop().hide();
         }
       });
 
        $subbbBtn.on({
          mouseenter:function(e){
           e.preventDefault();
           $subbb.stop().hide();
           $(this).next().stop().show();
          }
        });
        $subbbBtn.on({
          mouseleave:function(e){
            e.preventDefault();
            $subbb.stop().hide();
          }
        });

       }  //pc 

       function mobileFn(){
        $sub.stop().hide();
        $subb.stop().show();
        $subbb.stop().show();
        $icon.stop().show();

        $nav.stop().slideUp(0);
        $icon.removeClass('addRotate');
        $bar.removeClass('addCross');
        $logo.attr('src', './img/logo-yellow-gray.png');
        

        $mainBtn.off('mouseenter');
        $navLl.off('mouseleave');
        $subBtn.off('mouseenter');
        $navLl.off('mouseleave');
        $subbbBtn.off('mouseenter');
        $mainBtn.off('mouseleave');

      
       
       } //모바일 

       function pcMobileFn(){
         if( $(window).innerWidth() > 980 ){
           mobile=0;
           pc=1;
          pcFn();
          that.btn = 0;
         }
         else{
           pc=0;
           mobile=1;
          mobileFn();
         }
       }
       pcMobileFn();
       setTimeout(pcMobileFn,100);
       $(window).resize(function(){
         
        pcMobileFn();
         
       });

       mobileFn();

      $mainBtn.each(function(idx){
        $(this).on({
          click:function(e){
            e.preventDefault();
            if(mobile == 1){
              if($icon.eq(idx).hasClass('addRotate') == false){ //다른 메뉴를 클릭해서 클래스를 지우고 싶을 경우와 슬라이드업. 
                $icon.removeClass('addRotate');
                $span.removeClass('addRotate');
                $sub.stop().slideUp(300);             
                $span.eq(idx).toggleClass('addRotate');
                $icon.eq(idx).toggleClass('addRotate');
                $(this).next().stop().slideToggle(300);
               
              }
              else {
                $span.eq(idx).toggleClass('addRotate');
                $icon.eq(idx).toggleClass('addRotate');
                $(this).next().stop().slideToggle(300);               
              }
            }         
          }
        });  
     });

      
       $mobileBtn.on({
        click:function(e){
          e.preventDefault();
          $bar.toggleClass('addCross');
          $icon.removeClass('addRotate');
          $sub.stop().slideUp(300); 
          $nav.stop().slideToggle(300);
          that.btn == 0 ? that.btn = 1 : that.btn = 0;
        }
      });

     },
     section1Fn:function(){
      var $section1 = $('#section1');
      var $h2 = $('#section1 .content h2');
      var $content = $('#section1 .content');
      var $contentH = $('#section1 .content').innerHeight();
      var conMargin = $contentH/2;
      var x = 0;
      var y = 0;

      var winW = $(window).innerWidth();
      var winH = $(window).innerHeight();

      $h2.on({
        mousemove:function(event){
          x=event.clientX*0.03;
          y=event.clientY*0.03;
        
          $h2.css({right:x+'px',top:y+'px'});
        },
        mouseleave:function(event){
          $h2.css({right:0,top:0});
        }
      });
      function resizeFn(){
         winW = $(window).innerWidth();
         winH = $(window).innerHeight();    
         $contentH = $('#section1 .content').innerHeight();
         conMargin = $contentH/2;
       
          $section1.css({width:winW,height:winH});
          $content.css({marginTop:-(conMargin)});    
      }
      setTimeout(resizeFn,100);
      $(window).resize(function(){
       resizeFn();
       });      
      },
     
      section3Fn:function(){
        //ul 의 높이 ( 이미지 높이 * 줄수)
        //칸의 수 1200 이상 4개 / 이하 2개씩
        // 줄수 : 이미지 갯수 / 칸의 수 
        //이미지 너비 : 윈도우 넓이 / 칸수 
        //이미지 높이 : 이미지 너비 * 높이 비율 (1)
        var $navBtn = $('.nav-btn');      
        var $galleryUl = $('#section3 .gallery-wrap ul');
        var $galleryLi = $('#section3 .gallery-wrap li');
        var n = $('#section3 .gallery-wrap li').length;
        var $galleryContent = $('#section3 .gallery-content');

        var winW = $(window).innerWidth();
        var cols = 4;
        var rows = Math.ceil(n/cols);
        var imgW = winW/cols;        
        var imgH2 = imgW *2;
        var btnNum = 0
        
        var hide = [];
        var show = [];
               
        function resizeFn(){
          winW = $(window).innerWidth();
          if(winW >1200){
            cols = 4;
          }
          else if(winW > 580){
            cols = 2;
          }
         else{
           cols = 1;
         }
         imgW = winW/cols;        
         imgH2 = imgW *2;


         if(btnNum == 0){
           hide = [];
           show = [0,1,2,3,4,5,6];
           n=show.length;
           rows = Math.ceil(n/cols);
           $galleryUl.css({width: winW, height: (imgW*rows)});
           $galleryLi.css({width: imgW, height: imgW});
           $galleryLi.eq(1).css({width: imgW, height: imgH2});
          
          $galleryContent.removeClass('addZoom');
           
           if(cols ==4){
            $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
            $galleryLi.eq(show[1]).stop().show().animate({left:imgW*1, top:imgW*0},300);
            $galleryLi.eq(show[2]).stop().show().animate({left:imgW*2, top:imgW*0},300);
            $galleryLi.eq(show[3]).stop().show().animate({left:imgW*3, top:imgW*0},300);
            $galleryLi.eq(show[4]).stop().show().animate({left:imgW*0, top:imgW*1},300);
            $galleryLi.eq(show[5]).stop().show().animate({left:imgW*2, top:imgW*1},300);
            $galleryLi.eq(show[6]).stop().show().animate({left:imgW*3, top:imgW*1},300);
           }
           else if(cols == 2){
            $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
            $galleryLi.eq(show[1]).stop().show().animate({left:imgW*1, top:imgW*0},300);
            $galleryLi.eq(show[2]).stop().show().animate({left:imgW*0, top:imgW*1},300);
            $galleryLi.eq(show[3]).stop().show().animate({left:imgW*0, top:imgW*2},300);
            $galleryLi.eq(show[4]).stop().show().animate({left:imgW*1, top:imgW*2},300);
            $galleryLi.eq(show[5]).stop().show().animate({left:imgW*0, top:imgW*3},300);
            $galleryLi.eq(show[6]).stop().show().animate({left:imgW*1, top:imgW*3},300);
           }
           else{
            $galleryUl.css({width: winW, height: (imgW*rows)+imgW});
            $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
            $galleryLi.eq(show[1]).stop().show().animate({left:imgW*0, top:imgW*1},300);
            $galleryLi.eq(show[2]).stop().show().animate({left:imgW*0, top:imgW*3},300);
            $galleryLi.eq(show[3]).stop().show().animate({left:imgW*0, top:imgW*4},300);
            $galleryLi.eq(show[4]).stop().show().animate({left:imgW*0, top:imgW*5},300);
            $galleryLi.eq(show[5]).stop().show().animate({left:imgW*0, top:imgW*6},300);
            $galleryLi.eq(show[6]).stop().show().animate({left:imgW*0, top:imgW*7},300);
           }
           for(var i=0; i<n; i++){
             $galleryContent.eq(show[i]).addClass('addZoom');
           }
         }

         else if(btnNum == 1){
          hide = [1,3,5];
          show = [0,2,4,6];
          n=show.length;
          rows = Math.ceil(n/cols);          
           $galleryUl.css({width: winW, height: imgW*rows});
           $galleryLi.css({width: imgW, height: imgW});
          
          $galleryContent.removeClass('addZoom');

          for(var i=0; i<hide.length; i++){
            $galleryLi.eq(hide[i]).stop().hide();
          }

          if( cols == 4){
            $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
            $galleryLi.eq(show[1]).stop().show().animate({left:imgW*1, top:imgW*0},300);
            $galleryLi.eq(show[2]).stop().show().animate({left:imgW*2, top:imgW*0},300);
            $galleryLi.eq(show[3]).stop().show().animate({left:imgW*3, top:imgW*0},300);
            
          }
          else if( cols == 2){
            $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
            $galleryLi.eq(show[1]).stop().show().animate({left:imgW*1, top:imgW*0},300);
            $galleryLi.eq(show[2]).stop().show().animate({left:imgW*0, top:imgW*1},300);
            $galleryLi.eq(show[3]).stop().show().animate({left:imgW*1, top:imgW*1},300);
          }
          else {
            $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
            $galleryLi.eq(show[1]).stop().show().animate({left:imgW*0, top:imgW*1},300);
            $galleryLi.eq(show[2]).stop().show().animate({left:imgW*0, top:imgW*2},300);
            $galleryLi.eq(show[3]).stop().show().animate({left:imgW*0, top:imgW*3},300);
          }
          for(j=0; j<n; j++){
            $galleryContent.eq(show[j]).addClass('addZoom');
          }
        }
         else if(btnNum == 2){
          hide = [0,2,5];
          show = [1,3,4,6];
          n=show.length;
          rows = Math.ceil(n/cols);          
          $galleryUl.css({width: winW, height: (imgW*rows)+imgW});        
           $galleryLi.css({width: imgW, height: imgW});
           $galleryLi.eq(1).css({width: imgW, height: imgH2});
           $galleryContent.removeClass('addZoom');

           for(var i=0; i<hide.length; i++){
             $galleryLi.eq(hide[i]).stop().hide();
           }

             if(cols == 4){
              $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
              $galleryLi.eq(show[1]).stop().show().animate({left:imgW*1, top:imgW*0},300);
              $galleryLi.eq(show[2]).stop().show().animate({left:imgW*2, top:imgW*0},300);
              $galleryLi.eq(show[3]).stop().show().animate({left:imgW*3, top:imgW*0},300);
             }
             else if(cols == 2){
              $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
              $galleryLi.eq(show[1]).stop().show().animate({left:imgW*1, top:imgW*0},300);
              $galleryLi.eq(show[2]).stop().show().animate({left:imgW*1, top:imgW*1},300);
              $galleryLi.eq(show[3]).stop().show().animate({left:imgW*0, top:imgW*2},300);
             }
             else {
              $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
              $galleryLi.eq(show[1]).stop().show().animate({left:imgW*0, top:imgW*2},300);
              $galleryLi.eq(show[2]).stop().show().animate({left:imgW*0, top:imgW*3},300);
              $galleryLi.eq(show[3]).stop().show().animate({left:imgW*0, top:imgW*4},300);
             }
             for(var j=0; j<n;j++){
              $galleryContent.eq(show[j]).addClass('addZoom');
             }
        }
      
         else if(btnNum == 3){
          hide = [2,4,6];
          show = [0,1,3,5];
          n=show.length;
          rows = Math.ceil(n/cols);          
          $galleryUl.css({width: winW, height: (imgW*rows)+imgW});        
           $galleryLi.css({width: imgW, height: imgW});
           $galleryLi.eq(1).css({width: imgW, height: imgH2});
           $galleryContent.removeClass('addZoom');

           for(var i=0; i<hide.length; i++){
             $galleryLi.eq(hide[i]).stop().hide();           
        }
        if(cols == 4){
          $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
          $galleryLi.eq(show[1]).stop().show().animate({left:imgW*1, top:imgW*0},300);
          $galleryLi.eq(show[2]).stop().show().animate({left:imgW*2, top:imgW*0},300);
          $galleryLi.eq(show[3]).stop().show().animate({left:imgW*3, top:imgW*0},300);
         }
         else if(cols == 2){
          $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
          $galleryLi.eq(show[1]).stop().show().animate({left:imgW*1, top:imgW*0},300);
          $galleryLi.eq(show[2]).stop().show().animate({left:imgW*0, top:imgW*1},300);
          $galleryLi.eq(show[3]).stop().show().animate({left:imgW*0, top:imgW*2},300);
         }
         else {
          $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
          $galleryLi.eq(show[1]).stop().show().animate({left:imgW*0, top:imgW*1},300);
          $galleryLi.eq(show[2]).stop().show().animate({left:imgW*0, top:imgW*3},300);
          $galleryLi.eq(show[3]).stop().show().animate({left:imgW*0, top:imgW*4},300);
         }
         for(var j=0; j<n;j++){
          $galleryContent.eq(show[j]).addClass('addZoom');
         }
      }
         else if(btnNum == 4){
          hide = [0,1,4];
          show = [2,3,5,6];          
          n=show.length;
          rows = Math.ceil(n/cols);
          $galleryUl.css({width: winW, height: (imgW*rows)});
          $galleryLi.css({width: imgW, height: imgW});
          
          
          $galleryContent.removeClass('addZoom');
          for(var i =0; i<hide.length; i++){
            $galleryLi.eq(hide[i]).stop().hide();
          }
          if(cols == 4){
            $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
            $galleryLi.eq(show[1]).stop().show().animate({left:imgW*1, top:imgW*0},300);
            $galleryLi.eq(show[2]).stop().show().animate({left:imgW*2, top:imgW*0},300);
            $galleryLi.eq(show[3]).stop().show().animate({left:imgW*3, top:imgW*0},300);
           }
           else if(cols == 2){
            $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
            $galleryLi.eq(show[1]).stop().show().animate({left:imgW*1, top:imgW*0},300);
            $galleryLi.eq(show[2]).stop().show().animate({left:imgW*0, top:imgW*1},300);
            $galleryLi.eq(show[3]).stop().show().animate({left:imgW*1, top:imgW*1},300);
           }
           else {
            $galleryLi.eq(show[0]).stop().show().animate({left:imgW*0, top:imgW*0},300);
            $galleryLi.eq(show[1]).stop().show().animate({left:imgW*0, top:imgW*1},300);
            $galleryLi.eq(show[2]).stop().show().animate({left:imgW*0, top:imgW*2},300);
            $galleryLi.eq(show[3]).stop().show().animate({left:imgW*0, top:imgW*3},300);
           }
           for(var j=0; j<n;j++){
            $galleryContent.eq(show[j]).addClass('addZoom');
           }
        }
        }
        resizeFn();
        setTimeout(resizeFn,100);

        $(window).resize(function(){
          resizeFn();
          setTimeout(resizeFn,100);
        });

        $navBtn.each(function(idx){
          $(this).on({
            click:function(){
              btnNum = idx;
              resizeFn();
              $navBtn.removeClass('addLine');
              $(this).addClass('addLine');
              
            }
          })
        });
      },
      
      maskFn:function(){
        var winW = $(window).width();
        var winH = $(window).height();
        var $maskSlide = $('#maskSlide');
        var $slideView = $('#maskSlide .slide-view');

        var $nextBtn = $('#maskSlide .next-btn');
        var $prevBtn = $('#maskSlide .prev-btn');
        var $slide = $('#maskSlide .slide');
        var cnt =0;
        var setId = null;
        var setId2 = null;
        var t = 0;

      
        function resizeFn(){
          winW = $(window).width();
          winH = $(window).height();

          if( window.orientation == 0 || window.orientation == 180){
            winH = winH
          }
         else if( window.orientation == 90 || window.orientation == -90){
            if(winW > 980){
              winH = winH
            }
            else{
              winH = 600;
            }
          }

          $maskSlide.css({width:winW,height:winH});
        }
        resizeFn();

        $(window).resize(function(){
          resizeFn();
        });

         //$(window).addEventListener('orientationchange',function(){
           //setTimeout(resizeFn,100);
         //});

        //1.메인 슬라이드 
        function nextmainSlideFn(){
          if( $(window).innerWidth() > 1200){
            $slide.css({zIndex:1});
            $slide.eq(cnt==0?2:cnt-1).css({zIndex:2});
            $slide.eq(cnt).css({zIndex:3}).find('.col').stop().animate({width:0},0).animate({width:25+'%'},1500);
          }
          else{
            $slide.css({zIndex:1});
            $slide.eq(cnt==0?2:cnt-1).css({zIndex:2});
            $slide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1000);
          }
          

        }
        function prevmainSlideFn(){
          if( $(window).innerWidth() > 1200){
            $slide.css({zIndex:1}).find('.col').stop().animate({width:25+'%'},0);
            $slide.eq(cnt).css({zIndex:2});
            $slide.eq(cnt==2?0:cnt+1).css({zIndex:3}).find('.col').stop().animate({width:25+'%'},0).animate({width:0},1500);
          }
          else{
            $slide.css({zIndex:1}).stop().animate({opacity:1},0);
            $slide.eq(cnt).css({zIndex:2});
            $slide.eq(cnt==2?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1000);
          }
          
        }

        //2.카운트 슬라이드
        function nextCountFn(){
          cnt++;
          if(cnt>2){
            cnt=0;
          }
          nextmainSlideFn();
        }
        function prevCountFn(){
          cnt--;
          if(cnt<0){
            cnt=2
          }          
          prevmainSlideFn();
        }

        //3.버튼 이벤트 

        $nextBtn.on({
          click:function(e){
            e.preventDefault();
            stopFn();
            if(!$('.col').is(':animated')){
              nextCountFn();
            }
          }
        });
        $prevBtn.on({
          click:function(e){
            e.preventDefault();
            stopFn();
            if( !$('.col').is(':animated')){
              prevCountFn();
            }
          }
        });

        //.터치 스와이프 
        var touchStart = 0;
        var touchEnd = 0;
        $slideView.on({         
            mousedown:function(event){
              event.preventDefault();
              stopFn();
              touchStart = event.pageX;             
           },
           touchstart:function(event){
             event.preventDefault();
              stopFn();
              touchStart=event.originalEvent.changedTouches[0].clientX;            
           },
          mouseup:function(event){
            event.preventDefault();
            stopFn();
            touchEnd = event.pageX;
            swipeFn();
          },
          touchend:function(event){
            event.preventDefault();
            stopFn();
            touchEnd=event.originalEvent.changedTouches[0].clientX;
            swipeFn();
          }                    
        });
        function swipeFn(){
          if( touchStart-touchEnd <0 ){
            if( !$('.col').is(':animated')){
              nextCountFn();
            }
          }
          else if( touchStart-touchEnd > 0 ){
            if( !$('.col').is(':animated')){
              prevCountFn();
            }
          }          
        }

        //4.타이머 함수 
        function autoFn(){
          setId = setInterval( nextCountFn,5000);
        }
        autoFn();

        function stopFn(){
          clearInterval(setId);
          clearInterval(setId2);
          var t =0;
          setId2 = setInterval(function(){           
            t++;
            if(t>4){
              clearInterval(setId2);
              nextCountFn();
              autoFn();              
            }
          },1000);
          
        }


      } , 
      modalFn:function(){
        var $modalBtn = $('.modal-btn');
        var $modalSub = $('#modalSub');
        var $html = $('html');
        var $header = $('#header');
        var $document = $(document);

        $modalBtn.on({
          click:function(event){
            
            event.stopPropagation();             
            $modalSub.toggleClass('addModal');
            $html.toggleClass('addModal');
            $header.toggleClass('addHide');
          }
        });
        $modalSub.on({
          click:function(event){
            event.stopPropagation();
            return false;
          }
        });
        $document.on({
          click:function(event){
            if( event.target !== event.currentTarget){
              $modalSub.removeClass('addModal');
              $html.removeClass('addModal');
              $header.removeClass('addHide');
            }
          }
        });

      },
      playFn:function(){
        var $playBtn = $('#section4 .play-btn');
        var $modalPlay = $('#modalplay');
        var $hideBtn = $('#modalplay .hide-btn');
        var $html = $('html');

        $playBtn.on({
          click:function(e){
            e.preventDefault();
            $html.addClass('addPlay');
            $modalPlay.stop().show();
          }
        });
        $hideBtn.on({
          click:function(e){
            e.preventDefault();
            $html.removeClass('addPlay');
            $modalPlay.stop().hide();
          }
        });
      },
      rotateFn:function(){
        var $col = $('#rotate .content ul li');
        var $title = $('#rotate .container .title');

        var $Li = $('#rotate .content-gap .content-wrap').eq(0).innerWidth();
        var $Lih3 = $('#rotate .img-caption h3');
        var $backWrap = $('#rotate .back-gap .back-wrap').innerWidth();
        var $backh3 = $('#rotate .back-wrap h3');
        var $backp = $('#rotate .back-wrap p');
        var $backa = $('#rotate .back-wrap span a');

        var h3Fontsize = $Li*0.069448303;
        var backh3Fontsize = $backWrap*0.113646695;
        var pFontsize = $backWrap*0.136376034;
        var aFontsize = $backWrap*0.077279753;
        var t = 0;

        //페럴럭스 //addClass로 설정하니 트랜지션이랑 반응형이랑 맞물려서 에니메이트로 수정.       
        function fadeInFn(){
          $title.stop().animate({opacity:1},300,function(){
            $col.eq(0).stop().animate({opacity:1},300,function(){
              $col.eq(1).stop().animate({opacity:1},300,function(){
                $col.eq(2).stop().animate({opacity:1},300,function(){
                });
              });
            });
          });
        }
       
        $(window).scroll(function(){
          if( $(this).scrollTop() == 0){
            t=0;
            $title.removeClass('addAni');
            $col.removeClass('addAni');
          }
          if( $(this).scrollTop() >= $('#rotate').offset().top-400){
            if(t==0){
              t=1;
              fadeInFn();
            }
          }
        });

        function resizeFn(){

         // liEl = document.querySelector('#rotate li');
          //liEl.addEventListener('transitionend', function(){ //트랜지션이 끝나면 너비 값을 가져와서 글자크기 설정 //미흡하여 사용 보류 
            
              $Li = $('#rotate li').innerWidth();
              $backWrap = $('#rotate .back-gap .back-wrap').eq(0).innerWidth();
                  
              h3Fontsize = $Li*0.064102564;
              backh3Fontsize = $backWrap*0.113646695;
              pFontsize = $backWrap*0.068188017;
              aFontsize = $backWrap*0.077279753;

              // liEl.addEventListener('transitionstart', function(){
              //   console.log('트랜지션 시작');
              // });
              // liEl.addEventListener('transitionrun', function(){
              //   console.log('트랜지션 실행중');
              // });
              // liEl.addEventListener('transitionend', function(){
              //   console.log('트랜지션 끝');
              // });

              $Lih3.css({fontSize:h3Fontsize});
              $backh3.css({fontSize:backh3Fontsize});
              $backp.css({fontSize:pFontsize});
              $backa.css({fontSize:aFontsize});
         // });
          
         

        }

        $(window).resize(function(){
          setTimeout(resizeFn,100);
         });

        resizeFn();
        setTimeout(resizeFn,100);

          

      },
      parallaxFn:function(){
        //1.section2
        var $iconLi = $('#section2 .icon-box >ul>li');
        var $contentLi = $('#section2 .content >ul>li');
        var t = 0;
        //2.section4
        var $h2 = $('#section4 .right-content > h2');
        var $rightLi = $('#section4 .right-content > ul > li');
        var $section4Top = $('#section4').offset().top;
        var $bottom = $('#section4 .container .bottom');
        var t4 =0;
        //3.section5
        var $rightFirst = $('#section5 .right-content .first');
        var $rightsec = $('#section5 .right-content .sec');
        var $sec5h2 = $('#section5 .left-content h2');
        var $p = $('#section5 .left-content p');
        var $span = $('#section5 .left-content span');
        var $sec5Li = $('#section5 .bottom ul li');
        var t5 = 0;
        //4.section6
        var $section6Top = $('#section6').offset().top;
        var $sec6li = $('#section6 .content ul li');
        var t6 = 0;
        //5.section 7
        var $section7Top = $('#section7').offset().top;
        var $sec7title = $('#section7 .container .title');
        var $sec7Li = $('#section7 .content > ul > li');
        var t7 = 0;
        //6.section8
        var $section8 = $('#section8').offset().top-200;
        var $sec8Li = $('#section8 .container ul li');
        var t8 = 0;
    



        function fadeInFn(){
          $iconLi.eq(0).stop().animate({opacity:1},400,function(){
            $iconLi.eq(1).stop().animate({opacity:1},400,function(){
              $iconLi.eq(2).stop().animate({opacity:1},400,function(){
                $iconLi.eq(3).stop().animate({opacity:1},400,function(){
                  $iconLi.eq(4).stop().animate({opacity:1},400);
                });
              });
            });
          });
        }
        function contentFn(){
          $contentLi.eq(0).stop().animate({opacity:1},800,function(){
            $contentLi.eq(1).stop().animate({opacity:1},800,function(){
              $contentLi.eq(2).stop().animate({opacity:1},800);
            });
          });
        }
        $(window).scroll(function(){
          if( $(this).scrollTop() > 400 ){
            if(t==0){
              t=1;
              fadeInFn();
              contentFn();
            }
          }
          else if( $(this).scrollTop()== 0){
            t=0;
            $iconLi.stop().animate({opacity:0},0);
            $contentLi.stop().animate({opacity:0},0);
          }
        });
        //2.section4
        function sec4FadeinFn(){        
          setTimeout(function(){
            $h2.addClass('addShow');
            setTimeout(function(){
              $rightLi.eq(0).addClass('addShow');
              setTimeout(function(){
                $rightLi.eq(1).addClass('addShow');
                setTimeout(function(){
                  $rightLi.eq(2).addClass('addShow');
                  setTimeout(function(){
                    $bottom.stop().animate({opacity:1},1500);   
                  },300);
                },300);
              },300);
            },300);
          },300);                           
        }        
        $(window).scroll(function(){
          if( $(this).scrollTop() == 0){
            t4=0;
            $h2.removeClass('addShow');
            $rightLi.removeClass('addShow');
            $bottom.stop().animate({opacity:0},0);   
          }
          if($(this).scrollTop() > $section4Top +300){
            if(t4==0){
              t4=1;
              sec4FadeinFn();        
            }
          }
          
        });
         //3.section5
        function sec5FadeinFn(){
          setTimeout(function(){
            $sec5h2.stop().animate({opacity:1},500);
            $rightsec.stop().animate({opacity:1},500);
            setTimeout(function(){
              $p.stop().animate({opacity:1},500);
              setTimeout(function(){
                $span.stop().animate({opacity:1},500);
                setTimeout(function(){
                  $rightFirst.addClass('addAni');
                  setTimeout(function(){
                    $sec5Li.eq(2).addClass('addAni');                    
                    setTimeout(function(){
                      $sec5Li.eq(0).addClass('addAni');                     
                      $sec5Li.eq(1).addClass('addAni');                                             
                    },500);
                  },500);
                },200);
              },200);
            },200);
          },200);
        }      
        $(window).scroll(function(){
          if( $(this).scrollTop() == 0){
            t5=0;
            $sec5h2.stop().animate({opacity:0},0);
            $rightsec.stop().animate({opacity:0},0);
            $p.stop().animate({opacity:0},0);
            $span.stop().animate({opacity:0},0);
            $rightFirst.removeClass('addAni');
            $sec5Li.removeClass('addAni'); 
          }
          if( $(this).scrollTop() >= $('#section5').offset().top-400){
            if(t5 == 0){
              t5=1;
              sec5FadeinFn();
            }
          }
        });
         //4.section6
        function sec6FadeinFn(){
          setTimeout(function(){
            $sec6li.eq(0).addClass('addAni');
            setTimeout(function(){
              $sec6li.eq(1).addClass('addAni');
              setTimeout(function(){
                $sec6li.eq(2).addClass('addAni');
                setTimeout(function(){
                  $sec6li.eq(3).addClass('addAni');
                  setTimeout(function(){
                    $sec6li.eq(7).addClass('addAni');
                    setTimeout(function(){
                      $sec6li.eq(6).addClass('addAni');
                      setTimeout(function(){
                        $sec6li.eq(5).addClass('addAni');
                        setTimeout(function(){
                          $sec6li.eq(4).addClass('addAni');              
                        },500);
                      },500);
                    },500);
                  },500);
                },500);
              },500); 
            },500);
          },500);
        }
        $(window).scroll(function(){
          if( $(this).scrollTop() == 0){
            t6=0;
            $sec6li.addClass('addAni');
          }
          if( $(this).scrollTop() >= $section6Top ){
            if(t6 == 0){
              t6=1;
              sec6FadeinFn();              
            }
          }
        });
       //5.section7
       function sec7FadeinFn(){
         setTimeout(function(){
          $sec7title.addClass('addAni');
          setTimeout(function(){
            $sec7Li.eq(0).addClass('addAni');
            setTimeout(function(){
              $sec7Li.eq(1).addClass('addAni');
              setTimeout(function(){
                $sec7Li.eq(2).addClass('addAni');                
               },200);
             },200);
           },200);
         },200);
       }
       
       $(window).scroll(function(){
        if( $(this).scrollTop() == 0){
          t7 = 0;
          $sec7title.removeClass('addAni');
          $sec7Li.removeClass('addAni');
        }
        if( $(this).scrollTop() >= $section7Top+500 ){
          if(t7 == 0){
            sec7FadeinFn();           
          }
        }
       });
       //6.section8       
       function sec8FadeinFn(){
         setTimeout(function(){
          $sec8Li.eq(1).addClass('addAni');
          setTimeout(function(){
            $sec8Li.eq(2).addClass('addAni');
            setTimeout(function(){
              $sec8Li.eq(0).addClass('addAni');              
             },200);
           },200);
         },200);
       }
       
       $(window).scroll(function(){
         if( $(this).scrollTop() == 0){
           t8 = 0;
           $sec8Li.removeClass('addAni');   
         }
         if( $(this).scrollTop() >=  $section8 ){
           if(t8 == 0){
             t8 =1;
            sec8FadeinFn();
           }
         }
       });
      },
      footerFn:function(){
        var $inputBox = $('#footer .input-box');
        var $submitBtn = $('#submitBtn');
        var $msgWrap = $('#footer .msg-wrap');
        var $email = $('#email');
        var $response = $('#footer .response-box h3');

        $submitBtn.on({
          click:function(event){
            event.preventDefault();

            var emailVal = $('#email').val();
            if( emailVal == '' ){
            alert('메일 주소를 입력하세요!');
            $inputBox.addClass('addAjax');
            $email.focus();
            console.log($msgWrap);
            return false;
          }
          else{
            $inputBox.removeClass('addAjax');

            $.ajax({
              url: './reponse.php',
              type: 'POST',
              data: { email : emailVal 
              },
              success:function(result){
                $inputBox.addClass('addAjax');
                $response.html(result);
                console.log('aaa');

                $msgWrap.fadeIn(1000);
                setTimeout(msgFn,6000);

                function msgFn(){
                  $email.val('');
                  $response.html('');
                  $inputBox.removeClass('addAjax');
                  $msgWrap.fadeOut(1000);
                  $email.focus();
                  console.log('mmm');
                }
              },
              error:function(){
                alert('전송 실패');
              }
            });
          }
         }
        });
      }

   }
    litho.init();

})(jQuery);