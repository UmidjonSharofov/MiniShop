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
        path: "/mac",
        private:true,
        hidden:true
     },
     { id: v4(), 
        element: <Iphone/>,
        title: "Iphone",
        path: "/iphone",
        private:true,
        hidden:true
     },
     { id: v4(), 
        element: <Ipad/>,
        title: "Ipad",
        path: "/ipad",
        private:true,
        hidden:true
     },
     { id: v4(), 
        element: <Watch/>,
        title: "Watch",
        path: "/watch",
        private:true,
        hidden:true
     },
     { id: v4(), 
        element: <Like/>,
        title: "Like",
        path: "/like",
        private:false,
        hidden:false
     },
     { id: v4(), 
        element: <Shop/>,
        title: "Shop",
        path: "/shop",
        private:false,
        hidden:false
     },
     { id: v4(), 
        element: <SingIn/>,
        title: "SingIn",
        path: "/singIn",
        private:false,
        hidden:false
     },
     { id: v4(), 
      element: <Server/>,
      title: "Server",
      path: "/server",
      private:false,
      hidden:false
   },
]

export default navbar