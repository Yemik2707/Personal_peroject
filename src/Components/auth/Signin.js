import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser} from '../../redux/authReducer.js';
import axios from 'axios';


const Signin = (props) => {

    const logout = () => {
        axios.delete("/auth/logout")
        .then( res => {
            props.setUser(null)
            props.history.push('/auth')
        }).catch( err => {
            console.log(err)
            alert("There was an issue logging out. Please try again.")
        })
    } 
     console.log(props)

    return (
        <>
            {props.auth.user ?<li  className='nav-links' onClick={logout}>Log out</li> 
            :
            <Link     
            to='/auth'
            className='nav-links'
            onClick={props.closeMobileMenu}>Sign In</Link> }               
        </>
    )
}
const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {setUser})(Signin));
    
