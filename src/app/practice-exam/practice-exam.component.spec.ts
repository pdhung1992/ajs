import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeExamComponent } from './practice-exam.component';

describe('PracticeExamComponent', () => {
  let component: PracticeExamComponent;
  let fixture: ComponentFixture<PracticeExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
