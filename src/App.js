import { Candidates } from './pages';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import { CandidatesReports } from './pages/candidates_reports';
import { AdminPanel } from './pages/admin_panel';
import { SubmitReportPage } from './pages/submit_report_page';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ marginBottom: 70 }}>
        <Routes>
          <Route path="/" exact element={<Candidates />} />
          <Route
            path="/CandidatesReports/:id"
            element={<CandidatesReports />}
          />
          <Route path="/AdminPanel" element={<AdminPanel />} />
          <Route path="/submitReportPage" element={<SubmitReportPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
