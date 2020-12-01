import React from 'react';
import api from '../../services/api';

class Product extends React.Component{
    constructor(){
        super();
        this.state = {
            product: {}
        }
    }
    async componentDidMount(){
        const {id} = this.props.match.params;
        const response = await api.get(`/products/${id}`);
        this.setState( {product: response.data});
    }
    render(){
        const {product} = this.state;
        return (<div className='prodInfo'><h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>URL: <a href={product.url}>{product.url}</a></p></div>
        );
    }
}

export default Product;