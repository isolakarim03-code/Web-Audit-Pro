export interface LeadFormData {
  fullName: string;
  email: string;
  websiteUrl: string;
  businessType: string;
}

export interface AssessmentResponse {
  summary: string;
  tips: string[];
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}