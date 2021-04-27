import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharepointCrudmanagerPageRoutingModule } from './sharepoint-crudmanager-routing.module';

import { SharepointCrudmanagerPage } from './sharepoint-crudmanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharepointCrudmanagerPageRoutingModule
  ],
  declarations: [SharepointCrudmanagerPage]
})
export class SharepointCrudmanagerPageModule {}
