import ns from './ns';
import PageCommon from '../page/Common';
import PageHome from '../page/Home';
import PagePlace from '../page/Place';
import PageSpot from '../page/Spot';

export default class Router {
  constructor() {
    this.initialize();
  }

  initialize() {
    const $body = $('body');

    this.pageCommon = new PageCommon();

    if($body.hasClass('page-home')) {
      this.pageHome = new PageHome();
    }

    if($body.hasClass('page-place')) {
      this.pagePlace = new PagePlace();
    }

    if($body.hasClass('page-spot')) {
      this.pageSpot = new PageSpot();
    }
  }
}
