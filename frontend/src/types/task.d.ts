export interface Task {
    id?: number;
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    due_date: string;
  }
  