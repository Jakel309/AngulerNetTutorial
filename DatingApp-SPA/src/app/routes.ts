import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { AuthGuard } from './_guards/auth.guard';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { MembersListComponent } from './members/members-list/members-list.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListResolver } from './_resolvers/member-list.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MembersListComponent, resolve: {users: MemberListResolver}},
            { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
