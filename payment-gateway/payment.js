import * as Utils from '../common.js';

const dataPenumpang = Utils.jsonLoad('penumpang');

const bayar = () => {
  window.location.href = '../payment-success';
};

const loadPayment = () => {
  const setPayment = (html) => {
    const paymentEl = document.createElement('div');
    paymentEl.insertAdjacentHTML('beforeEnd', html);
    paymentEl.querySelector('#btnBayar').addEventListener('click', bayar);

    const setPassengerData = () => {
      const nama = paymentEl.querySelector('#name');
      const phone = paymentEl.querySelector('#phone');
      const nik = paymentEl.querySelector('#nik');

      if (dataPenumpang.gender === 'Pria') {
        nama.innerText = `Tn. ${dataPenumpang.firstName} ${dataPenumpang.lastName}`;
      }
      if (dataPenumpang.gender === 'Wanita') {
        nama.innerText = `Ny. ${dataPenumpang.firstName} ${dataPenumpang.lastName}`;
      }

      phone.innerText = `+62 ${dataPenumpang.phone}`;
      nik.innerText = `${dataPenumpang.nik}`;
    };

    setPassengerData();

    document.querySelector('#payment').appendChild(paymentEl);
  };

  Utils.lazyLoad('../components/Payment.html', setPayment);
};

// load navbar
Utils.getNavBar(document);

// load
loadPayment();

// load footer
Utils.getFooter(document);
