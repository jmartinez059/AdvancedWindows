import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDropdownComponent } from './service-dropdown.component';

describe('ServiceDropdownComponent', () => {
  let component: ServiceDropdownComponent;
  let fixture: ComponentFixture<ServiceDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
