import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsHome from './components/NewsHome';
import NewsDetail from './components/NewsDetail';
import Header from './components/Header';
import MultiTool from './components/MultiTool';
import { ToastProvider } from './context/ToastContext';
import Toast from './ui/Toast';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ToastProvider>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <MultiTool onSwitchThemeClick={() => {}} />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NewsHome />} />
            <Route path=":id" element={<NewsDetail />} />
            <Route path="/add" element={<NewsDetail />} />
            {/* // TODO: Add a 404 page */}
            {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
          </Routes>
        </BrowserRouter>
        <Toast />
      </div>
    </ToastProvider>
  </StrictMode>
);
