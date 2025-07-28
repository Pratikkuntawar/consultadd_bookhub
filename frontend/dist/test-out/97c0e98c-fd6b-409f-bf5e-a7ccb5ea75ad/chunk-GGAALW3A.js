import {
  HttpClient,
  init_http
} from "./chunk-WYQ2KV7G.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-QEPMZKHZ.js";
import {
  __esm
} from "./chunk-V6FC2DIM.js";

// src/app/service/campaign-service.ts
var CampaignService;
var init_campaign_service = __esm({
  "src/app/service/campaign-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    CampaignService = class CampaignService2 {
      http;
      baseUrl = "http://localhost:8080/marketing";
      constructor(http) {
        this.http = http;
      }
      registerCampaign(campaign) {
        return this.http.post(`${this.baseUrl}/createCampaign`, campaign);
      }
      getAllCompaign() {
        return this.http.get(`${this.baseUrl}/getCampaign`);
      }
      deleteCampaign(id) {
        return this.http.delete(`${this.baseUrl}/deleteCampaign/${id}`);
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    CampaignService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], CampaignService);
  }
});

export {
  CampaignService,
  init_campaign_service
};
//# sourceMappingURL=chunk-GGAALW3A.js.map
