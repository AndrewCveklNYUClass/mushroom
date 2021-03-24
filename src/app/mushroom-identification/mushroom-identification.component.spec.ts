import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomIdentificationComponent } from './mushroom-identification.component';

describe('MushroomIdentificationComponent', () => {
  let component: MushroomIdentificationComponent;
  let fixture: ComponentFixture<MushroomIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MushroomIdentificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MushroomIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
