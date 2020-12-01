import React from 'react';
import './main.css';
import api from '../../services/api';
import {Link} from 'react-router-dom';
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products:[],
            queryState:{            
                total:null,
                limit: null,
                page:null,
                pages: null,
            }

            
        }
    }
    componentDidMount(){
        this.loadProducts();
    }
    loadProducts = async (pagina = 1)=>{
        const response = await api.get(`/products?page=${pagina}`);     
        this.setState({products: response.data.docs});
        const {total, limit,page, pages} = response.data;
        this.setState({queryState:{total,limit,page,pages}});
        
    }
    prevPage = () =>{
        if(this.state.queryState.page === 1 ){
            return
        }
        else{
            const pageNumber =  parseInt(this.state.queryState.page)-1;
            return this.loadProducts(pageNumber);
        }
        
    }
    nextPage = () =>{
        if(this.state.queryState.page == this.state.queryState.pages){return}
        else{
            const pageNumber = parseInt(this.state.queryState.page) + 1 ;
            return this.loadProducts(pageNumber);
        }
      
    }

    render(){
        return(
            <div className='listProducts'>
                {this.state.products.map(product =>{
                    return (<article key={product._id}>
                        <h2 >{product.title}</h2>
                        <p >{product.description}</p>
                        <Link to={`/product/${product._id}`}>Explorar</Link>
                        </article>)
                })}
                <div className='btnPage'>
                <button disabled={this.state.queryState.page == 1}onClick={this.prevPage}>Anterior</button>
                <button disabled={this.state.queryState.page == this.state.queryState.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        );
    }
}
export default Main;