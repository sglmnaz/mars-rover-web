import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Size } from '../models/size.interface';

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

  resizePlanet(size: Size) {
    return this.httpClient.post(this.baseApiPath + 'planet/size', size);
  }

  randomizeObstacles(count: number) {
    return this.httpClient.post(
      this.baseApiPath + 'planet/obstacles/randomize/' + count,
      {}
    );
  }

  resetRover() {
    return this.httpClient.get(this.baseApiPath + 'rover/reset');
  }
}
