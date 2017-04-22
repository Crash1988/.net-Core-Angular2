import { Component } from '@angular/core';
import { ItemListComponent } from './item-list.component';
import { Item } from './item';



@Component({
    selector: "home",
    template: `
        <h2>
            A non-comprehensive directory of open-source video games available on the web
        </h2>
        <div class="col-md-4">
            <item-list class="latest"></item-list>
        </div>
        <div class="col-md-4">
            <item-list class="most-viewed"></item-list>
        </div>
        <div class="col-md-4">
            <item-list class="random"></item-list>
        </div>
        `,
    styles: []
})
export class HomeComponent {
    title = "Welcome View";
}