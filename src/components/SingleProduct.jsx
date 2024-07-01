import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SingleProduct = ({item}) => {
  return (


        <div className="card single_product">
            <Link to={`/product/${item.id}`} >
            <img className="card-img-top" src={item.image} alt="Card image cap" />
            </Link>


            
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{(item.description).substring(0,50)} <Link to={`/product/${item.id}`} >More</Link>  </p>
                <a href="#" className="btn btn-primary">Add to card</a>
            </div>

            <div className="card-footer">
                <h5>Price: {item.selling_price} <del>{item.marcket_price}</del></h5>
            </div>



        </div>


  )
}

export default SingleProduct