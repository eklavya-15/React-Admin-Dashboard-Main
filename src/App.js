import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard"; 
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import KanbanBoard from "./scenes/kanban";
import TextEditor from "./scenes/text";
import {  TeamProvider } from "./scenes/team/context";

export default function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const handleClick = ()=>{
    setIsSidebar((prevSidebar) => !prevSidebar)
  }
  console.log(isSidebar);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <TeamProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} handleClick={handleClick}/>
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} isSidebar={isSidebar}/>
            <Routes>
              <Route path="/" element={<Dashboard isSidebar={isSidebar}/>} />
              <Route path="/team" element={<Team isSidebar={isSidebar}/>} />
              <Route path="/contacts" element={<Contacts isSidebar={isSidebar}/>} />
              <Route path="/invoices" element={<Invoices isSidebar={isSidebar}/>} />
              <Route path="/form" element={<Form isSidebar={isSidebar}/>} />
              <Route path="/bar" element={<Bar isSidebar={isSidebar}/>} />
              <Route path="/pie" element={<Pie isSidebar={isSidebar}/>} />
              <Route path="/line" element={<Line isSidebar={isSidebar}/>} />
              <Route path="/texteditor" element={<TextEditor isSidebar={isSidebar}/>} />
              <Route path="/calendar" element={<Calendar isSidebar={isSidebar}/>} />
              <Route path="/geography" element={<Geography isSidebar={isSidebar}/>} />
              <Route path="/kanban" element={<KanbanBoard isSidebar={isSidebar}/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
      </TeamProvider>
    </ColorModeContext.Provider>
  );
}