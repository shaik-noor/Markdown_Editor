import React from "react";
import MyEditor from "./components/Editor";

function App() {
  return (
    <div className="App min-h-screen flex flex-col justify-between">
      <header className="py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Custom Markdown Editor
        </h1>
        <p className="text-center text-gray-500 mt-2">
          A simple, customizable markdown editor with chart support.
        </p>
      </header>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4">
          <MyEditor />
        </div>
      </main>
      <footer className="py-6 text-center bg-gray-800 text-white">
        <p className="text-sm">
          Built with <span className="text-red-500">❤️</span> by Shaik Noor
        </p>
      </footer>
    </div>
  );
}

export default App;
