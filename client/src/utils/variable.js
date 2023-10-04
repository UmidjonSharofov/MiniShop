
export const priceToString=(b)=>{
    let a=b.toString()
    if(a.length==5){
        let r=a.slice(0,3)+" "+a.slice(3,5)
    return a=r
    }
    if(a.length==6){
        let r=a.slice(0,3)+" "+a.slice(3,6)
    return a=r
    }
    else if(a.length===7){
        return a.slice(0,1)+" "+a.slice(1,4)+" "+a.slice(4,7)
        
    }
    else if(a.length===8){
        return a.slice(0,2)+" "+a.slice(2,5)+" "+a.slice(5,8)

    }
    else if(a.length===9){
        return a.slice(0,3)+" "+a.slice(3,6)+" "+a.slice(6,9)
    }
}