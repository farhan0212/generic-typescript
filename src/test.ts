export interface Employee {
  id: number;
  name: string;
}

export interface Manager extends Employee {
  totalEmployee: number;
}

export interface VP extends Manager {
  totalManager: number;
}
