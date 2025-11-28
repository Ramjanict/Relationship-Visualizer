import GraphView from "./components/GraphView";
import TextEditor from "./components/TextEditor";

export default function App() {
  return (
    <div className="flex h-screen bg-white">
      <div className="w-1/3 h-full border-r border-gray-200 p-4">
        <TextEditor />
      </div>
      <div className="w-2/3 h-full flex items-center justify-center">
        <GraphView />
      </div>
    </div>
  );
}
