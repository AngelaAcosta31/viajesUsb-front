import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTipoidComponent } from './ver-tipoid.component';

describe('VerTipoidComponent', () => {
  let component: VerTipoidComponent;
  let fixture: ComponentFixture<VerTipoidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTipoidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTipoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
