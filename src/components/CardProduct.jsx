import useComerce from "../hooks/useComerce";
import { Card, Stack } from "react-bootstrap";
import '../styles/CardProduct.css'
const CardProduct = ({ item }) => {
    const {cart,setCart} = useComerce();
    
    const addCart = (item) => {
        let newCart=[];
        const check = cart.some(element => element.id === item.id);
        console.log(check);
        if(check){
             const newCart = cart.map(element => element.id === item.id ? {...element,amount:element.amount+1}:element);
             setCart(newCart);
        }else{
            item.amount = 1;
            setCart([...cart,item]);
        }
       
    }
    console.log(cart);
    return (
        <>
            <Card className="cardProduct text-center" style={{ width: '18rem' }}>
                <Card.Header>
                    <Card.Title>{item.title}</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src={item.image ? `https://codealo-commerce-cms.onrender.com${item.image.url}` : `src/assets/codealo.png`} />
                <Card.Body>
                    <Card.Title>
                        Categorias:
                    </Card.Title>
                    <Card.Text>
                        <section className="contCardCategories">
                            {item.categories.map((cat,indx) => <span key={indx} className="cardCategories">{cat.name}</span>)}
                        </section>
                    </Card.Text>
                    <Card.Text>
                        <span className="price">{item.price} $</span>
                    </Card.Text>
                    <Stack gap={2}>
                        <button className="btnCard" onClick={()=>addCart(item)}>Añadir al carrito</button>
                        <button className="btnCard">Ver mas</button>
                    </Stack>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardProduct;