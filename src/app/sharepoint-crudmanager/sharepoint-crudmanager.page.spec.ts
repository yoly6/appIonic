import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SharepointCrudmanagerPage } from './sharepoint-crudmanager.page';

describe('SharepointCrudmanagerPage', () => {
  let component: SharepointCrudmanagerPage;
  let fixture: ComponentFixture<SharepointCrudmanagerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SharepointCrudmanagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SharepointCrudmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
