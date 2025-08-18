import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  useBreakpointValue
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import NewLanding from '../src/Components/NewLanding.tsx';
import Navbar from './Components/Navbar.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const App = () => (
  <>
    <Router>
      <Frame>
        <Routes>
          <Route path="/" element={<Navigate replace to={"/Cover"} />} />
          <Route path="/Cover" element={<NewLanding />} />
          <Route path="*" element={<NewLanding />} />
        </Routes>
      </Frame>
    </Router>
  </>
);

type FrameProps = {
  children: any;
};

function Frame({ children }: FrameProps) {
  const screenSize = useBreakpointValue(
    {
      base: "container.xl",
      xl: "container.xl",
      "2xl": "container.2xl ",
    },
    {
      fallback: "xl",
    }
  );
  const layoutSize = useBreakpointValue(
    {
      base: "0rem",
      xl: "0rem",
      "2xl": "0rem",
    },
    {
      fallback: "2rem",
    }
  );

  return (
    <>
      <Box bg="#F9F6EE" position="relative" overflow="hidden" display={"block"} minH="100vh">
        <Navbar screen={screenSize} layoutSize={layoutSize} />
        <Container
          maxW={screenSize}
          mb={["0rem", "0rem", "0rem", "0rem"]}
          px={["0rem", "0rem", "0rem", "0rem"]}
        >
          <Box minH={"lg"} mx={layoutSize}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {children}
            </LocalizationProvider>
          </Box>
        </Container>
      </Box>
      {/* <Footbar screen={screenSize} layoutSize={layoutSize} /> */}
    </>
  );
}

export default App;