// ブラウザ（デバイス）分岐処理
import UaParser from 'ua-parser-js';
const uaParser = new UaParser();
const browser = uaParser.getBrowser().name;

const init = async () => {
  require('./init/observer').default(); //observer
  require('./init/parallax-img').default(); //parallax-img
  require('./init/text-animation').default(); //text-animation
  require('./init/mouseStalker').default(); //mouseStalker
  require('./init/hamburger').default(); //hamburger

  // ブラウザ（デバイス）分岐処理
  const HtmlElement = document.querySelector('html');
  switch (browser) {
    case 'Chrome':
      HtmlElement.classList.add('is-chrome');
      break;
    default:
  }
};

init();
