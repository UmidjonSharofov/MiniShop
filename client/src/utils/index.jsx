import {v4} from 'uuid'
import Home from '../components/Home'
import Mac from '../components/Mac'
import Iphone from '../components/Iphone'
import Ipad from '../components/Ipad'
import Watch from '../components/Watch'
import Like from '../components/Like'
import Shop from '../components/Shop'
import SingIn from '../components/SingIn'
import Server from '../components/Server'
import Product from '../components/product'

const navbar =[
    { id: v4(), 
        element: <Home/>,
        title: "home",
        path: "/home",
        private:false,
        hidden:false
     }, 
     { id: v4(), 
        element: <Mac/>,
        title: "Mac",
        path: "/product/mac",
        private:true,
        hidden:true
     },
     { id: v4(), 
        element: <Iphone/>,
        title: "Iphone",
        path: "/product/iphone",
        private:true,
        hidden:true
     },
     { id: v4(), 
        element: <Ipad/>,
        title: "Ipad",
        path: "/product/ipad",
        private:true,
        hidden:true
     },
     { id: v4(), 
        element: <Watch/>,
        title: "Watch",
        path: "/product/watch",
        private:true,
        hidden:true
     },
     { id: v4(), 
        element: <Like/>,
        title: "Like",
        path: "/product/like",
        private:false,
        hidden:false
     },
     { id: v4(), 
        element: <Shop/>,
        title: "Shop",
        path: "/product/shop",
        private:false,
        hidden:false
     },
     { id: v4(), 
        element: <SingIn/>,
        title: "SingIn",
        path: "/product/singIn",
        private:false,
        hidden:false
     },
     { id: v4(), 
      element: <Server/>,
      title: "Server",
      path: "/product/server",
      private:false,
      hidden:false
   },
   { id: v4(), 
      element: <Product/>,
      title: "Product",
      path: "/product/:id",
      private:false,
      hidden:false
   },
]

export default navbar