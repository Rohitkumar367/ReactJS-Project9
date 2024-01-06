import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product'

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  async function fetchProductData(){
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPost(data);
    }catch(e){
      window.alert("Error in fetching API.")
      setPost([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  },[])

  return (
    <div>
      {
        loading ? <Spinner></Spinner> : (post.length > 0 ? 
          (<div>
            {
              post.map((curElem) => {
                return (
                  <Product key={curElem.id} post={curElem}></Product>
                )
              })
            }
          </div>) 
          : 
          (<div>
            <p>No Data Found</p>
          </div>)
          )
      }
    </div>
  )
}

export default Home
