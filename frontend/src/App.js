import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import { Toaster } from "./components/ui/toaster";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showCreatePost, setShowCreatePost] = useState(false);

  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  useEffect(() => {
    if (currentPage === 'create') {
      setShowCreatePost(true);
      setCurrentPage('home'); // Reset to home after opening modal
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <Profile />;
      case 'search':
        return (
          <div className="max-w-lg mx-auto p-6">
            <div className="text-center">
              <h2 className="text-2xl font-light mb-4">Search</h2>
              <p className="text-gray-500">Search functionality coming soon!</p>
            </div>
          </div>
        );
      case 'messages':
        return (
          <div className="max-w-lg mx-auto p-6">
            <div className="text-center">
              <h2 className="text-2xl font-light mb-4">Direct Messages</h2>
              <p className="text-gray-500">Messaging feature coming soon!</p>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="max-w-lg mx-auto p-6">
            <div className="text-center">
              <h2 className="text-2xl font-light mb-4">Activity</h2>
              <p className="text-gray-500">No new notifications</p>
            </div>
          </div>
        );
      default:
        return <Feed />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="pt-16 md:pt-20">
        <div className="max-w-6xl mx-auto flex">
          {/* Main Content */}
          <div className="flex-1 px-4 py-6">
            {renderPage()}
          </div>
          
          {/* Sidebar - Only show on home page and desktop */}
          {currentPage === 'home' && <Sidebar />}
        </div>
      </main>

      {/* Create Post Modal */}
      <CreatePost 
        isOpen={showCreatePost} 
        onClose={() => setShowCreatePost(false)} 
      />

      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;