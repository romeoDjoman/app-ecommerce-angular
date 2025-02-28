import { Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { JournalDetailComponent } from './journal-detail/journal-detail.component';
import { PublicationListComponent } from './publication-list/publication-list.component';

export const PUBLICATIONS_ROUTES: Routes = [
  { path: 'article/detail', component: ArticleDetailComponent },
  { path: 'journal/detail', component: JournalDetailComponent },
  { path: 'publication/list', component: PublicationListComponent },

];
