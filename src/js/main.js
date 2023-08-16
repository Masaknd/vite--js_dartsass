/*------------------------------------------------------
 Page Navigation
------------------------------------------------------*/
const header = document.querySelector("#header");
const mask = document.querySelector("#mask");
const toggleBtn = document.querySelector("#navi-toggle");
const navi = document.querySelector("#navi");

toggleBtn.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});

mask.addEventListener("click", () => {
  header.classList.remove("open");
  toggleBtn.checked = false;
});

navi.addEventListener("click", () => {
  header.classList.remove("open");
  toggleBtn.checked = false;
});

/*------------------------------------------------------
 Carousel
------------------------------------------------------*/
const swiper = new Swiper(".swiper", {
  slidesPerView: 1.25,
  breakpoints: {
    // スライドの表示枚数：600px以上の場合
    600: {
      slidesPerView: 1.5,
    },
    // スライドの表示枚数：768px以上の場合
    768: {
      slidesPerView: 2.5,
    },
    // スライドの表示枚数：1025px以上の場合
    1025: {
      slidesPerView: 3.5,
    },
  },
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
});

/*------------------------------------------------------
 Scroll Observer
------------------------------------------------------*/
const fadeIn = document.querySelectorAll(".fadein");

document.addEventListener("DOMContentLoaded", function () {
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  };

  const so = new ScrollObserver(".fadein", cb);
});

/* scroll.js
================================================ */

class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
      once: true,
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this._init();
  }
  _init() {
    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          if (this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };

    this.io = new IntersectionObserver(callback.bind(this), this.options);

    // @see https://github.com/w3c/IntersectionObserver/tree/master/polyfill
    this.io.POLL_INTERVAL = 100;

    this.els.forEach((el) => this.io.observe(el));
  }

  destroy() {
    this.io.disconnect();
  }
}

/*------------------------------------------------------
 Smooth Scroll
------------------------------------------------------*/
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

// 2. 1のaタグにそれぞれクリックイベントを設定
for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener("click", (e) => {
    // 3. ターゲットの位置を取得
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute("href"); // 各a要素のリンク先を取得
    let targetElement = document.getElementById(href.replace("#", "")); // リンク先の要素（コンテンツ）を取得

    const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
    const offset = window.pageYOffset; // 現在のスクロール量を取得
    const gap = 80; // 固定ヘッダー分の高さ
    const target = rect + offset - gap; //最終的な位置を割り出す

    // 4. スムースにスクロール
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
}
