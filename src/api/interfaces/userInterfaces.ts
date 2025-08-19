import {FilePayload} from "../../components/FileUploader";

export interface PersonIdResponse {
  id: number;
  firstName: string;
  clientNumber: number;
  lastName: string;
  fullName: string;
  gender: string;
  email: string;
  files: FilePayload[];
  birthday: string;
  nationality: string;
  birthplace: string;
  addressLine1: string;
  addressLine2: string;
}
