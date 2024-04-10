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
};
