// // スクロールアニメーション関係
// var targets = document.querySelectorAll('.js-scroll'); //ターゲット要素
// //スクロールイベント
// window.addEventListener('scroll', function () {
//   var scroll = window.scrollY;
//   var windowHeight = window.innerHeight;
//   for (let target of targets) {
//     var targetPos = target.getBoundingClientRect().top + scroll;
//     if (scroll > targetPos - windowHeight) { 
//       target.classList.add('is-animated');
//     }
//   }
// });

// スクロールで背景が動く
$(window).scroll(function(){
    let height = $(this).scrollTop();
    /*高さを調節*/
    let yLine = height - 290;
    /*parseInt( yLine / 2 )の整数部分(今回なら2)を調節することで、スクロール時の動きを調節。値を小さくすると、大きく動く*/
    $('.js-move-bg').css('background-position', 'left top ' +parseInt( yLine / 2 ) +'px');
});