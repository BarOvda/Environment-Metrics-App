import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Legends } from '../models/Legends';
import { Monitor } from '../models/Monitor';
import { MonitorType } from '../models/MonitorType';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LegendsComponent } from '../legends/legends.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  dataUrl: string = "sLUfkgNM";

  monitorTypes: MonitorType[];
  monitors: Monitor[];
  legends: Legends[];


  constructor(private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getLegendsData();
  }

  getLegendsData() {

    this.http.get<any>(`${environment.apiUrl}/${this.dataUrl}`)
      .toPromise().then(json => {
        this.legends = json.Legends;
        this.monitorTypes = json.MonitorType;
        this.monitors = json.Monitor;
      })
  }
  getMonitors(monitorTypeId: number) {
    return this.monitors.filter(monitor => monitor.MonitorTypeId == monitorTypeId);
  }

  openDialog(selectedMonitorType: MonitorType, monitorName: string) {
    let legendsData;
    this.legends
      .forEach(legend => {
        if (selectedMonitorType.LegentId == legend.Id)
          legendsData = legend;
      });
    console.log(legendsData);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      Legends: legendsData,
      monitorName: monitorName,
    };
    const dialogRef = this.dialog.open(LegendsComponent, dialogConfig
    );
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
