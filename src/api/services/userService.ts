import { ApiService } from '../apiService';
import {FormData as StepFormData} from '../../types/FormData';
import {PersonIdResponse} from '../interfaces/userInterfaces';
import {UpdatePersonData} from "../hooks/useUpdateUser";

export class UserService {
  private apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  async createDealForPerson(dealPayload: StepFormData) {
    return this.apiService.createDeal(dealPayload);
  }

  async getUserId(userId: string): Promise<PersonIdResponse> {
    return this.apiService.getUserId(userId);
  }

  async getDealId(dealId: string) {
    return this.apiService.getDealId(dealId);
  }

  async updateUserById(userId: string, personData: UpdatePersonData): Promise<PersonIdResponse> {
    return this.apiService.updateUserById(userId, personData);
  }

  async createDealWithPerson(
    dealPayload: StepFormData,
  ) {
    return this.createDealForPerson({ ...dealPayload });
  }

  async uploadFilesForDeal(
    files: FormData,
    personId: string
  ) {
    return this.apiService.uploadFilesForDeal(files, personId);
  }
}
