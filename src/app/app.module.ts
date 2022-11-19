import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './abf/components/notfound/notfound.component';
import { ProductService } from './abf/service/product.service';
import { CountryService } from './abf/service/country.service';
import { CustomerService } from './abf/service/customer.service';
import { EventService } from './abf/service/event.service';
import { IconService } from './abf/service/icon.service';
import { NodeService } from './abf/service/node.service';
import { PhotoService } from './abf/service/photo.service';



@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
