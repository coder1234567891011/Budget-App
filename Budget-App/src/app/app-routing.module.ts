import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BudgetsComponent } from './components/budgets/budgets.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

const routes: Routes = [
  {path:'app-home' , component: HomeComponent},
  {path:'app-profile' , component: ProfileComponent},
  {path:'app-accounts' , component: AccountsComponent},
  {path:'app-budgets' , component: BudgetsComponent},
  {path:'app-transactions' , component: TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
