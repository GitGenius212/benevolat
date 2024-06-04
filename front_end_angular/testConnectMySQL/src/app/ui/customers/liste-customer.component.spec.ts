import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCustomerComponent } from './liste-customer.component';

describe('ListeCustomerComponent', () => {
  let component: ListeCustomerComponent;
  let fixture: ComponentFixture<ListeCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
