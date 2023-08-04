import {useState,useEffect} from 'react'
import CardFeatures from './CardFeatures'
import FilterProduct from './filterProduct'
import { useSelector } from 'react-redux'
const AllProductsList = ({heading}) => {
    const allProducts = useSelector((state) => state.product.productList)
  const categoryList = [...new Set(allProducts.map(el=>el.category))]
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);
  const handleFilterProduct = (category)=>{
    setFilterBy(category)
    const filter = allProducts.filter(el=> el.category.toLowerCase()===category.toLowerCase())
    setDataFilter(() => {
      return [...filter];
    });
  }
  useEffect(() => {
    setDataFilter(allProducts)
    }, [allProducts])
  const loadingArrayFeature = new Array(6).fill(null);
  return  (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>

      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] ? (
          categoryList.map((el) => {
            return (
              <FilterProduct
                category={el}
                key={el}
                isActive={el.toLowerCase() === filterby.toLowerCase()}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter[0]
          ? dataFilter.map((el) => {
              return (
                <CardFeatures
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                />
              );
            })
          : 
          loadingArrayFeature.map((el,index) => (
              <CardFeatures loading="Loading..." key={index+"allProduct"} />
            ))}
      </div>
    </div>
  );
}

export default AllProductsList
