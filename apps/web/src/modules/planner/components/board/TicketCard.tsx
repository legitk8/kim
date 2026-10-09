import React from "react";
import type { Priority, Ticket } from "../../types/ticket";
import { getInitials } from "../../utils/ticket";

interface TicketCardProps {
  ticket: Ticket;
}

const priorityColors: Record<Priority, string> = {
  low: "bg-green-100 text-green-600",
  medium: "bg-yellow-100 text-yellow-600",
  high: "bg-orange-100 text-orange-600",
  critical: "bg-red-100 text-red-600",
};

export const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  return (
    <div className="rounded-lg border border-slate-300 bg-white p-3 shadow-sm transition hover:border-slate-400 hover:shadow-md">
      {/* Header */}
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-slate-500">
          {ticket.id}
        </span>

        <span className={`text-xs font-medium rounded-full px-2 py-1 ${priorityColors[ticket.priority]}`}>
          {ticket.priority}
        </span>
      </div>

      {/* Body */}
      <div className="mt-2">
        <h3 className="text-sm font-medium leading-5 text-slate-800">
          {ticket.title}
        </h3>

        {ticket.labels.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {ticket.labels.map((label) => (
              <span
                key={label}
                className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-600"
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center gap-2 pt-3">
        {/* Initials */}
        {ticket.assignee ? (
          <span
            title={ticket.assignee.name}
            className="flex size-7 shrink-0 items-center justify-center rounded-full bg-stone-200 text-xs font-semibold text-stone-800"

          >
            {getInitials(ticket.assignee.name)}
          </span>
        ) : (
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-dashed border-slate-300 text-xs text-slate-400">
            ?
          </span>
        )}
        {/* Assignee Name */}
        <span className="truncate text-xs text-slate-500">
          {ticket.assignee?.name ?? "Unassigned"}
        </span>
      </div>

    </div>
  );
};