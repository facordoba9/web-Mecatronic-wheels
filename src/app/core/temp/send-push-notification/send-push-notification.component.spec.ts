import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPushNotificationComponent } from './send-push-notification.component';

describe('SendPushNotificationComponent', () => {
  let component: SendPushNotificationComponent;
  let fixture: ComponentFixture<SendPushNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendPushNotificationComponent]
    });
    fixture = TestBed.createComponent(SendPushNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
