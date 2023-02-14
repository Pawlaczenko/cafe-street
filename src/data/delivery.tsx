import chooseIcon from "../assets/choose_icon.png";
import deliveryIcon from "../assets/delivery_icon.png";
import coffeeIcon from "../assets/coffee_icon.png";

export interface IDeliveryOptions  {
    title: string;
    image_path: string;
    description: string;    
}

export const DELIVERY_OPTIONS : Array<IDeliveryOptions> = [
    {
        title: "Choose your coffee",
        image_path: chooseIcon,
        description: "There are 20+ coffees for you",        
    },
    {
        title: "We deliver it to you",
        image_path: deliveryIcon,
        description: "Choose delivery service",        
    },
    {
        title: "Enjoy your coffee",
        image_path: coffeeIcon,
        description: "We guarantee a great taste",        
    }
]; 