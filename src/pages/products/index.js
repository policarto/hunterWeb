import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

export default class Products extends Component {

    state = {
        product: {},
        loading: 'carregando...'
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`products/${id}`);
        const product = response.data;
        this.setState({ product, loading: '' });
    }

    render(){
        const { product, loading } = this.state;
        return(
            <div className="product-info">
                <div className="loading">{ loading }</div>
                <strong>{ product.title }</strong>
                <p>{ product.description }</p>
                <a  href={ product.url }>{ product.url }</a>
                <div className="actions">
                    <Link to="/"><button>voltar</button></Link>
                </div>
            </div>
        )
    }
}