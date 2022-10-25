import gsap from 'gsap';

export default function () {
  let cursor = document.querySelector('.js-cursor'),
    link = [...document.querySelectorAll('.js-link-mousestalker')],
    pos = { x: 0, y: 0 }, // カーソル要素の座標
    mouse = { x: pos.x, y: pos.y }, // マウスカーソルの座標
    speed = 0.5; // 0.01〜1 数値が大きほど早い

  // カーソルの座標を設定する
  let cursorSetX = gsap.quickSetter(cursor, 'x', 'px');
  let cursorSetY = gsap.quickSetter(cursor, 'y', 'px');

  // マウスカーソル座標を取得する
  document.addEventListener('mousemove', (event) => {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });

  // レンダリングする
  gsap.ticker.add(() => {
    let dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    cursorSetX(pos.x);
    cursorSetY(pos.y);
  });

  // マウスイベント
  link.map((target) => {
    target.addEventListener('mouseenter', function () {
      cursor.classList.add('is-active');
    });

    target.addEventListener('mouseleave', function () {
      cursor.classList.remove('is-active');
    });
  });
}
