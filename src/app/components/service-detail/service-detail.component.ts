import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular'
import { createEventId } from '../../event-utils';
import { ServiceListService } from 'src/app/services/service-list.service';
import { AllocationService } from 'src/app/services/allocation.service';
// import { IAllcoations } from '../../interfaces/allocations';
import { GoogleLoginService } from 'src/app/services/google-login.service';

interface IAllocation{
  contractorId: string,
  serviceId: string,
  serviceName: string,
  confirmedServiceDate: Date,
  completedServiceTotalTime: number,
  serviceAddress: string,
  serviceStatus: string,
  cost: number
// public rating?: number,
// public favorite?: boolean,
// public tentativeEmployeeId?: ObjectId,
// public confirmedEmployeeId?: ObjectId,
// public rejectedEmployees?: Array<ObjectId>,
// public _id?: ObjectId
}

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
  serviced!: any;
  url = 'http://localhost:3000/yuva-api/allocations';
  constructor(private service: ServiceListService, private allocation: AllocationService, private userServ: GoogleLoginService) { }
  dates: Array<string> = [];
  userGet!: any;
  dateT: Array<Date> = [];
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    editable: true,
    selectable: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
  }
  startT!: any;
  endT!: any;
  ngOnInit(): void {
    this.service.getserviceData(localStorage.getItem("serviceId")).subscribe((result)=>{
      this.serviced = result;
      // console.log(result)
      console.log(this.serviced)

      this.userServ.getUser(localStorage.getItem("yuva")!).subscribe((result)=>{
        this.userGet = result;
        // console.log(result)
        // console.log("THIS USERGET", this.userGet)
      })
    })
    // console.log("HEREEEE")
    
    
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
        allDay: selectInfo.allDay,
      });
    }
    let convertDate = calendarApi.getDate()
    this.dateT.push(convertDate);
    this.dates.push(JSON.stringify(convertDate));
    console.log(this.dates[0])
    this.startT = selectInfo.startStr
    this.endT = selectInfo.endStr
    // console.log("START TIME", this.endT)
    
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  // loadServiceData(){
    
  // }

  allocateUsers(){
    // this.http.post(url, )
    // console.log("THIS SERRRRRRRR",this.serviced)
    // console.log("THIS USERGET", this.userGet)

    let nData:IAllocation = {
      contractorId: this.userGet._id,
      serviceId: this.serviced._id,
      serviceName: this.serviced.name,
      confirmedServiceDate: this.dateT[0],
      completedServiceTotalTime: 0,
      serviceAddress: this.userGet.address + " " + " " + this.userGet.city,
      serviceStatus: "searchingEmployee",
      cost: this.serviced.cost
    }

    console.log("DATA A MANDAR", nData)
    this.allocation.createAllocation(nData).subscribe((res) => {
      console.log("Allocation", res)
    })
    
  
  }
// public contractorId: ObjectId,
// public serviceId: ObjectId,
// public serviceName: string,
// public confirmedServiceDate: Date,
// public completedServiceTotalTime: number,
// public serviceAddress: string,
// public serviceStatus: string,
// public cost: number,
// public rating?: number,
// public favorite?: boolean,
// public tentativeEmployeeId?: ObjectId,
// public confirmedEmployeeId?: ObjectId,
// public rejectedEmployees?: Array<ObjectId>,
// public _id?: ObjectId
}
