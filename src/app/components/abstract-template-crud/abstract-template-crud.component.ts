import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'ngd-abstract-template-crud',
  styleUrls: ['./abstract-template-crud.component.scss'],
  template: `
    <div class="container">
      <section class="container__breadcrumb">
        <ng-container [ngTemplateOutlet]="breadcrumb"></ng-container>
      </section>
      <section
        class="container__headerActions"
        fxLayout
        fxLayoutAlign="space-between center"
      >
        <ng-container [ngTemplateOutlet]="headerActions"></ng-container>
      </section>
      <section class="container__content">
        <ng-container [ngTemplateOutlet]="grid"></ng-container>
      </section>
    </div>
  `,
})
export class AbstractTemplateCrudComponent {
  @ContentChild('breadcrumb') breadcrumb: TemplateRef<any>;
  @ContentChild('headerActions') headerActions: TemplateRef<any>;
  @ContentChild('grid') grid: TemplateRef<any>;
}
