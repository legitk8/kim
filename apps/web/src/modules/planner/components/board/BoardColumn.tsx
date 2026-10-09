import type { Ticket } from "../../types/ticket";
import { TicketCard } from "./TicketCard";

interface BoardColumnProps {
    title: string;
    tickets: Ticket[];
}

export const BoardColumn: React.FC<BoardColumnProps> = ({
    title,
    tickets,
}) => {
    return (
        <section className="flex w-72 shrink-0 flex-col rounded-lg bg-slate-200/60 p-3">
            {/* Column header */}
            <div className="ml-1 mb-3 flex">
                <h2 className="text-sm font-semibold text-slate-700">
                    {title}
                </h2>

                <span className="ml-1.5 bg-stone-200 rounded-full px-2 py-0.5 text-xs font-medium text-stone-800">
                    {tickets.length}
                </span>
            </div>

            {/* Ticket list */}
            <div className="flex flex-col gap-3">
                {tickets.map((ticket) => (
                    <TicketCard key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </section>
    );
};