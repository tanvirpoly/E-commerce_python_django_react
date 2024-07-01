import axios from 'axios'; // Correct import
import React, { useEffect, useState } from 'react';
import { domain } from "../env";
import SingleProduct from './SingleProduct';

function HomePage() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await axios({
                    method: "get",
                    url: `${domain}/api/product/`
                });
                    console.log(response.data);
                    setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getdata();
    }, []);


    const nextproducts=async()=>{
        try {
            const response = await axios({
                method: "get",
                url:products?.next
            });
                setProducts(response.data);
                console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    const previousproducts=async()=>{


        try {
            const response = await axios({
                method: "get",
                url:products?.previous
            });
                setProducts(response.data);
                console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

   



    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9">
                    <div className="row mx-2">
                        {products !== null && products.results.map((item, i) => (
                            <div key={i} className="col-md-4">
                                <SingleProduct item={item} />
                            </div>
                        ))}
                    </div>

                    <div className="homepage__pagination">
                        <div>
                                {
                                products?.previous !== null ? (
                                    <button onClick={previousproducts} className="btn btn-danger">Previous</button>
                                ) : (
                                    <button className="btn btn-danger" disabled>Previous</button>
                                    )
                                }
                        </div>

                        <div>
                            {
                                products?.next !== null ?(
                                    <button onClick={nextproducts} className="btn btn-success">Next</button>
                                ) : (
                                    <button className="btn btn-success" disabled>Next</button>
                                )
                            }
                        </div>
                        
                    </div>

                </div>

                <div className="col-md-3 bgg-dark">Catagory</div>

                

            </div>
        </div>
    );
}

export default HomePage;
