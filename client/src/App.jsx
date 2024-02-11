import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// layout
import Layout from "./Layout";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import OurMenu from "./pages/OurMenu";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Food from "./pages/Food";
import BecomeOurPartner from "./pages/BecomeOurPartner";
import SignUp from "./components/SignUp";


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    // console.log('GQL: '),
    // console.log(client),
    <Router>
    <ApolloProvider client={client}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/our-menu" element={<OurMenu />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/food" element={<Food />} />
          <Route path="/become-our-partner" element={<BecomeOurPartner />} />

          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Layout>
      </ApolloProvider>
    </Router>
  );
};

export default App;
