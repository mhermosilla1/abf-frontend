import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMallasComponent } from './listar-mallas.component';

describe('ListarMallasComponent', () => {
  let component: ListarMallasComponent;
  let fixture: ComponentFixture<ListarMallasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMallasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
