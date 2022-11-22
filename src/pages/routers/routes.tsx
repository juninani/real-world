import { Routes, Route } from "react-router-dom";
import Pages from "./pages";

function RoutesFunction() {
  const renderRoutes = () => {
    return (
      <>
        <Routes>
          {Pages.map(({ path, component: Component }) => {
            return <Route key={path} path={path} element={<Component />} />;
          })}
        </Routes>
      </>
    );
  };

  return (
    <>
      <div>{renderRoutes()}</div>
    </>
  );
}
export default RoutesFunction;
