import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./ui/AppLayout";
import Main from "./ui/Main";
import Ticket from "./pages/Ticket";
import Users from "./pages/Users";
import Settings from "./pages/Setting";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import ProtectedRoute from "./ui/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Main />}>
            <Route index element={<Ticket />} />
            <Route path="tickets" element={<Ticket />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
