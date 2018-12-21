import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TicketEventComponent } from './ticket-event/ticket-event.component';
import { TeApiService } from './te-api.service';
import { HttpClientModule } from '@angular/common/http';
import { NamecutPipe } from './namecut.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule,MatFormFieldModule, MatAutocompleteModule, MatIconModule, MatGridListModule} from '@angular/material';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule} from '@agm/core';
import {RoundProgressModule} from 'angular5-svg-round-progressbar';
@NgModule({
  declarations: [
    AppComponent,
    TicketEventComponent,
    NamecutPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDTsY7Kesp9DHySpgaiyrVKjX0reVqI_A'
    }),
    MatGridListModule,
    RoundProgressModule
  ],
  providers: [TeApiService,NgbActiveModal],
  bootstrap: [AppComponent]
})

export class AppModule { }
