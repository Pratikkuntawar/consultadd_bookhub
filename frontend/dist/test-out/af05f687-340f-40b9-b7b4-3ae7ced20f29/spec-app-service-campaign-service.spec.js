import {
  CampaignService,
  init_campaign_service
} from "./chunk-DQCITNV4.js";
import "./chunk-CSZOH65J.js";
import "./chunk-56AEGESF.js";
import {
  TestBed,
  init_testing
} from "./chunk-55HYZWLT.js";
import "./chunk-V6FC2DIM.js";

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
