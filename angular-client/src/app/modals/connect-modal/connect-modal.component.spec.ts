import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectModalComponent } from './connect-modal.component';

describe('ConnectModalComponent', () => {
  let component: ConnectModalComponent;
  let fixture: ComponentFixture<ConnectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
