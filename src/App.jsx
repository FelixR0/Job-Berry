import { useState } from "react";
import JobBoard from "./components/JobBoard"
import Navbar from "./components/Navbar"

export const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <JobBoard category={category}/>
    </div>
  )
}

export default App
