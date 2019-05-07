import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BhShopComponent } from './bh-shop/bh-shop.component';
import { ItemDataService } from './item-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BhShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ItemDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
