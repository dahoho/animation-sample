import { gsap } from 'gsap';

export default function () {
  window.addEventListener('load', () => {
    /* 文字列を分割しspanで囲む */
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

    //gsapここから
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
}
