import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Characters from "./components/Characters";
const queryClient = new QueryClient();
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleCharacter from "./components/SingleCharacter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Characters />,
  },
  { path: "/characters/:id", element: <SingleCharacter /> },
]);
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
