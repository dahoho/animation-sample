import { gsap } from 'gsap';

export default function () {
  // =======================================================================
  // 1文字づつ表示
  // =======================================================================
  window.addEventListener('DOMContentLoaded', () => {
    // 文字列を分割しspanで囲む
    const textAnimation = [...document.querySelectorAll('.js-text-animation')];

    textAnimation.map((target) => {
      let nodes = [...target.childNodes];

      let textBox = '';
      nodes.map((node) => {
        console.log(node);
        if (node.nodeType === 3) {
          // テキストの場合
          let result = node.textContent.split('');
          result.map((text) => {
            textBox += '<span>' + text + '</span>';
          });
        } else {
          //brの場合はそのまま連結
          textBox = textBox + node.outerHTML;
        }
      });

      target.innerHTML = textBox;
    });

    // gsapここから
    const textAnimationTarget = [...document.querySelectorAll('.js-text-animation span')];
    gsap.to(textAnimationTarget, {
      opacity: 1,
      stagger: 0.02,
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
