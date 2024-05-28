import { Helmet, HelmetProvider } from "react-helmet-async";
import { useRoutes } from "react-router-dom";

import { SidebarProvider } from "./components/sidebar/contexts/SidebarContext";
import routes from "./routes";

const App = () => {
  const content = useRoutes(routes);

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate={"%s | " + process.env.REACT_APP_WEBSITE_NAME}
        defaultTitle={process.env.REACT_APP_WEBSITE_NAME}
      />

      <SidebarProvider>{content}</SidebarProvider>


    </HelmetProvider>
  );
};

export default App;
