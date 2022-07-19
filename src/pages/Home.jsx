import { useState } from "react";
import { useEffect } from "react";

import Categories from "../components/Categories";
import CardProduct from "../components/CardProduct";
import { getProducts } from "../services/Products";

import useComerce from "../hooks/useComerce";

import '../styles/Home.css'
const Home = () => {
    const [products, setProducts] = useState([]);
    const [vewMore, setVewMore] = useState(false);
    const [filteredList,setFilteredList]=useState([]);

    const {selectedList}= useComerce();

    useEffect(() => {
        getProducts().then(res => setProducts(res));
    }, []);

    useEffect(()=>{
        const  newarray = products.filter(product => {
            const aux = product;
            const newArray = product.categories.find(cat => selectedList.includes(cat?.name))
            if(newArray) return aux
        }) 
        
        setFilteredList(newarray.filter(item=>item));

    },[selectedList])
   
    const allProducts = vewMore ? products?.map(createCardsProducts) : products?.map(createCardsProducts).slice(0,3)
    const filteredProducts= vewMore ? filteredList?.map(createCardsProducts) : filteredList?.map(createCardsProducts).slice(0,3)

    function createCardsProducts(item,indx) {
        return (
            <CardProduct key={indx} item={item}/>
        )
    }    

    return (
        <>
            <Categories />
            <section className="contCardsProducts">
                {filteredList.length === 0? allProducts:filteredProducts}
            </section>
            <button onClick={()=>setVewMore(!vewMore)} className="fixedVewMore">{vewMore?'Ver menos': 'Ver mas'}</button>

        </>
    )
}

export default Home;