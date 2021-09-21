import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store, { getFavoritesFromLocalStorage } from "../store";
import { hydrate } from "../store/favorites";

const favorites = getFavoritesFromLocalStorage();
if (favorites) {
  store.dispatch(hydrate(favorites));
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </Provider>
  );
}

export default MyApp;
