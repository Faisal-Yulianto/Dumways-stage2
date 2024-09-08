import { Routes, Route } from "react-router-dom";
import { ParentBase } from './components/base/ParentBase';
import { ProfilePageParent } from './components/ProfilePage/ProfilePageParent';
import { SearchParent } from './components/search/ParentSearch';
import FollowParent from './components/follow/FollowParent';
import { LoginForm } from "./components/auth/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ParentBase />} /> 
      <Route path="/follow" element={<FollowParent />} /> 
      <Route path="/search" element={<SearchParent />} /> 
      <Route path="/profile" element={<ProfilePageParent />} />
      <Route path="/login" element={<LoginForm />} /> 
    </Routes>
  );
}

export default App;

