import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTipodestinoComponent } from './ver-tipodestino.component';

describe('VerTipodestinoComponent', () => {
  let component: VerTipodestinoComponent;
  let fixture: ComponentFixture<VerTipodestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTipodestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTipodestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
