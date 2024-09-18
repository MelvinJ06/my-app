const CartModel = ({cartItems,removeFromCart,closeModel}) => {
   return(
       <div className = "fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center item center">
        <div className = "bg-green p-6 rounded-lg">
            <h2 className = "font-bold text-lg mb-4">Your Cart</h2>
            {cartItems.length === 0?(
                <p>Your Cart Is Empty</p>
            ): (
                <div>
                    {cartItems.map((item)=>(
                        <div key={item.id} className = "flex justify-between mb-4">
                            <span>{item.title}</span> 
                            <button
                                onClick = {()=>removeFromCart(item.id)}
                                className ="bg-red-500 text-white px-2 py-1 rounded"
                            >
                                Remove
                            </button>
                        </div>    
                    ))}
                </div>
            )}
            <button onClick = {closeModel} className = "mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Close
            </button>
        </div>
       </div>  
   )
}

export default CartModel