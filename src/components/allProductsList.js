import {useState,useEffect} from 'react'
import CardFeatures from './CardFeatures'
import FilterProduct from './filterProduct'
import { useSelector } from 'react-redux'


const AllProductsList = ({heading}) => {
    const allProducts = useSelector((state) => state.product.productList)
  const categoryList = [...new Set(allProducts.map(el=>el.category))]
  const [datafilter, setDataFilter] = useState([])
  const handleFilterProduct = (category)=>{
    const filter = allProducts.filter(el=> el.category.toLowerCase()===category.toLowerCase())
    setDataFilter(filter)
  
  }
  useEffect(() => {
    setDataFilter(allProducts)
    }, [allProducts])

  return (
    <div className='my-3' >
    <h2 className='font-bold text-2xl text-slate-800'>{heading}</h2>
    <div className='flex gap-6 justify-center overflow-scroll scrollbar-none'>
      {
        categoryList[0] && categoryList.map((el,index)=>{
          return(
            <div key={index}>
            <FilterProduct category={el}  onClick={()=> handleFilterProduct(el)}/>
              </div>
          )
        })
      }
    </div>
    <div className=' flex flex-wrap justify-center my-2 gap-5 '>
            <CardFeatures data={datafilter}/>
    </div>
    </div>
    )
}

export default AllProductsList