export type Priority = "low" | "medium" | "high" | "critical";

export interface Assignee {
    id: number;
    name: string;
    email: string;
}

export interface Ticket {
    id: string;
    title: string;
    priority: Priority;
    assignee?: Assignee;
    labels: string[];
}