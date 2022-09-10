import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDummyComponent } from './listar-dummy.component';

describe('ListarDummyComponent', () => {
  let component: ListarDummyComponent;
  let fixture: ComponentFixture<ListarDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDummyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
