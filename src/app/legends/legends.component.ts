import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Legends } from '../models/Legends';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css']
})
export class LegendsComponent implements OnInit {
  legend: Legends;
  monitorName: string;

  tags: [{ Label: string, Color: string }];
  constructor(private dialogRef: MatDialogRef<LegendsComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.legend = data.Legends;
    this.monitorName = data.monitorName;
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }
  ngOnInit(): void {

    console.log(this.legend);
    this.tags = this.legend.tags;
    console.log(this.tags);
  }
  close() {
    this.dialogRef.close();
  }


}
