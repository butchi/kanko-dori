import ns from '../module/ns';

export default class Spot {
  constructor(opts = {}) {
    this.initialize();
  }

  initialize() {
    this.count = Math.floor(Math.random() * 12);

    $(window).on('load', () => {
      this.updateService();
    });

    $('.button-coupon').on('click', (evt) => {
      $('.card-qr').addClass('is-show');
    });

    $('.button-reload').on('click', () => {
      location.reload();
    });
  }

  updateService() {
    var cnt = this.count;
    var $tbl = $('.table-service');

    $('.checkin-text .count').text(cnt);

    $tbl.find('.mdl-checkbox__input').attr('disabled', true);

    if(cnt <= 10) {
      $tbl.find('tr').eq(1).addClass('is-selected');
      $tbl.find('.mdl-checkbox').eq(1).addClass('is-checked');
    }
    if(cnt <= 5) {
      $tbl.find('tr').eq(2).addClass('is-selected');
      $tbl.find('.mdl-checkbox').eq(2).addClass('is-checked');
    }
    if(cnt <= 1) {
      $tbl.find('tr').eq(3).addClass('is-selected');
      $tbl.find('.mdl-checkbox').eq(3).addClass('is-checked');
    }
  }
}