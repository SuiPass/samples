type ApprovalDto = {
  id: string;
  provider: string;
  level: number;
  evidence: string;
  issuedDate: number;
  score: number;
};

export type UserDetailDto = {
  address: string;
  approvals: ApprovalDto[];
  totalScore: number;
  isValid: boolean;
};

export type Level = {
  desc: string;
  level: number;
};

export type ProviderEntity = {
  id: string;
  name: string;
  desc: string;
  logoUrl: string;
  levels: Level[];
  submitFee: string;
  updateFee: string;
  balance: number;
  maxLevel: number;
  maxScore: number;
  disabled: boolean;
};

export type EnterpriseDetailDto = {
  name: string;
  metadata: string;
  providers: { [key: string]: ProviderEntity }; // Any
  threshold: number;
};
