export interface InitialPlan {
  id: number;
  name: string;
  price: number;
}

export interface InitialAddon {
  id: number;
  name: string;
  descr: string;
  price: number;
}

export interface InitialSelection {
  planId: number;
  addonIds: number[];
}

export interface InitialStep {
  step: number;
}

export interface InitialInfo {
  [key: string]: string;
}

