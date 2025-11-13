import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FavorisComponent } from './favoris/favoris.component';
import { CardEventComponent } from './card-event/card-event.component';
import { BestEventComponent } from './best-event/best-event.component';
import { OrderByLikesPipe } from '../../shared/pipes/order-by-likes.pipe';
import { ChangeBackgroundDirectiveDirective } from '../../shared/directives/change-background-directive.directive';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ParticipationFormComponent } from './components/participation-form/participation-form.component';


@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    EventDetailsComponent,
    FavorisComponent,
    CardEventComponent,
    BestEventComponent,
    OrderByLikesPipe,
    ChangeBackgroundDirectiveDirective,
    AddEventComponent,
    ParticipationFormComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class EventsModule { }
