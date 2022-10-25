import { gsap } from 'gsap';

export default function () {
  // =======================================================================
  // 1文字づつ表示
  // =======================================================================
  window.addEventListener('DOMContentLoaded', () => {
    // 文字列を分割しspanで囲む
    const textAnimation = [...document.querySelectorAll('.js-text-animation')];

    textAnimation.map((target) => {
      let newText = '';
      const text = target.textContent;
      const result = text.split('');
      result.map((target) => {
        newText += '<span>' + target + '</span>';
      });

      target.innerHTML = newText;
    });
    // gsapここから
    const textAnimationTarget = [...document.querySelectorAll('.js-text-animation span')];
    gsap.to(textAnimationTarget, {
      opacity: 1,
      stagger: {
        amount: 1.2, //1秒ずらしてアニメーション
        from: 'start', //要素順にアニメーション。
        ease: 'sine.in', //イージング詳細:https://greensock.com/docs/v3/Eases
      },
    });
  });
  // =======================================================================
  // カーテンアニメーション
  // =======================================================================
  window.addEventListener('DOMContentLoaded', () => {
    const rect = [...document.querySelectorAll('.js-text-animation-curtain .p-text-animation-curtain__rect')];
    const text = [...document.querySelectorAll('.js-text-animation-curtain .p-text-animation-curtain__text')];
    gsap.set(rect, {
      x: '-105%',
    });
    gsap.set(text, {
      opacity: 0,
    });
    gsap.to(text, {
      opacity: 1,
      delay: 0.4,
    });
    gsap.to(rect, {
      x: '105%',
      duration: 1.2,
    });
  });
}
