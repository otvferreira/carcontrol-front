import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRelatoriosComponent } from './all-relatorios.component';

describe('AllRelatoriosComponent', () => {
  let component: AllRelatoriosComponent;
  let fixture: ComponentFixture<AllRelatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRelatoriosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
