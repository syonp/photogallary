//トップ画像
document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".animated-image");

  // 初回スライドアニメーション
  setTimeout(() => {
    image.style.left = "0"; // スライドして画面内に配置
  }, 100); // ロード直後に少し遅延させてスタート

  // スクロール時の透過処理
  document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY; // 現在のスクロール位置を取得
    const windowHeight = window.innerHeight; // 画面の高さを取得

    // 透過度を計算 (スクロール量に応じて0～1の範囲)
    const opacity = Math.max(1 - (scrollPosition / windowHeight) * 0.3, 0.1);

    // 画像の透過度を適用
    image.style.opacity = opacity;
  });
});

//文字フェード
const fade = document.querySelector('.fade',);

const fadeKeyframes = {
  opacity: [0, 1],
}

const fadeOptions = {
  duration: 1000,
  delay: 1000,
  easing: 'ease',
  fill: 'forwards',
}

fade.animate(fadeKeyframes, fadeOptions);

//ギャラリー
const items = document.querySelectorAll('.img-item');

// IntersectionObserverを設定
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) { // 要素がビューポート内に入った場合
      const keyframes = {
        opacity: [0, 1], // フェードイン
        translate: ['0 50px', 0], // 下から上に移動
        filter: ['blur(10px)', 'blur(0)'], // ぼかしを解除
      };

      const options = {
        duration: 600, // アニメーション時間
        delay: i * 400, // 遅延を適用
        fill: 'forwards', // アニメーション終了後の状態を保持
      };

      entry.target.animate(keyframes, options); // アニメーションを適用
      observer.unobserve(entry.target); // 1回だけ実行
    }
  });
}, { threshold: 0.5 }); // 要素が50%表示されたら発火

// 各要素を監視
items.forEach((item) => observer.observe(item));

//スライド画像

$(document).ready(function(){
  $('.bxslider').bxSlider({
      auto: true,
      pause: 4000,
      slideWidth: 800,
      adaptiveHeight: true,
      captions: true
  });
});