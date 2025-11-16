import { useEffect, useState } from "react";
import  axios from "axios";

export default function PriceList() {
const [price, setPrice] = useState([]);

useEffect(() => {
    async function getProductPrice() {
        const response = await axios.get("/productInfo.json");
        // const data = await response.json()

        console.log('Data fetched:', response);

        setPrice(response.data)
        

    }
    getProductPrice()
}, [])


    return (
        <div>
        <div>
                {price.map((item) => (
                    <div key={item.id}>
                        <p>{item.author}</p>
                        <p>{item.price} ლ</p>
                    </div>
                ))}
        </div>
        </div>

    )

}