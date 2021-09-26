import { useContext } from 'react';
import { useHistory } from 'react-router';
import {UserContext} from '../../shared/provider/UserContext'
import RoutingPath from '../../routes/RoutingPath'
import classes from './HomeView.module.css'

export const HomeView = () => {
  const {authenticatedUser} = useContext(UserContext)
  const history = useHistory()

  const handleSubmit = ()=>{
    const newTab = window.open("https://github.com/Binett", "_blank")
    newTab.focus();
  }

  const displayIfLoggedinOrNot = () =>{
    return !authenticatedUser 
    ? ( <div className={classes.box2}>
    <div className={classes.box2__content}>
      <p>Sign in to browse tv shows, or visit my githubprofile</p>
        <div className={classes.btn__grp}>
          <button onClick={()=>history.push(RoutingPath.signInView)}>To sign in</button>
          <button onClick={()=>handleSubmit()} >My Github Profile</button>
        </div>
      </div>
  </div> ) 
  : ( <div className={classes.box2}>
    <div className={classes.box2__content}>
      <p>Welcome {authenticatedUser}! Be sure to check out my githubprofile</p>     
      <button onClick={()=>handleSubmit()} >My Github Profile</button>
    </div>
  </div> )
  }



  return (
    <div className={classes.container}>
        <div className={classes.box1}>
          <div className={classes.box1__content}>
            <h2>React assignement!</h2>
            <p>School Project made with react. Made to match the requirements, I might continue to implement more feautures in the future</p>
          </div>
        </div>
      {displayIfLoggedinOrNot()}
    </div>
  );
};
