import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ngd-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() public title: string;
  @Input() public btnCloseText = 'Fechar';
  @Input() public btnConfirmText = 'Sim';
  @Input() public maxWidth: string;
  @Input() public width: string;
  @Input() public hasConfirmBtn = false;
  @ViewChild('modal') private modalContent: TemplateRef<ModalComponent>;
  private modalRef: MatDialogRef<any>;

  constructor(private dialog: MatDialog) {}

  open() {
    return (this.modalRef = this.dialog.open(this.modalContent, {
      maxWidth: this.maxWidth || '',
      width: this.width,
    }));
  }

  confirm(): void {
    this.modalRef.close(true);
  }

  close(): void {
    this.modalRef.close(false);
  }
}
