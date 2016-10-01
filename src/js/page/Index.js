import ns from '../module/ns';

export default class Index {
  constructor(opts = {}) {
    this.initialize();
  }

  initialize() {
    console.log('index page');

    $('.btn-here').on('click', (evt) => {
      location.replace('./place/');
    });

    $('.form-search').on('submit', (evt) => {
      evt.preventDefault();

      location.replace('./place/');
    });
  }
}