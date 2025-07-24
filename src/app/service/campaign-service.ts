import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CampaignModel } from '../models/CapaignModel';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private baseUrl = 'http://localhost:8080/marketing';

  constructor(private http: HttpClient) {}

  registerCampaign(campaign: CampaignModel): Observable<any> {
    return this.http.post(`${this.baseUrl}/createCampaign`, campaign);
  }
  getAllCompaign():Observable<any>{
   return this.http.get<any>(`${this.baseUrl}/getCampaign`);
  }
  deleteCampaign(id:number):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/deleteCampaign/${id}`);
  }
}
