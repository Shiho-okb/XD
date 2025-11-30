
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
      ".js-mainvisual__image",
      ".js-mainvisual__textbox",
      ".js-mainvisual-title",
      ".js-title"
    ].join(", ");

    $(targets).each(function () {
      const bPosition = $(this).offset().top;
      if (wScroll > bPosition - wHeight + 200) {
        $(this).addClass("fadeIn");
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
  });
