import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsHome from './components/NewsHome';
import NewsDetail from './components/NewsDetail';
import Header from './ui/Header';
import MultiTool from './ui/MultiTool';
import { ToastProvider } from './context/ToastContext';
import Toast from './ui/Toast';
import NotFound from './components/NotFound';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <ToastProvider>
      <div className="dark:bg-gray-800 h-full overflow-auto">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 dark:bg-gray-800">
          <BrowserRouter>
            <Header />
            <MultiTool />
            <Routes>
              <Route path="/" element={<NewsHome />} />
              <Route path="/new/:id" element={<NewsDetail />} />
              <Route path="/add" element={<NewsDetail />} />
              <Route
                path="*"
                element={
                  <NotFound />
                }
              />
            </Routes>
          </BrowserRouter>
          <Toast />
        </div>
      </div>
    </ToastProvider>
  </StrictMode>
);
