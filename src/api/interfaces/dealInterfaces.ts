export interface DealData {
  id: number;
  title: string;
  value: string;
  currency: string;
  person_id: number;
  user_id: number;
  pipeline_id: number;
  stage_id: number;
  status: string;
  expected_close_date: string;
  probability: number;
  visible_to: string;
}

export interface DealPayload {
  title: string | null;
  value: number;
  currency: string | null;
  person_id?: number;
  pipeline_id?: number;
  stage_id?: number;
  status?: string;
  expected_close_date?: string;
  probability?: number;
  visible_to?: string;
}
