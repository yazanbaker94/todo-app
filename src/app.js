import ListContext from './context/list';
import ToDo from './components/todo.js';
import LoginProvider from './context/auth';
import Login from './components/Login';
import Auth from './components/Auth';

export default function App(){
  
    return (
      <LoginProvider>
    <ListContext>
    <Login/>
    <Auth capability="delete">
    <ToDo />
            </Auth>
      
    </ListContext>
    </LoginProvider>
    );
  
}



