// Connect people who want to code together. Don't have idea or motivation or social skills
// Home Sign up Login page and authentication
// Profile page including: Pic, Name, Age, Gender, Skills/Languages/Frameworks, bio, Settings
// Dashboard with search bar and options to select, match, etc and send requests.
// Collaboration tab including the individuals you are paired and chat
// Help and support
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/Onboarding'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Landing/>}/>
        <Route path={"/dashboard"} element={<Dashboard/>}/>
        <Route path={"/onboarding"} element={<Onboarding/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App