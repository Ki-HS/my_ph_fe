import React, { Component } from "react";
import { Navigate, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/views/User/MainPage/MainLandingPage";
import LoginLandingPage from "./components/views/User/LoginPage/LoginLandingPage";
import RegisterLandingPage from "./components/views/User/RegisterPage/RegisterLandingPage";
import MyPage from "./components/views/User/MyPage/MyPage";
import MedicineTestPage from "./components/views/Medicine/Test/TestPage.js";
import PrescriptionPage from "./components/views/Prescription/Test/getPSPT_Page.js";
import CPTestPage from "./components/views/CP/Test/TestPage";

class App extends Component {
    render() {
        return (
            <Router basename="/app">
                <div>
                    <Routes>
                        {/* User Page */}
                        <Route exact path="/" element={<LandingPage />} />
                        <Route exact path="/user/login" element={<LoginLandingPage />} />
                        <Route exact path="/user/register" element={<RegisterLandingPage />} />
                        <Route exact path="/user/myPage" element={<MyPage />} />

                        <Route exact path="/prescription/" element={<PrescriptionPage />} />

                        <Route exact path="/medicine/test" element={<MedicineTestPage />} />
                        <Route exact path="/cp/test" element={<CPTestPage />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
