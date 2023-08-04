import { useState, useEffect, useRef } from 'react'
import { TbTruckDelivery } from "react-icons/tb"
import Card from "../components/Card"
import { useSelector } from 'react-redux'
import CardFeatures from "../components/CardFeatures"
import { GrNext, GrPrevious } from 'react-icons/gr'
import AllProductsList from "../components/allProductsList"
const Home = () => {
  const allProducts = useSelector((state) => state.product.productList)
  const cardProductsOnPage = allProducts.filter(el=>el.category ==="Fruits").slice(2,6)
  const [color, setColor] = useState()
  const filterCardProducts = allProducts.filter(el => el.category === "Fruits", [])
 
  // Random Color Selector Function
  const tick = () => {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    var randomcolor = "rgb(" + R + "," + G + "," + B + ")";
    if (randomcolor) {
      setColor(randomcolor)
    }
  }

  const slideProductRef = useRef()
  // Next products function
  const nextScrollProduct = () => {
    slideProductRef.current.scrollLeft += 200
  }

  // Previous products function
  const preveScrollProduct = () => {
    slideProductRef.current.scrollLeft -= 200

  }
  //
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);
 

 
  useEffect(() => {
    document.title ="Groceries - HOME" 
    const timerID = setInterval(() => tick(), 4000)
    return () => {
      clearInterval(timerID)
    }
  }, [allProducts])
  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>
        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-slate-200 w-36 px-2 items-center rounded-full hover:h-10'>
            <p className='text-sm font-bold text-slate-900 '>Fast{" "}<span className='font-style: italic;'>Delivery</span> </p>
            <div>
            <TbTruckDelivery className="h-7 w-7" style={{ color: color }} />
            </div>
          </div>
          <h1 className='text-4xl md:text-7xl font-bold py-4'>Make your Today, Use your{" "}
            <span className='font-style: italic; hover:font-normal' style={{ color: color }}>Groceries
            </span></h1>
          <p className='py-3 text-md font-bold hover:text-2xl'>
          <span className='hover:green-600'>
          Your needs in just one place.
            </span>
            “You won't need to worry about the rain anymore” Online grocery shopping made easy at bigbasket, wide range of products at best prices. Skip the queue and order from the wide range of products available at bigbasket.com. Download Mobile App. Multiple Payment Options. Sign Up Online.
          </p>
          <button className='orderNowBtn font-bold bg-blue-400 px-3 text-slate-200  rounded-md py-1.5'>
            Order_Now
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center InnerDivClass">
          {cardProductsOnPage[0]
            ? cardProductsOnPage.map((el) => {
                return (
                  <Card
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <Card key={index+"loading"} loading={"Loading..."} />;
              })}
        </div>
      </div>
      <div className='flex w-full items-center'>
        <h2 className='font-bold text-2xl text-slate-800'>Fruits</h2>
        <div className='ml-auto flex gap-4'>
          <button onClick={preveScrollProduct} className='bg-slate-300 hover:bg-slate-500 text-lg rounded p-1'><GrPrevious /></button>
          <button onClick={nextScrollProduct} className='bg-slate-300 hover:bg-slate-500 text-lg rounded p-1'><GrNext /></button>

        </div>

      </div>
      <div className='flex gap-5 p-2 overflow-scroll  scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>
      {filterCardProducts[0]
            ? filterCardProducts.map((el) => {
                return (
                  <CardFeatures
                    key={el._id+"vegetable"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el,index) => (
                <CardFeatures loading="Loading..." key={index+"cartLoading"} />
              ))}
      </div>
      <div>
      <AllProductsList  heading={"Your Product"}/>
      </div>
    </div>
  )
}

export default Home