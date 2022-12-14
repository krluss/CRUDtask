import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampaignComponent } from './add-campaign.component';

describe('AddCampaignComponent', () => {
  let component: AddCampaignComponent;
  let fixture: ComponentFixture<AddCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
