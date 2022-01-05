import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  baseApiPath = 'api/';

  constructor(protected httpClient: HttpClient) {}

  getState() {
    return this.httpClient.get(this.baseApiPath + 'mission');
  }

  postCommands(commands: any[]) {
    return this.httpClient.post(this.baseApiPath + 'rover', commands);
  }
}
