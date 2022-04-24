import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { routes } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => {
          return (
            <Route
              key={route.url}
              path={route.url}
              element={route.component}
              index={route?.index}
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
