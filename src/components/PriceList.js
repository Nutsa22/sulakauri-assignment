import { useState, useEffect } from "react";
import axios from "axios";
import ProductArticle from "./ProductAricle";

export default function PriceList() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function getProductInformation() {
            try {
             const response = await axios.get ("/productInfo.json");
            // const data = await response.json()

            console.log('Data fetched:', response);
            setProduct(response.data);
            console.log(response.data)
                
            } catch (error) {
                console.log("Error fetching product information:", error);
            }
           


    }
        getProductInformation();
 }, [])


  return(
    <div>
        <ul>
            {product.map((item) => (
                // <li className="otherPrice" key={item.id}>{item.price}</li>
                <ProductArticle key={item.id} imgSrc={item.imageUrl} name={item.author} title={item.title} price={item.price}/>
            ))}
        </ul>
    </div>
  )
}

