import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import FilterPage from 'pages/FilterPage/FilterPage';
import  AddContactPage  from 'pages/AddContactPage/AddContactPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AddContactPage />} />
        <Route path="filter" element={<FilterPage />} />
      </Route>
    </Routes>
  );
};


