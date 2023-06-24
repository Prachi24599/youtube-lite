import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";

const App = () => {
  return (
    <AppContext>
      <div className="text-3xl bg-red-500">App</div>
    </AppContext>
  );
};

export default App;
