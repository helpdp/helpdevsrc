import {
  MCUIService
} from 'mc-ui-angular';

const URLS = {
  user: 'api/user/',
};

const MOCK_URLS = {
  user: ''
};

export class Url {

  private root = '';

  constructor(private service: MCUIService) {
    this.root = this.service.util.getRootUrl();
  }

  /**
   *
   * @param id url id
   * @param extra for dynamic url e.g) id data string
   */
  getUrl(id: string, params = [], isMockData = false) {
    let val = URLS[id];
    if (params.length > 0) {
      params.map((u, i) => {
        val = val.replace(`{${i}}`, u);
      });
    }
    return !isMockData ? this.root + val : MOCK_URLS[id] || {};
  }

}
