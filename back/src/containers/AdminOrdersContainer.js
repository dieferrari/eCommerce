import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import AdminOrders from '../components/AdminOrders'
import AdminEditOrderContainer from './AdminEditOrderContainer'
//mirar INDEX.CSS
class AdminOrdersContainer extends React.Component{
    constructor(props){
        super(props),
        this.state={
            ordersStatus:'todos'
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({ordersStatus:e.target.value})
    }
    render(){
        const {match,orders}=this.props
        const{ordersStatus}=this.state
        const ordenesfiltradas=ordersStatus=='todos'?orders:(
            orders.filter(orden=>orden.status==ordersStatus))
        
        return (
            <div>
                <Switch>
                <Route exact
             path={`${match.path}`}
             render={()=><AdminOrders handleChange={this.handleChange} orders={ordenesfiltradas}/>} />
         <Route 
             path={`${match.path}/:id`}
         component={AdminEditOrderContainer}/>
                </Switch>
            </div>
            
        )
    }

}
const mapStateToProps=(state,ownProps)=>({
    orders:state.orders,
    match:ownProps.match
})
const mapDispatchToProps=(dispatch)=>({
    
})

export default connect(mapStateToProps,mapDispatchToProps)(AdminOrdersContainer)