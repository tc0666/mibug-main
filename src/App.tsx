import Header from './components/Header';
import clsx from 'clsx';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import SubmissionConfirmation from './pages/SubmissionConfirmation';
import LendingPage from './pages/lendingPage/index';
import MultiStepForm from './pages/multiStepForm/index';
import CookieConsent from './components/CookieConsent';
import Autokredit from "./pages/subPages/Autokredit";
import Sofortkredit from "./pages/subPages/Sofortkredit";
import Umschuldung from "./pages/subPages/Umschuldung";
import NotFoundPage from './pages/NotFoundPage';
import PrivateCredit from "./pages/subPages/PrivateCredit";
import Credit from "./pages/subPages/Credit";
import ComplaintProcedure from "./pages/subPages/ComplaintProcedure";
import Contact from "./pages/subPages/Contact";
import FooterNavigation from "./components/FooterNavigation";
import React from "react";
import CustomerService from "./pages/subPages/CustomerService";
import PartnerProgramm from "./pages/subPages/PartnerProgramm";
import Job from "./pages/subPages/Job";
import CreditPartner from "./pages/subPages/CreditPartner";
import Ueber from "./pages/subPages/Ueber";
import Presse from "./pages/subPages/Presse";
import AGB from "./pages/subPages/AGB";
import Impressum from "./pages/subPages/Impressum";
import Datenschutz from "./pages/subPages/Datenschutz";
import { Box, Theme } from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import {FAQ} from "./pages/FAQ";
import Login from "./components/Login";
import { PrivateRoute } from './components/PrivateRoute';
import useLocalStorage, {AUTH_TOKEN_KEY} from "./hooks/useLocalStorage";
import ForgotPassword from "./components/ForgotPassword";


const classes = generateUtilityClasses("PrepareSection", [
  "root",
  "main",
]);
const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.main}`]: {
    paddingTop: "60px",
    [theme.breakpoints.down(900)]: {
      marginTop: "0",
    },
  },
});

const AdminShell: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Render without site Header/Footer for /admin
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ paddingTop: 0 }}>{children}</Box>
    </ThemeProvider>
  );
};

const PublicShell: React.FC = () => {
  const [authToken] = useLocalStorage(AUTH_TOKEN_KEY, '');
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root} sx={styles}>
        <Header />
        <main className={clsx({ [classes.main]: true })}>
          <Outlet />
        </main>
        <FooterNavigation />
        <CookieConsent/>
      </Box>
    </ThemeProvider>
  );
};

const App = () => {
  const AdminApp = React.lazy(() => import('./pages/admin/AdminApp'));

  return (
    <BrowserRouter>
      <Routes>
        {/* Admin, separate shell: no public header/footer */}
        <Route path="/admin" element={<AdminShell><React.Suspense fallback={null}><AdminApp /></React.Suspense></AdminShell>} />

        {/* Public routes under a shared layout */}
        <Route element={<PublicShell />}>
          <Route path="/" element={<LendingPage />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/antrag" element={<MultiStepForm />} />
          <Route path="/kredit" element={<Credit />} />
          <Route path="/kredit/sofortkredit" element={<Sofortkredit />} />
          <Route path="/autokredit" element={<Autokredit />} />
          <Route path="/privatkredit" element={<PrivateCredit />} />
          <Route path="/umschuldung" element={<Umschuldung />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/unsere-partner" element={<CreditPartner />} />
          <Route path="/partnerprogramm" element={<PartnerProgramm />} />
          <Route path="/hc/de" element={<CustomerService />} />
          <Route path="/dsa" element={<ComplaintProcedure />} />
          <Route path="/ueber" element={<Ueber />} />
          <Route path="/presse" element={<Presse />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/submission-confirmation" element={<SubmissionConfirmation />} />
          <Route element={<PrivateRoute isAuthenticated={Boolean(useLocalStorage(AUTH_TOKEN_KEY, '')[0])} />}>
            <Route path="/kundenkonto/:dealId" element={<MultiStepForm />} />
          </Route>
          <Route path="/faq" element={<FAQ />} />
          <Route path="/auth/signin" element={<Login />} />
          <Route path="/auth/password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
