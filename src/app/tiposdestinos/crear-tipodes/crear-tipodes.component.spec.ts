import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipodesComponent } from './crear-tipodes.component';

describe('CrearTipodesComponent', () => {
  let component: CrearTipodesComponent;
  let fixture: ComponentFixture<CrearTipodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
