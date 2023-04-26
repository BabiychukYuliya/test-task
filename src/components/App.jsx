// import { Card } from "./Card/Card";
// import Tweets from "pages/Tweets";
import { Routes, Route } from "react-router-dom";

import Home from '../pages/HomePage';
import Tweets from 'pages/Tweets';
import Layout from "pages/Layout";

export const App = () => {
  return (
    <div>
      <Routes>
              <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Route>
      </Routes>
     {/* <Tweets/> */}
    </div>
  );
};
