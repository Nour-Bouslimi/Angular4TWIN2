import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Events } from '../../../models/event';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent {
  @Input() e:Events;

   //1-  preparer la notification like à envoyer aux parent (favoris)
@Output() notificationLike = new EventEmitter()
@Output() notificationBest = new EventEmitter()


//2- envoyer la notification suite a une clique sur le bouton like
sendDataToParent(e:Events){
  this.notificationLike.emit(e);
}


  isExpired(e:Events):boolean{
    const today = new Date();
    return e.date < today;
  }

}
