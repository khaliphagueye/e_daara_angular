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
        path: 'admin',
        component: AdminComponent,
        children: [
            { 
                path: '',
                component: DashboardComponent
            },
            { 
                path: 'dashboard',
                component: DashboardComponent
            },
            { 
                path: 'mes_cours',
                component: Mes_coursComponent
            },
            { 
                path: 'cours-details/:id',
                component: CoursDetailsComponent
            },
            { 
                path: 'mes_documents',
                component: Mes_documentsComponent
            },
            { 
                path: 'mon_portfolio',
                component: Mon_portfolioComponent
            },
            { 
                path: 'mon_profil',
                component: Mon_profilComponent
            },
            { 
                path: 'ma_classe_en_direct',
                component: Ma_classe_en_directComponent
            },
            { 
                path: 'utilisateurs',
                component: UtilisateursComponent
            }
        ]
    }
];
