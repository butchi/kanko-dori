import ns from '../module/ns';

export default class Common {
  constructor(opts = {}) {
    this.initialize();
  }

  initialize() {
    console.log('page common');

    this.setEnvClass();

    ns.spotArr = [
      {
        "id" : 1,
        "name" : "モン･ペシェ･ミニョン",
        "address" : "神奈川県鎌倉市",
        "lat" : 35.3232961,
        "lng" : 139.5594026
      },
      {
        "id" : 2,
        "name" : "café vivement dimanche",
        "address" : "神奈川県鎌倉市",
        "lat" : 35.3203769,
        "lng" : 139.5490644
      },
      {
        "id" : 3,
        "name" : "OXYMORON onari",
        "address" : "神奈川県鎌倉市",
        "lat" : 35.319927,
        "lng" : 139.5466479
      },
      {
        "id" : 4,
        "name" : "イワタコーヒー店",
        "address" : "神奈川県鎌倉市",
        "lat" : 35.3194993,
        "lng" : 139.5493172
      },
      {
        "id" : 5,
        "name" : "山海堂",
        "address" : "神奈川県鎌倉市長谷4-2-26",
        "lat" : 35.3154356,
        "lng" : 139.5331683
      },
      {
        "id" : 6,
        "name" : "土屋鞄製造所",
        "address" : "神奈川県鎌倉市由比ガ浜1-10-2",
        "lat" : 35.3152136,
        "lng" : 139.5439841
      },
      {
        "id" : 7,
        "name" : "gram",
        "address" : "神奈川県鎌倉市雪ノ下1-5-38",
        "lat" : 35.3226184,
        "lng" : 139.5505283
      },
      {
        "id" : 8,
        "name" : "スワニー",
        "address" : "神奈川県鎌倉市大町1-1-14",
        "lat" : 35.3158025,
        "lng" : 139.5490282
      },
      {
        "id" : 9,
        "name" : "鎌倉文学館",
        "address" : "神奈川県鎌倉市長谷1-5-3",
        "lat" : 35.3155273,
        "lng" : 139.5367069
      },
      {
        "id" : 10,
        "name" : "湘南ボウル",
        "address" : "神奈川県鎌倉市常盤18",
        "lat" : 35.3315255,
        "lng" : 139.5131561
      }
    ];
  }

  setEnvClass() {
    const $html = $('html');

    ns.isSp = false;
    ns.isPc = false;
    ns.isTab = false;

    if($html.hasClass('is-sp')) {
      ns.isSp = true;
    }
    if($html.hasClass('is-pc')) {
      ns.isPc = true;
    }
    if($html.hasClass('is-tab')) {
      ns.isTab = true;
    }
  }
}