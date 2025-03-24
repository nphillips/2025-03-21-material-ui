import React, { useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
} from "@mui/material";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";

import "./App.css";
import DashboardPage from "./components/DashboardPage";
import FaqPage from "./components/FaqPage";
import NavComponent from "./components/Nav";

function App() {
  const [mode, setMode] = useState("light");
  const [isNavOpen, setIsNavOpen] = useState(() => {
    const stored = localStorage.getItem("isNavOpen");
    return stored === null ? true : stored === "true";
  });

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  useEffect(() => {
    localStorage.setItem("isNavOpen", isNavOpen);
  }, [isNavOpen]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  const modeToggleStyle = {
    position: "absolute",
    right: "1rem",
    top: "1rem",
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="wrapper">
        <div
          className={`nav-area ${isNavOpen ? "open" : "closed"}`}
          style={{
            backgroundColor:
              theme.palette.mode === "dark" ? "#30004D" : "var(--purple)",
            borderRight:
              theme.palette.mode === "dark"
                ? "1px solid #666"
                : "1px solid #ccc",
          }}
        >
          <NavComponent toggleNav={toggleNav} />
        </div>
        <div className="main-area" id="main-section">
          <IconButton
            onClick={toggleColorMode}
            color="inherit"
            style={modeToggleStyle}
          >
            {mode === "dark" ? <DarkModeOutlined /> : <LightModeOutlined />}
          </IconButton>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
