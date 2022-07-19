import { useEffect, useState } from "react";
import { getCategories } from "../services/products";
import useComerce from "../hooks/useComerce";
import '../styles/Categories.css'
const Categories = () => {
    const [categories,setCategories]= useState();
    const {selectedList, setSelectedList}= useComerce();
    
    useEffect(()=>{
        getCategories().then(resp=>setCategories(resp));
    },[selectedList])

    const changeFilter = (category) => {
        if(selectedList.includes(category)){
            const newArray = selectedList.filter(selec=>selec !== category);
            setSelectedList(newArray);            
        }else{
            setSelectedList([...selectedList,category]);
        }
    }

        return(
        <section  className="contCategory">
        {categories?.map((category,indx) =>
         <button onClick={() => changeFilter(category,indx)} key={indx} className={selectedList.includes(category)?'category categorySelected ' : 'category '}>
            {category}
         </button>
        )}
        </section>
    )
}

export default Categories;