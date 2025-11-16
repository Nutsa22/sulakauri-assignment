export default function ProductInfo({title, author, price, onAddToCart}) {
    return (
        <article>
            <h1>{title}</h1>
            <p>{author}</p>
            <p>{price}</p>
            <button onClick={onAddToCart}>Add to cart</button>
        </article>
    )
}