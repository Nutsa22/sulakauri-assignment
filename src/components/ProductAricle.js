export default function ProductArticle({imgSrc, name, title, price}) {
    return (
        <article className="box">
        <img src={imgSrc} alt="book" />
        <h3>ბესტსელერი</h3>
        <h3>მარაგშია</h3>
        <p className="author-name">{name}</p>
        <p className="product-title">{title}</p>
        <p className="product-price" >{price}</p>
      </article>
    )
}