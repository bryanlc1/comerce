import { createContext } from 'react'
import { useState } from 'react'

const comerceContext = createContext()

export const ComerceProvider = ({ children }) => {
	const [selectedList, setSelectedList]=useState([]);
    const [user,setUser] = useState({});
    const [cart,setCart] = useState([]);
	
	return (
		<comerceContext.Provider value={{selectedList, setSelectedList,user,setUser,cart,setCart}}>
			{children}
		</comerceContext.Provider>
	)
}

export default comerceContext;