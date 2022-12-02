export interface IUserRes {
  acknowledged: boolean;
  insertedId: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  firebaseID: string;
  phoneNumber?: string;
  dateOfBirth?: Date | number;
  address?: string;
  zipcode?: string;
  city?: string;
  country?: string;
  userType?: string;
  serviceCategory?: string;
  serviceId?: any;
  workScheduleAvailable?: Array<Date>;
  workScheduleTaken?: Array<Date>;
  bankName?: string;
  bankAccount?: string;
  rating?: number;
  idProvider?: string;
  favoriteServices?: Array<any>;
  id?: any;
}

export interface IContractorProfile {
  avatar?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  userType: string;
  address: string;
  city: string;
  zipcode?: string;
  country?: string;
}