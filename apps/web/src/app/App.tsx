import { BoardView } from "../modules/planner/components/board/BoardView";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-900">
        Kim Planner
      </h1>

      <div className="grid grid-cols-7 gap-4">
        <BoardView />
      </div>
    </main>
  );
}