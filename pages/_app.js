import "../styles/globals.css";
import Layout from "../components/Layout.js";
import { ChakraProvider } from "@chakra-ui/react";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'



function MyApp({ Component, pageProps }) {

    const queryClient = new QueryClient()
  useEffect(() => {
    if (localStorage.hasOwnProperty("clientId")) {
      localStorage.getItem("clientId");
    } else {
      localStorage.setItem("clientId", uuidv4());
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
