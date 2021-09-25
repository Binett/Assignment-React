import { useContext } from 'react';
import { useHistory } from 'react-router';
import RoutingPath from '../../routes/RoutingPath'
import {UserContext} from '../../shared/provider/UserContext'
import classes from './HomeView.module.css'

export const HomeView = () => {
  const {authenticatedUser} = useContext(UserContext)
  const history = useHistory()

  return (
    <div className={classes.container}>
        <div className={classes.box1}>
          <div className={classes.box1__content}>
            <h2>React assignement!</h2>
            <p>School Project made with react. </p>
          </div>
        </div>
      {!authenticatedUser && 
      <div className={classes.box2}>
        <div className={classes.box2__content}>
          <p>Sign in to browse tv shows</p>
          <button onClick={()=>history.push(RoutingPath.signInView)}>To sign in</button>
        </div>
      </div>}
    </div>
  );
};
