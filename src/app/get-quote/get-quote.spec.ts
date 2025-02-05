import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuoteFormComponent } from './get-quote.component';

describe('GetQuoteFormComponent', () => {
  let component: GetQuoteFormComponent;
  let fixture: ComponentFixture<GetQuoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetQuoteFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GetQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
