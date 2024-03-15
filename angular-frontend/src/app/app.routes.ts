import { Routes } from '@angular/router';
import { BorrowerComponent } from './borrower/borrower.component';
import { LoginComponent } from './login/login.component';
import { Total_list_booksComponent } from './total_list_books/list_book.component';
import { LibrarianDashboardComponent } from './librarian/librarian-dashboard/librarian-dashboard.component';
import { AccountManagementComponent } from './librarian/account-management/account-management.component';
import { LostAndDamageComponent } from './librarian/lost-and-damage/lost-and-damage.component';
import { AboutComponent } from './librarian/about/about.component';
import { TransactionComponent } from './librarian/transaction/transaction.component';
import { LibrarianAideComponent } from './librarian-aide/librarian-aide-dashboard/librarian-aide.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'LIBRARY MANAGEMENT SYSTEM',
  },
  {
    path: 'borrower',
    component: BorrowerComponent,
    title: 'LIBRARY MANAGEMENT SYSTEM',
  },
  {
    path: 'total_list_books',
    component: Total_list_booksComponent,
    title: 'LIBRARY MANAGEMENT SYSTEM',
  },
 
  {
    path: 'librarian-dashboard',
    component: LibrarianDashboardComponent,
    title: 'LIBRARY MANAGEMENT SYSTEM',
  },
  {
    path: 'account-management',
    component: AccountManagementComponent,
    title: 'LIBRARY MANAGEMENT SYSTEM',
  },
  {
    path: 'lost-and-damage',
    component: LostAndDamageComponent,
    title: 'LIBRARY MANAGEMENT SYSTEM',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'LIBRARY MANAGEMENT SYSTEM',
  },
  {
    path: 'transaction',
    component: TransactionComponent,
    title: 'LIBRARY MANAGEMENT SYSTEM',
  },
  {
    path: '',
    component: LibrarianAideComponent,
    title: 'LIBRARY MANAGEMENT SYSTEM',
  },
];
