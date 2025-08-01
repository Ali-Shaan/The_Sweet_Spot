import React, { useState } from 'react'
import '../styles/mainarea.css'
import Header from './Header'

import Product from './products/Product'
import { useSelector } from 'react-redux'
const MainArea = () => {
    const user = useSelector(state=>state.user)
    const [category,setCategory]=useState('pizza')
    
    return (
        <div className='mainarea'>
            <Header/>
            <div className="banner">
                <div className="img">
                    <img src="https://cdn.dribbble.com/userupload/11753102/file/original-cd54a86d20eb3eccf54ab0121cfafe8d.jpg?resize=450x338&vertical=center" alt="" />
                </div>
                <div className="text">
                <h2>Hello <span>{user?.user?.name}</span></h2>
                <h3>Kill your Cravings with your <span>SUGAR DADDY</span>.</h3>
                <p>Get Free delivery on <span>2000 Rs.</span>  and above</p>
                <button>Order Now!</button>
                
               
                
                
                </div>
               
            </div>

         {/* category area */}
         <div className='category-area'>
             <h3>Menu</h3>
            <div className="category">
              <div className={`cat-icon ${category==='Cake'&&'active'} `} onClick={()=>setCategory('Cake')}>
                  <div className="img">

                  <img src="https://cdn.dribbble.com/users/5080524/screenshots/20062293/media/4b5cfc6222e4b531c10786bbc7822b8f.jpg?resize=450x338&vertical=center" alt="pizza" />
                  </div>
                  <div className="text">
                   Cake
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='CheeseCake'&&'active'} `} onClick={()=>setCategory('CheeseCake')}>
                  <div className="img">

                  <img src="https://cdn.dribbble.com/users/9792957/screenshots/16896392/media/3f923a7635a71bf08fcf13bc546b1fec.jpg?resize=450x338&vertical=center" alt="pizza" />
                  </div>
                  <div className="text">
                   Cheese Cake
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Brownie'&&'active'} `} onClick={()=>setCategory('Brownie')}>
                  <div className="img">

                  <img src="https://cdn.dribbble.com/users/2050689/screenshots/17423321/media/0dfe976cfe1a86a4428a512dbb522901.png?resize=400x300&vertical=center" alt="pizza" />
                  </div>
                  <div className="text">
                  Brownies
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='CupCake'&&'active'} `} onClick={()=>setCategory('CupCake')}>
                  <div className="img">

                  <img src="https://cdn.dribbble.com/users/9134271/screenshots/18410551/media/3d39d96705da13a8848e7ee234193798.png?resize=450x338&vertical=center" alt="pizza" />
                  </div>
                  <div className="text">
                   Cup Cakes
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Cookies'&&'active'} `} onClick={()=>setCategory('Cookies')}>
                  <div className="img">

                  <img src="https://cdn.dribbble.com/userupload/8365808/file/original-153c28437b458a46763af9fcc5d91ede.jpg?resize=450x338&vertical=center" alt="pizza" />
                  </div>
                  <div className="text">
                   Cookies
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Donuts'&&'active'} `} onClick={()=>setCategory('Donuts')}>
                  <div className="img">

                  <img src="https://cdn.dribbble.com/users/4643902/screenshots/15977762/media/271142dc4a759c23990f5dc393f4ffa8.png?resize=450x338&vertical=center" alt="pizza" />
                  </div>
                  <div className="text">
                   Donuts
                  </div>
                  
              </div>
            </div>
            <div className="all-list">
             <Product category={category}/>
            </div>
         </div>
         

        </div>
    )
}

export default MainArea
