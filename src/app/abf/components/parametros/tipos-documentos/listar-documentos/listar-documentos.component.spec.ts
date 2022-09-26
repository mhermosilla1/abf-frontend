import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDocumentosComponent } from './listar-documentos.component';

describe('ListarDocumentosComponent', () => {
  let component: ListarDocumentosComponent;
  let fixture: ComponentFixture<ListarDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDocumentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
