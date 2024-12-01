import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { ContactComponent } from './contact/contact.component';
import { FlowersComponent } from './flowers/flowers.component';
import { SymbolismeComponent } from './symbolisme/symbolisme.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'liv',component: LivraisonComponent },
  {path:'flowers',component:FlowersComponent},
  {path:'symbole',component: SymbolismeComponent},
  {path:'contact',component:ContactComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirection par défaut
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
