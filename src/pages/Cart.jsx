import useComerce from "../hooks/useComerce";
const Cart = () => {
    const {cart} = useComerce();
    return(
       <>
        {cart.lengt === 0
            ?
            <h1>Tu cesta aun esta vacia</h1>
            :
            <h1>cesta</h1>
        }
       </>
    )
}

export default Cart;