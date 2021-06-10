import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser} from '../redux/authReducer.js';
import axios from 'axios';


const Header = (props) => {

    const logout = () => {
        axios.delete("/auth/logout")
        .then( res => {
            props.setUser(null)
            props.history.push('/auth')
        }).catch( err => {
            console.log(err)
            alert("There was an issue logging out. Please try again.")
        })
         
      };

    return (
        <div>
         <header className = 'header'>
            {props.auth.user ?<li className = 'logout' onClick={logout}>Log out</li> 
            :
            <Link to='/auth'>Sign In</Link> }               
         </header>
        </div>
    )
}
const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {setUser})(Header));
    
