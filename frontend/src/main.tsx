import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsHome from './components/NewsHome';
import NewsDetail from './components/NewsDetail';
import Header from './components/Header';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsHome />} />
          <Route path=":id" element={<NewsDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>
);
