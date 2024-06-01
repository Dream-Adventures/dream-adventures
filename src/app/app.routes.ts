import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { AboutComponent } from './screens/about/about.component';
import { ContactComponent } from './screens/contact/contact.component';
import { ServiceComponent } from './screens/service/service.component';
import { DestinationComponent } from './screens/destination/destination.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full', title: "Home"},
    {path: 'about', component: AboutComponent, title: "About"},
    {path: 'service', component: ServiceComponent, title: "Service"},
    {path: 'destination', component: DestinationComponent, title: "Destination"},
    {path: 'contact', component: ContactComponent, title: "Contact"},
    {path: '**', redirectTo: '/'},
];
