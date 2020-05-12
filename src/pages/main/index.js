import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './style.css'

export default class Main extends Component {
    
    state = {
        products: [],
        productsInfo: {},
        page: 1,
        loading: 'carregando...',

    };
    
    componentDidMount(){
        this.loadProducts();
                   
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${ page }`);
        const { docs, ...productsInfo } = response.data;
        this.setState( { products: docs, productsInfo, page, loading: '' } );
    }

    prevPage = () => {
        const { page, productsInfo } = this.state;
        if(page === 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }
    
    nextPage = () => {
        const { page, productsInfo } = this.state;
        if(page === productsInfo.page) return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }


    render(){
        const { products, page, productsInfo, loading } = this.state;
        return(
            <div className="products-list" >
                <div>{ loading }</div>
                { 
                    products.map( product => (
                        <article key={ product._id } >
                            <strong>{ product.title }</strong>
                            <p>{ product.description }</p>
                            <Link to={ `/products/${product._id}` }>Acessar</Link>
                        </article>
                    ))
                }
                <div className="actions">
                    <button disabled={ page === 1 } onClick={ this.prevPage } >Anterior</button>
                    <button disabled={ page === productsInfo.pages } onClick={ this.nextPage } >Próxima</button>
                </div>
            </div>
        );
    }
    
}