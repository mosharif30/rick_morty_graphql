import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SingleCharacter from "./containers/SingleCharacter/SingleCharacter.tsx";
import Characters from "./containers/Characters/Characters.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/characters" element={<Navigate to="/" />} />
          <Route path="/characters/:id" element={<SingleCharacter />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
