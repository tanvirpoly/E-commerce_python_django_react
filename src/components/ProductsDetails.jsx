import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Correct import
import { domain } from "../env";
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [category, setCategory] = useState(null);
    const [categoryproducts, setCategoryproducts] = useState(null);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await axios({
                    method: "get",
                    url: `${domain}/api/product/${id}/`
                });
                console.log(response.data);
                setProduct(response.data);
                getcategory(response?.data?.category['id']);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getdata();
    }, [id]);


        const getcategory = async (id) => {
            if (product?.category?.id) {
                try {
                    const response = await axios({
                        method: 'get',
                        url: `${domain}/api/category/${id}/`
                    });
                    console.log(response.data);
                    setCategory(response.data);
                    categoryproducts(response.data);
                } catch (error) {
                    console.error('Error fetching category:', error);
                }
            }
        };
   
    return (
        <div className="container">
            {product !== null && (
                <div className="row image">
                    <img src={product?.image} alt={product?.name} />

                    <div className="col-md-7">
                        <h1>{product?.title}</h1>
                        <h2>Product Price: {product?.selling_price} <del>{product?.market_price}</del></h2>

                        <div className="col-md-5">
                            <button className="btn btn-info">Add to Cart</button>
                        </div>

                        <p> {product?.description} </p>
                    </div>
                </div>
            )}
            {category !== null && (
                <div className="row">
                    <h2>Category: {category.name}</h2>
                    <p>{category.description}</p>
                </div>
            )}

            <div className="row">
                <h1>Related Products</h1>
                {
                    categoryproducts !==null &&
                    categoryproducts[0]?.category_products?.map((product ,i) => (
                        <div className="col-md-3" key={i} > 
                        <product item={product} />
                        </div>
                    ))
                }

            </div>
            

        </div>
    );
};

export default ProductsDetails;
