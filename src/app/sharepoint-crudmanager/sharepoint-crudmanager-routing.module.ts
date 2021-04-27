import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharepointCrudmanagerPage } from './sharepoint-crudmanager.page';

const routes: Routes = [
  {
    path: '',
    component: SharepointCrudmanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharepointCrudmanagerPageRoutingModule {}
