import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular'
import { createEventId } from '../../event-utils';
import { ServiceListService } from 'src/app/services/service-list.service';
import { AllocationService } from 'src/app/services/allocation.service';
// import { IAllcoations } from '../../interfaces/allocations';
import { GoogleLoginService } from 'src/app/services/google-login.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { IAllocation } from 'src/app/interfaces/allocations';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  serviced!: any;
  url = 'http://localhost:3000/yuva-api/allocations';
  dates: Array<string> = [];
  userGet!: any;
  dateT: Array<Date | undefined | null> = [];
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    slotDuration: '02:00:00',
    editable: true,
    selectable: true,
    eventBackgroundColor: '#055CF5',
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
  }
  startT!: any;
  endT!: any;
  isServiceLoaded: boolean = false;
  createdEvent!: EventApi | null;

  constructor(
    private service: ServiceListService,
    private allocation: AllocationService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.service.getserviceData(localStorage.getItem("serviceId")).subscribe((result) => {
      this.serviced = result;
      this.isServiceLoaded = true;
      console.log(this.serviced)
    });
    this.getUserData();
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      this.createdEvent = calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
      let convertDate = this.createdEvent?.start;
      this.dateT.push(convertDate);
      this.dates.push(JSON.stringify(convertDate));
      this.startT = selectInfo.startStr
      this.endT = selectInfo.endStr
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  allocateUsers() {
    let nData: IAllocation = {
      contractorId: this.userGet._id,
      serviceId: this.serviced._id,
      serviceName: this.serviced.name,
      confirmedServiceDate: this.dateT[0],
      completedServiceTotalTime: 2,
      serviceAddress: this.userGet.address + " " + " " + this.userGet.city,
      serviceStatus: "searchingEmployee",
      cost: this.serviced.cost
    }
    this.allocation.createAllocation(nData).subscribe((result: any) => {
      console.log("Allocation", result)
      this.router.navigate(["/allocation/" + result.insertedId]);
    })
  }

  getUserData() {
    this.userService.getUser(localStorage.getItem("yuva")).subscribe((result) => {
      this.userGet = result;
    });
  }
}
