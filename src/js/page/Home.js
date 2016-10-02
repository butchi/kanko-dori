import ns from '../module/ns';

export default class Home {
  constructor(opts = {}) {
    this.initialize();
  }

  initialize() {
    $('.btn-here').on('click', (evt) => {
      location.replace('./place/');
    });
  }
}