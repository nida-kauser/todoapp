import React from 'react';
import Todo from './component/todo'
import Home from './component/home'
import Header from './component/header'
import { Route, Switch , BrowserRouter} from 'react-router-dom';

function App() {
  return (
    
   <BrowserRouter>
   <div>
     <Header/>
     <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/todo' component={Todo} />
        
     </Switch>
   </div>
 </BrowserRouter>
   
  );
}

export default App;
