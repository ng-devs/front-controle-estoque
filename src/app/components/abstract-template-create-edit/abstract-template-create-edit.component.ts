import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'ngd-abstract-template-create-edit',
  templateUrl: './abstract-template-create-edit.component.html',
  styleUrls: ['./abstract-template-create-edit.component.scss'],
})
export class AbstractTemplateCreateEditComponent implements OnInit {
  @ContentChild('breadcrumb') breadcrumb: TemplateRef<any>;
  @ContentChild('formArea') formArea: TemplateRef<any>;
  @ContentChild('actionText') actionText: TemplateRef<any>;

  constructor() {}
  ngOnInit(): void {}
}
