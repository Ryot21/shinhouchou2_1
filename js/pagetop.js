// JavaScript Document
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
   var scroll = $(window).scrollTop();
   if (scroll >= 1500){
         $('#pageTop').removeClass('DownMove');
         $('#pageTop').addClass('UpMove');
   }else{
         if($('#pageTop').hasClass('UpMove')){
         $('#pageTop').removeClass('UpMove');
         $('#pageTop').addClass('DownMove');
         }
   }
   }
   
   // 画面をスクロールをしたら動かしたい場合の記述
   $(window).scroll(function () {
         PageTopAnime();
   });
   
   // ページが読み込まれたらすぐに動かしたい場合の記述
   $(window).on('load', function () {
         PageTopAnime();
   });
   
   
   $(function(){
      // #で始まるアンカーをクリックした場合に処理
      $('a[href^="#"]:not(.inline)').click(function() {
         // スクロールの速度
         var speed = 300; // ミリ秒
          // 移動先を取得
         var href= $(this).attr("href");
         var target = $(href == "#" || href == "" ? 'html' : href);
         // 移動先を数値で取得
         var position = target.offset().top;
         // スムーススクロール
         $('body,html').animate({scrollTop:position}, speed, 'swing');
         return false;
      });
   });
   