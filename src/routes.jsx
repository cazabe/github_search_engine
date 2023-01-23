import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import UserProfileSearch from "./pages/userProfileSearch";
import RepositorySearch from "./pages/repositorySearch";
import './App.css';


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user-profile" element={<UserProfileSearch />} />
            <Route path="/user-repos" element={<RepositorySearch />} />
        </Routes>
    );
}

export default Router