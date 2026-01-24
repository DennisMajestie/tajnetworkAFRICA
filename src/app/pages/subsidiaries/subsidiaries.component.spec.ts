import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidiariesComponent } from './subsidiaries.component';

describe('SubsidiariesComponent', () => {
  let component: SubsidiariesComponent;
  let fixture: ComponentFixture<SubsidiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubsidiariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsidiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
