import axios, { AxiosInstance } from 'axios';
import {BASE_URL, API_TOKEN} from "./apiConstants";
import {UpdatePersonData} from "./hooks/useUpdateUser";
import {AUTH_TOKEN_KEY} from "../hooks/useLocalStorage";


export class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
      },
      params: {
        'apiToken': API_TOKEN,
      },
    });
  }

  async getUserId(userId: string) {
    const response = await this.axiosInstance.get(`/users/${userId}`, {
      headers: {
        Authorization: localStorage.getItem(AUTH_TOKEN_KEY)
      }
    });
    return response.data;
  }

  async getDealId(dealId: string) {
    const response = await this.axiosInstance.get(`/deals/${dealId}`, {
      headers: {
        Authorization: localStorage.getItem(AUTH_TOKEN_KEY)
      }
    });
    return response.data;
  }

  async uploadFilesForDeal(files: FormData, personId: string) {
    const response = await this.axiosInstance.post(`/upload/${personId}`, files, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem(AUTH_TOKEN_KEY)
      },
    });

    return response.data;
  }

  async updateUserById(userId: string, newPersonData: UpdatePersonData) {
    const response = await this.axiosInstance.put(`/user/${userId}`, newPersonData, {
      headers: {
        Authorization: localStorage.getItem(AUTH_TOKEN_KEY)
      }
    });
    return response.data;
  }

  async createDeal(newDealData: Record<string, any>): Promise<{ id: number }> {
    const response = await this.axiosInstance.post('/deals', newDealData);
    return response.data;
  }

  async login(data: { email: string, pinCode: string }) {
    const response = await this.axiosInstance.post('/auth/extra-login', data);
    return response.data;
  }

  async forgotPassword(data: { email: string }) {
    const response = await this.axiosInstance.post('/auth/forgot-password', data);
    return response.data;
  }
}
