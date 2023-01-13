interface iProduct  {
    name: string;
    rating: number;
    image_path: string;
    price: number;
    description: string;    
}

export const PRODUCTS : Array<iProduct> = [
    {
        name: "Vanilla Latte",
        rating: 4.8,
        image_path: "0.png",
        price: 21,
        description: "latte with a bit of vanilla",        
    },
    {
        name: "Espresso",
        rating: 4.9,
        image_path: "1.png",
        price: 12,
        description: "caffeine shot!",        
    },
    {
        name: "Hazelnut Latte",
        rating: 4.3,
        image_path: "2.png",
        price: 23,
        description: "taste the Autumn",        
    },
    {
        name: "Sandwitch",
        rating: 4.5,
        image_path: "3.png",
        price: 12,
        description: "bread with meat and vegetables",        
    },
    {
        name: "Hot Milk",
        rating: 4.4,
        image_path: "4.png",
        price: 10,
        description: "Hot Milk with less sugar",        
    },
    {
        name: "Coffe Ice Cream",
        rating: 4.8,
        image_path: "5.png",
        price: 18,
        description: "Coffe with ice cream vanilla",        
    },
    {
        name: "Cappucino",
        rating: 4.8,
        image_path: "6.png",
        price: 12,
        description: "Hot Cappucino",        
    },
    {
        name: "Moccacinno",
        rating: 4.5,
        image_path: "7.png",
        price: 25,
        description: "Hot Moccacino",        
    },
    {
        name: "Waffle Ice Cream",
        rating: 5.0,
        image_path: "8.png",
        price: 23,
        description: "Waffle with Ice cream",        
    },
];
