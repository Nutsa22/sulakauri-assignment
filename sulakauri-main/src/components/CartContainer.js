import styled from 'styled-components';

const CartContainer = styled.div`
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const CartItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
`;

const Total = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    text-align: right;
`;

export default function Cart({cart, onRemoveFromCart}) {
    const total = cart.reduce((sum, item) => sum + parseFloat(item.price || 0), 0);

    return (
        <CartContainer>
            <h2>Shopping Cart ({cart.length} items)</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <CartItem key={index}>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.author}</p>
                            </div>
                            <div>
                                <span>${item.price}</span>
                                <button onClick={() => onRemoveFromCart(index)} style={{marginLeft: '10px'}}>
                                    Remove
                                </button>
                            </div>
                        </CartItem>
                    ))}
                    <Total>Total: ${total.toFixed(2)}</Total>
                </>
            )}
        </CartContainer>
    );
}