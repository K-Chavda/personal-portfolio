import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout/MainLayout";

// Pages
import { AboutPage, ContactPage, HomePage, NotFoundPage, ProjectsPage, StacksPage, ProjectDetailsPage } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project-details" element={<ProjectDetailsPage />} />
            <Route path="/stacks" element={<StacksPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
