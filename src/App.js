import { Action,Brand,Features,Article,Navbar } from "./Component/inde";
import { Footer,Possibilty,Project,Post,Header,Fixtures } from "./Container/indexes";
import './App.css'

function App() {
  return (
    <div className="App">
        <div className="grad">
           <Navbar/>
           <Header/>
           <Brand/>
            <Project/>
            <Fixtures />
            <Possibilty />
            <Action/>
            <Post/>
            <Footer/> 
        </div>
    </div>
  );
}

export default App;
