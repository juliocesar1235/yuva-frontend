export interface IAllcoations{
  _id: string;
  contractorId: string;
  serviceId: string;
  serviceName: string;
  confirmedServiceDate: Date;
  completedServiceTotalTime: number;
  serviceStatus: string;
  cost: number;
  rejectedEmployees: Array<string>
}