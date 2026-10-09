
import type { Ticket } from "../../types/ticket";
import { BoardColumn } from "./BoardColumn";

const todoTickets: Ticket[] = [
    {
        id: "KIM-101",
        title: "Build the planner board layout",
        priority: "high",
        assignee: {
            id: 1,
            name: "Aira",
            email: "aira@example.com",
        },
        labels: ["Frontend", "UI"],
    },
    {
        id: "KIM-102",
        title: "Implement ticket filtering",
        priority: "medium",
        labels: ["Feature"],
    },
];

const inProgressTickets: Ticket[] = [
    {
        id: "KIM-103",
        title: "Create reusable ticket cards",
        priority: "critical",
        assignee: {
            id: 2,
            name: "Aira",
            email: "aira@example.com",
        },
        labels: ["Frontend"],
    },
];

const doneTickets: Ticket[] = [
    {
        id: "KIM-104",
        title: "Set up the React project",
        priority: "low",
        assignee: {
            id: 3,
            name: "Aira",
            email: "aira@example.com",
        },
        labels: ["Setup"],
    },
];

export const BoardView: React.FC = () => {
    return (
        <div className="flex gap-4">
            <BoardColumn title="To Do" tickets={todoTickets} />
            <BoardColumn title="In Progress" tickets={inProgressTickets} />
            <BoardColumn title="Done" tickets={doneTickets} />
        </div>
    );
};