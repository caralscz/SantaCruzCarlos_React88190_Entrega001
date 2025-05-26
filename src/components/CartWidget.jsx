import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
    
    return (
        <div>
            <MdOutlineShoppingCart color="grey" size={20}/>
            <Badge bg="success" >{3}</Badge>

        </div>
        // <div className="cart-widget">
        // <img src="/images/cart.png" alt="Cart" />
        // <span className="cart-count">0</span>
        // </div>
    );
    }

    export default CartWidget;