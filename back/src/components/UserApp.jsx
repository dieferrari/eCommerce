import React from 'react';
import {Route,Redirect,Switch, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import SingleUserContainer from '../containers/SingleUserContainer2';
import { Userlogged } from '../redux/actions/user'
class UserApp extends React.Component{

componentDidMount(){
                                   
}

   render (){
       /*if(!this.props.user){
           console.log('entro')
        return <Redirect to={`/login`} />
       }*/
       console.log('Entro')
       return (
        <div>
        <Switch>
            <Route 
            path={`${this.props.match.path}`}
            component={SingleUserContainer}
        />
        </Switch>
    </div>
       )
   }

}//fin de admin app
const mapStateToProps = (state,ownProps) => ({
    match:ownProps.match,
    user:state.user.user
})

const mapDispatchToProps = dispatch => ({
    Userlogged:()=>dispatch(Userlogged()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserApp)

