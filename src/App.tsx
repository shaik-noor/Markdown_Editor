import MyEditor from "./components/Editor";
import React from "react";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 py-4">
        <h1 className="max-w-3xl mx-auto text-center text-white text-4xl font-bold">
          Custom Markdown Editor
        </h1>
      </header>
      <main className="flex-grow">
        <MyEditor />
      </main>
      <footer className="bg-gray-800 py-4">
        <p className="text-center text-white">
          Built with ❤️ by Shaik Noor
        </p>
      </footer>
    </div>
  );
}

export default App;
