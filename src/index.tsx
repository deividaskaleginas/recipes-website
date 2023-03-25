import { CommentsProvider } from "contexts/commentsContext/commentsContext";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { DishesProvider } from "./contexts/dishesContext/dishesContext";
import { UserProvider } from "./contexts/userContext/userContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <DishesProvider>
          <CommentsProvider>
            <App />
          </CommentsProvider>
        </DishesProvider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>
);
