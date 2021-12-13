import classes from './Header.module.css';
import {AuthAction} from '../store/authstore';
import {useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const dispath = useDispatch()
  const LogoutHandler = () => {
    dispath(AuthAction.logout())
  }
  const isauth=useSelector((state)=>state.auth.isauthenticated)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isauth && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
           <button onClick={LogoutHandler}>Logout</button>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;
