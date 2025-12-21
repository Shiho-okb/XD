
jQuery(function ($) {

  // ページトップボタン
  var topBtn = $('.js-pagetop');
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  // ハンバーガーメニュー
  $('.js-hamburger').on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('is-active');
    $("body").toggleClass("active");
    $('.js-drawer').fadeToggle();
  });

  // アコーディオン
  $(function () {
    $(".js-accordion").on("click", function () {
      const $target = $(this).closest(".p-header-nav-item").find(".p-header-dropmenu");
      $target.stop(true, true).slideToggle(300).toggleClass("is-open");
      $(this).toggleClass("open");
    });
  });

  // フェードイン
  $(function () {
  function checkFadeIn() {
    const wHeight = $(window).height();
    const wScroll = $(window).scrollTop();
    const targets = [
      ".js-mainvisual__textbox",
      ".js-mainvisual__title",
      ".js-image",
      ".js-subtitle",
      ".js-title"
    ].join(", ");
    $(targets).each(function () {
      const bPosition = $(this).offset().top;
      if (wScroll > bPosition - wHeight + 200) {
        $(this).addClass("u-fadeIn");
      }
    });
  }
    // スクロール時
    $(window).scroll(function () {
      checkFadeIn();
    });
    // ページ読み込み時にも判定
    checkFadeIn();
  });

  // スワイパー
  const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 1500,
    slidesPerView: 1.5,
    spaceBetween: 14,
    centeredSlides: true,

    // 自動再生
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false,
    // },

    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // レスポンシブ設定
    breakpoints: {
      768: {
        slidesPerView: '3.32',
        spaceBetween: -20,
      },
    },
  });
});
