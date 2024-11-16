export interface Employee {
  id: string;
  name: string;
}

export interface Manager extends Employee {
  totalEmployee: number;
}

export interface VP extends Manager {
  totalManager: number;
}
