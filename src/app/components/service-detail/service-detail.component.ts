import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular'
import { createEventId } from '../../event-utils';
import { ServiceListService } from 'src/app/services/service-list.service';
@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
  serviced!: any;
  constructor(private service: ServiceListService) { }

  dates: Array<string> = [];

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    editable: true,
    selectable: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
  }

  ngOnInit(): void {
    this.service.getserviceData(localStorage.getItem("serviceId")).subscribe((result)=>{
      this.serviced = result;
      console.log(result)
      console.log(this.serviced)
    })
    
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
    let convertDate = calendarApi.getDate()
    this.dates.push(JSON.stringify(convertDate));
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  // loadServiceData(){
    
  // }

}
