import {useState, useEffect} from 'react';
import ProductInfo from './ProductInfo';
import Cart from './CartContainer';

export default function ProductData() {
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("/productInfo.json");
                const data = await response.json();
                setProduct(data)
            } catch (error) {
                console.log('Err:', error);
                
            }
        }

        fetchProducts()
    }, [])

    const addToCart = (item) => {
        setCart([...cart, item])
        console.log('Item added to cart:', item);
    }

    const removeFromCart = (index) => {
        const newCart = cart.filter((_, i) => i !== index)
        setCart(newCart)
    }

    return (
        <div>
            <Cart cart={cart} onRemoveFromCart={removeFromCart} />
            {product.map((item, index) => (
                <ProductInfo
                    key={item.id}
                    title={item.title}
                    author={item.author}
                    price={item.price}
                    onAddToCart={() => addToCart(item)}
                />
            ))}
        </div>
    )
}