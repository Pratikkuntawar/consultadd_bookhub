import {
  CampaignService,
  init_campaign_service
} from "./chunk-BYCOWVJM.js";
import "./chunk-XENIYTW7.js";
import "./chunk-BYESBSSC.js";
import {
  TestBed,
  init_testing
} from "./chunk-CBUZ25KJ.js";
import "./chunk-6TRXNEZQ.js";

// src/app/service/campaign-service.spec.ts
init_testing();
init_campaign_service();
describe("CampaignService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-service-campaign-service.spec.js.map
