import * as Utils from '../common.js';

const backHome = () => {
  window.location.href = '/';
};

const loadSuccess = () => {
  const setSuccess = (html) => {
    const successEl = document.createElement('div');
    successEl.insertAdjacentHTML('beforeEnd', html);
    successEl
      .querySelector('#successToHome')
      .addEventListener('click', backHome);

    document.querySelector('#containerSuccess').appendChild(successEl);
  };

  Utils.lazyLoad('../components/PaymentSuccess.html', setSuccess);
};

// load navbar
Utils.getNavBar(document);

// load
loadSuccess();

// load footer
Utils.getFooter(document);
