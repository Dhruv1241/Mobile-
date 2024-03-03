import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export const Contex = createContext();
const AppContex = ({ children }) => {
  const [categori, setcategori] = useState();
  const [product, setproduct] = useState();
  const [cartItem, setcartItem] = useState([]);
  const [cartQuantity, setcartQuantity] = useState();
  const [cartSubTotal, setcartSubTotal] = useState();
  const [token, setToken] = useState(null)
  const location = useLocation();

  const userisLogedin = !!token;

  const loginHandler =(Token)=>{
    setToken(Token)
  }
  const logoutHandler =()=>{
    setToken(null)
  }
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  useEffect(() => {
    let count = 0
    cartItem.map(item=>count+=item.attributes.quantity)
    setcartQuantity(count)

    let subTotal = 0;
    cartItem.map(item => subTotal += item.attributes.price * item.attributes.quantity);
    setcartSubTotal(subTotal)
  }, [cartItem]);

  const addTocart = (product, quantity) => {
    let items = [...cartItem];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setcartItem(items);
  };
  const removeTocart = (product) => {
    let items = [...cartItem];
    items = items.filter((p) => p.id !== product.id);
    setcartItem(items);
  };
  const cartproductQuantity = (type, product) => {
    let items = [...cartItem];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setcartItem(items);
  };
  return (
    <Contex.Provider
      value={{
        categori,
        setcategori,
        product,
        setproduct,
        cartItem,
        setcartItem,
        cartQuantity,
        setcartQuantity,
        cartSubTotal,
        setcartSubTotal,
        addTocart,
        removeTocart,
        cartproductQuantity,
        token: '',
        loginHandler,
        logoutHandler,
        userisLogedin
      }}
    >
      {children}
    </Contex.Provider>
  );
};

export default AppContex;
