import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleVeicComponent } from './controle-veic.component';

describe('ControleVeicComponent', () => {
  let component: ControleVeicComponent;
  let fixture: ComponentFixture<ControleVeicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleVeicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleVeicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
