import ns from '../module/ns';

export default class Spot {
  constructor(opts = {}) {
    this.initialize();
  }

  initialize() {
    $('.button-coupon').on('click', (evt) => {
      $('.card-qr').addClass('is-show');
    });
  }
}