import Dashboard from "@/components/Dashboard.jsx";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-2">
        <h1 className="text-center text-4xl text-gray-700 font-bold mb-4">
          Basketball Planner App
        </h1>
        <Dashboard />
      </div>
    </div>
  );
}
