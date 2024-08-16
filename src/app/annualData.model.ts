export interface annualData {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
}

export interface UserInput {
  initialInvestment: number,
  duration: number,
  expectedReturn: number,
  annualInvestment: number
}