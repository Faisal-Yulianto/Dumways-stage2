import { Routes, Route } from "react-router-dom";
import { ParentBase } from './components/base/ParentBase';
import { ProfilePageParent } from './components/ProfilePage/ProfilePageParent';
import { SearchParent } from './components/search/ParentSearch';
import FollowParent from './components/follow/FollowParent';
import { LoginForm } from "./components/auth/login";
import { RegisterForm} from "./components/auth/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ParentBase />} /> 
      <Route path="/follow" element={<FollowParent />} /> 
      <Route path="/search" element={<SearchParent />} /> 
      <Route path="/profile" element={<ProfilePageParent />} />
      <Route path="/login" element={<LoginForm />} /> 
      <Route path="/register" element={<RegisterForm />} /> 
    </Routes>
  );
}

export default App;

