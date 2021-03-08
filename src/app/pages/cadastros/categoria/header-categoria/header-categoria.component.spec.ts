import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCategoriaComponent } from './header-categoria.component';

describe('HeaderCategoriaComponent', () => {
  let component: HeaderCategoriaComponent;
  let fixture: ComponentFixture<HeaderCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
