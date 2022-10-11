import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTorneosComponent } from './listar-torneos.component';

describe('ListarTorneosComponent', () => {
  let component: ListarTorneosComponent;
  let fixture: ComponentFixture<ListarTorneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTorneosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
