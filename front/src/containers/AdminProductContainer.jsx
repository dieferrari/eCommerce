import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import AdminCreateProduct from '../components/AdminCreateProduct'
import AdminSingleProductContainer from './AdminSingleProductContainer'
import {postProducts} from '../redux/actions/products'


class AdminProductContainer extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }    
    handleSubmit(evt) {
        evt.preventDefault();
        const product={}
        const categories=[]
        for(var i=0;i<evt.target.length;i++){
            if(evt.target[i].type=='text'){
                product[evt.target[i].name]=evt.target[i].value
            }
            if(evt.target[i].type=='checkbox' && evt.target[i].checked==true){
                categories.push(evt.target[i].value)
            }
        }
        this.props.postProducts({product,categories})
      }
      
    render (){
        const {categories,match}=this.props
        const product={
            name:'',
            description:'',
            price:0,
            stock:0,
            imgURL:'',
            categories:[]
        }
        return (
         <div>
         <Switch>
             <Route exact
             path={`${match.path}`}
             render={()=><AdminCreateProduct categories={categories}
              product={product}
               handleSubmit={this.handleSubmit} />} />
         <Route 
             path={`${match.path}/:id`}
             component={AdminSingleProductContainer}/>
         </Switch>
     </div>
        )}
}
const mapStateToProps=(state,ownProps)=>({
    categories:state.category.category,
    match:ownProps.match
})
const mapDispatchToProps=(dispatch)=>({
    postProducts: (body) => dispatch(postProducts(body)),
})
export default connect(mapStateToProps,mapDispatchToProps)(AdminProductContainer)