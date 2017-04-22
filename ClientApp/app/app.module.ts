import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/app/home.component';
import { AboutComponent } from './components/app/about.component';
import { LoginComponent } from './components/app/login.component';
import { PageNotFoundComponent } from './components/app/page-not-found.component';
import { AppRouting } from './components/app/app.routing';

import { ItemListComponent } from "./components/app/item-list.component";
import { ItemDetailEditComponent } from './components/app/item-detail-edit.component';
import { Item } from "./components/app/item";
import { ItemDetailViewComponent } from "./components/app/item-detail-view.component";
import { ItemService } from "./components/app/item.service"; 

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AboutComponent,
        AppComponent,
        HomeComponent,
        ItemListComponent,
        ItemDetailEditComponent,
        LoginComponent,
        ItemDetailViewComponent,
        PageNotFoundComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule,
        AppRouting
    ],
    // providers
    providers: [
        ItemService
    ],
})
export class AppModule {
}
