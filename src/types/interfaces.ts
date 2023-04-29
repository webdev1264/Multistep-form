export interface InitialPlanInterface {
  id: number;
  name: string;
  price: number;
}

export interface InitialAddonInterface {
  id: number;
  name: string;
  descr: string;
  price: number;
}

export interface InitialSelectionInterface {
  planId: number;
  addonIds: number[];
}

export interface InitialStepInterface {
  step: number;
}

export interface InitialInfoInterface {
  [key: string]: string;
}

