import { useSelector } from 'react-redux'
import CartProducts from './CartProducts'

const Cart = () => {
  const productCartItem = useSelector((state)=>state.product.cartItem)
  return (
    <div className='p-2 md:p-4'>
      <h2  className='text-lg md:text-2xl font-bold text-slate-600'>
        Your Cart Items here !
      </h2>
      {productCartItem[0] ?
        <div className="my-4 flex  gap-3">
          {/* display cart items  */}
          <div className="w-full">
            {productCartItem.map((el) => {
              return (
                <CartProducts
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.image}
                  category={el.category}
                  qty={el.qty}
                  total={el.total}
                  price={el.price}
                />
              );
            })}
          </div>
          </div>
          :   <>
          <div className="flex w-full justify-center items-center flex-col">
            <img src={""} className="w-full max-w-sm"/>
            <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
          </div>
        </>}
        </div>
  )
}


export default Cart