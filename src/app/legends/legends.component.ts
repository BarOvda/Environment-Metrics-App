import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css']
})
export class LegendsComponent implements OnInit {
  LegendsIds: number[];
  constructor(private dialogRef: MatDialogRef<LegendsComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.LegendsIds = data.LegendsIds;
  }
  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
