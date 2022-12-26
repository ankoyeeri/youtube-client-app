import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorLineComponent } from './color-line.component';

describe('ColorLineComponent', () => {
  let component: ColorLineComponent;
  let fixture: ComponentFixture<ColorLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
