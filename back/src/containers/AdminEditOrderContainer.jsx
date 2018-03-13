import React from 'react';
import {Route,Link,Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {editOrders} from '../redux/actions/orders'
import AdminEditOrder from '../components/AdminEditOrder'
//mirar INDEX.CSS
class AdminEditOrderContainer extends React.Component{
    constructor(props){
        super(props),
        this.state={edited:false}
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        for(var i=0;i<e.target.length;i++){
            if(e.target[i].checked){
                this.props.editOrders(this.props.id,{status:e.target[i].value}) 
            }
        }
        this.setState({edited:true})
        
    }
    render(){
        const orden=this.props.orden[0]
        if(this.state.edited){
            return(<Redirect to="/admin/orders"/>)
        }
        return (
            <div>
                <AdminEditOrder handleSubmit={this.handleSubmit} orden={orden}/>
            </div>
            
        )
    }

}
const mapStateToProps=(state,ownProps)=>({
    orden:state.orders.filter(orden=>orden.id==ownProps.match.params.id),
    id:ownProps.match.params.id
})
const mapDispatchToProps=(dispatch)=>({
    editOrders:(id,newStatus)=>dispatch(editOrders(id,newStatus))
})

export default connect(mapStateToProps,mapDispatchToProps)(AdminEditOrderContainer)