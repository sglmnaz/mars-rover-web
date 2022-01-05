import { Component, OnInit } from '@angular/core';
import { MissionService } from './services/mission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  missionState: any[] = [];

  constructor(private missionService: MissionService) {}

  ngOnInit(): void {
    this.getMissionState();
  }

  handleSubmitCommands(commands: string[]) {
    this.missionService.postCommands(commands).subscribe((res: any) => {
      this.getMissionState();
      if (res.message) console.log(res.message);
    });
  }

  getMissionState() {
    this.missionService.getState().subscribe((res: any) => {
      this.missionState = res;
    });
  }
}
