import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() public title: string;
  @Input() public btnCloseText = 'Close';
  @ViewChild('modal') private modalContent: TemplateRef<ModalComponent>;
  private modalRef: MatDialogRef<any>;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  open() {
    this.modalRef = this.dialog.open(this.modalContent);
  }

  close() {
    this.modalRef.close();
  }
}
