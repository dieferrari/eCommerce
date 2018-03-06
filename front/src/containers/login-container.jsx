// import React from 'react';
// import Login from '../components/login';
// import { loginUser } from '../redux/actions/user';
// import store from '../store';

// export default class LoginContainer extends React.Component{
//     constructor(){
//     super();
//         this.state = {}
//         this.handleSubmit=this.handleSubmit.bind(this)
//     }
//     handleSubmit(event) {
//         event.preventDefault()
//         store.dispatch(loginUser({
//             firstName:event.target[0].value,
//             lastName:event.target[1].value,
//             email:event.target[2].value,
//             password:event.target[3].value
//         }))
//     }
//     render () {
//         return (
//             <Login handleSubmit={this.handleSubmit}/>
//         )
//     }
// }