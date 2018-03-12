import React from 'react';
import {Route,Link,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {editProducts,deleteProducts} from '../redux/actions/products'
import AdminCreateProduct from '../components/AdminCreateProduct'
import AdminDelete from '../components/AdminDelete'

class AdminSingleProductContainer extends React.Component{
    constructor(props){
        super(props),
        this.state={redirectToNewPage:false}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
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
        }//for
        this.props.editProducts(this.props.id,{product,categories})
      }//handlesubmit
      handleDeleteSubmit(evt) {
        evt.preventDefault();
        this.props.deleteProducts(this.props.id)
        this.setState({redirectToNewPage:true})

      }//handlesubmit
    render (){
        if (this.state.redirectToNewPage) {
            return (
            <Redirect to="/products"/>
            )
          }
        const {categories,match,product}=this.props
        return(
            <div>
                <Switch>
                    <Route path={`${match.path}/edit`} 
                    render={()=><AdminCreateProduct categories={categories}
                     product={product}
                      handleSubmit={this.handleSubmit} />}/>
                    <Route path={`${match.path}/delete`}
                     render={()=><AdminDelete 
                    register={product} linkTo='/products'
                    handleDeleteSubmit={this.handleDeleteSubmit}/>}/>
                </Switch>
            </div>
            
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return(
    {
        product:state.products.filter((prod)=>prod.id==ownProps.match.params.id)[0],
        categories:state.category.category,
        id:ownProps.match.params.id,
        match:ownProps.match
    }
)}
const mapDispatchToProps=(dispatch)=>({
    editProducts: (id,body) => dispatch(editProducts(id,body)),
    deleteProducts:(id)=>dispatch(deleteProducts(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(AdminSingleProductContainer)