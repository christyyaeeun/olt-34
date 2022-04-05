import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Journal from "./pages/Journal";
import Profile from "./pages/Profile"
import Themes from './pages/Themes';
import Tasks from "./pages/Tasks";
import "./styles/style.css";
import Layout from './components/Layout';
import LinkPage from './components/LinkPage';
import Missing from './pages/Missing';
import Ap from './pages/Ap'
import { ChakraProvider } from '@chakra-ui/react'
import { withAuthenticator } from '@aws-amplify/ui-react'


function App({ signOut, user }) {
  return (
    <ChakraProvider>

 <Routes>
        <Route path='/' element={<Layout />}>
        <Route path="/linkpage" element={<LinkPage />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/themes' element={<Themes />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/ap' element={<Ap />} />
        <Route path="*" element={<Missing />} />
      </Route>
      </Routes>
      </ChakraProvider>
  );
}


export default withAuthenticator(App)
