import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import { I18nProvider } from "./i18n";
import { StoreProvider } from "./lib/store";
import { Layout } from "./routes/layout";
import { Storefront } from "./routes/storefront";
import { Products } from "./routes/products";
import { Product } from "./routes/product";
import { Cart } from "./routes/cart";
import { Showcase } from "./routes/showcase";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Storefront /> },
        { path: "/products", element: <Products /> },
        { path: "/product", element: <Product /> },
        { path: "/cart", element: <Cart /> },
        { path: "/components", element: <Showcase /> },
      ],
    },
  ],
  // Works at "/" in dev and under any subpath (e.g. /demos/verdant/) when built
  // with `vite build --base=/demos/verdant/`.
  { basename: import.meta.env.BASE_URL },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nProvider>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </I18nProvider>
  </React.StrictMode>,
);
