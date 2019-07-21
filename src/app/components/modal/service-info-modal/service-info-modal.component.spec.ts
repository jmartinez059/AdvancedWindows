import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInfoModalComponent } from './service-info-modal.component';

describe('ServiceInfoModalComponent', () => {
  let component: ServiceInfoModalComponent;
  let fixture: ComponentFixture<ServiceInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceInfoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
