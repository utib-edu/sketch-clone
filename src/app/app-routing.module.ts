import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from '@layout/blank/blank.component';
import { MainComponent } from '@layout/main/main.component';
import { AppComponent } from './app.component';
import { HomeComponent } from '@modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    // canActivate: [MsalGuard],
    children: [
      {
        path: 'home',
        component: MainComponent,
        children: [
          {
            path: '',
            component: HomeComponent
          },
        ]
      },
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
