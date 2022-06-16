import { MainLayout, Profile} from "./Components";
import { Home, Posts, Error, PostSingle } from "./Components";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
   <MainLayout> 
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path="/posts/:postId" element={<PostSingle/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="*" element={<Error/>}/>


   </Routes>
   </MainLayout>
  
    </div>
  );
}

export default App;
