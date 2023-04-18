import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dramatic } from './views/dramatic'
import './App.css'
import Layout from "./views/layout";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dramatic />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


/*
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="editor" element={<Editor />} />
            <Route path="/star/:id" element={<Details />} />
            <Route path="*" element={<NoPage />} />
*/