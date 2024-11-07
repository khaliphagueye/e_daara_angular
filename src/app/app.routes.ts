import { Routes } from '@angular/router';  
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Mes_coursComponent } from './components/mes_cours/mes_cours.component';
import { CoursDetailsComponent } from './components/mes_cours/cours-details/cours-details.component';
import { Mes_documentsComponent } from './components/mes_documents/mes_documents.component';
import { Mon_portfolioComponent } from './components/mon_portfolio/mon_portfolio.component';
import { Mon_profilComponent } from './components/mon_profil/mon_profil.component';
import { Ma_classe_en_directComponent } from './components/ma_classe_en_direct/ma_classe_en_direct.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { AdminComponent } from './components/admin/admin.component';
import { CoursContenuComponent } from './components/mes_cours/cours-contenu/cours-contenu.component';
import { LeconCoursContenuComponent } from './components/mes_cours/lecon-cours-contenu/lecon-cours-contenu.component';
import { RegisterComponent } from './components/register/register.component';

// Import du guard
//import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { 
        path: '',
        component: LoginComponent
    },
    { 
        path: 'login',
        component: LoginComponent
    },
    { 
        path: 'register',
        component: RegisterComponent
    },
    { 
        path: 'admin',
        component: AdminComponent,
        //canActivate: [AuthGuard],  // Protection de l'accès
        children: [
            { 
                path: '',
                component: DashboardComponent,
                //canActivate: [AuthGuard]  // Protection de l'accès
            },
            { 
                path: 'dashboard',
                component: DashboardComponent,
                //canActivate: [AuthGuard]  // Protection de l'accès
            },
            { 
                path: 'mes_cours',
                component: Mes_coursComponent,
                //canActivate: [AuthGuard]  // Protection de l'accès
            },
            { 
                path: 'cours-details/:id',
                component: CoursDetailsComponent,
                //canActivate: [AuthGuard]  // Protection de l'accès
            },
            { 
                path: 'cours-contenu/:id',
                component: CoursContenuComponent,
                //canActivate: [AuthGuard]  // Protection de l'accès
            },
            { path: 'lecon-cours-contenu/:id', 
             component: LeconCoursContenuComponent,
             },
            { 

                path: 'mes_documents',
                component: Mes_documentsComponent,
                //canActivate: [AuthGuard]  // Protection de l'accès
            },
            { 
                path: 'mon_portfolio',
                component: Mon_portfolioComponent,
                //canActivate: [AuthGuard]  // Protection de l'accès
            },
            { 
                path: 'mon_profil',
                component: Mon_profilComponent,
                //canActivate: [AuthGuard]  // Protection de l'accès
            },
            { 
                path: 'ma_classe_en_direct',
                component: Ma_classe_en_directComponent,
                //canActivate: [AuthGuard]  // Protection de l'accès
            },
            { 
                path: 'utilisateurs',
                component: UtilisateursComponent,
                //canActivate: [AuthGuard]  // Protection de l'accès
            }
        ]
    }
];
