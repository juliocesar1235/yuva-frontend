export interface IAllcoations {
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

export interface IAllocation {
  _id?: string,
  contractorId: string,
  serviceId: string,
  serviceName: string,
  confirmedServiceDate: Date | null | undefined,
  completedServiceTotalTime: number,
  serviceAddress: string,
  serviceStatus: string,
  cost: number
}