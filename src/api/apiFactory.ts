import {ApiService} from "./apiService";

export class ApiFactory {
  static createApiService(): ApiService {
    return new ApiService();
  }
}
