import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'

import {
  Account,
  Bookings,
  Cabins,
  Dashboard,
  Login,
  PageNotFound,
  Settings,
  Users
} from './pages'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabins" element={<Cabins />} />
          {/* <Route path="checkin/:bookingID" element={< />} /> */}
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
          <Route path="login" element={<Login />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
