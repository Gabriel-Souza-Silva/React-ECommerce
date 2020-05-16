export const addItemToCart = (cartItems, cartItemToAdd) =>{
    const existingCartitem = cartItems.find(cartItem =>
        cartItem.id == cartItemToAdd.id
    )

    if(existingCartitem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    //retorna 1 por que caso ja existir o codigo vai retornar dentro do if existingCartitem
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}