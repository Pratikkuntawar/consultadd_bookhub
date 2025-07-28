import {
  CampaignService,
  init_campaign_service
} from "./chunk-VVWSVYLK.js";
import "./chunk-FWZLS6EV.js";
import "./chunk-BYESBSSC.js";
import {
  TestBed,
  init_testing
} from "./chunk-NB5YZKJW.js";
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
