import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Legends } from '../models/Legends';
import { Monitor } from '../models/Monitor';
import { MonitorType } from '../models/MonitorType';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  dataUrl:string = "sLUfkgNM";
  
  monitorTypes:MonitorType[];
  monitors:Monitor[];
  legends:Legends[];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getLegendsData();
  }

  getLegendsData(){
    let headers = new HttpHeaders();
    // headers = headers.set('Access-Control-Allow-Origin', '*');
    // headers = headers.set('Content-Type', 'application/json; charset=UTF-8');

    const options = { headers: headers };


    this.http.get<any>(`${environment.apiUrl}/${this.dataUrl}`)
      .toPromise().then(json=>{
        this.legends = json.Legends;
        this.monitorTypes = json.MonitorType;
        this.monitors = json.Monitor;
        console.log(json);
        console.log(this.legends);
        console.log(this.monitorTypes);
        console.log(this.monitors);
      })
  }

}
