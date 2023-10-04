import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { priceToString } from "../../utils/variable"
import './styled.scss'
export const Orders = () => {
  const token = localStorage.getItem('token')
  const [orders, setOrders] = useState([])
  useEffect(() => {
    getAllOrders()
  }, [])
  const getAllOrders = () => {
    axios.get('http://localhost:5000/api/orders/mine',
      { headers: { "Authorization": `Bearer ${token}` } }).then((res) => {
        // console.log(res)
        setOrders(res.data.orders)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  console.log(orders);
  const navigate = useNavigate()
  return (
    <div className="Bg">

      <div className="container">
        <div className="wrapper">
          <div >
            <div className="wrapper_title">
              <h1>Buyurtmalar tarixi</h1>
            </div>
            <div className="table_div">
              <table>
                <thead>
                  <tr>
                    <th>T/r</th>
                    <th>Id</th>
                    <th>Miqdor</th>
                    <th>Sana</th>
                    <th>Holat</th>
                    <th>Umumiy Summa</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    orders?.map((item, i) => (
                      <tr key={i}  onClick={() => {
                        navigate(`/orders/${item._id}`)
                      }} style={{ cursor: "pointer", }}>
                        <td>{i + 1}</td>
                        <td>{item._id}</td>
                        <td>{item?.products?.reduce((a, b) => a + (b?.quantity || 0), 0)} ta</td>
                        <td>{item?.createdAt?.slice(0, 10)}</td>
                        <td className={item.status === 0 ? "progress status" : item.status === 1 ? 'canceled status' : "end status"}>
                          <div>{item.status === 0 ? "Progressda" : item.status === 1 ? 'Bekor qilindi' : "Yakunlandi"}</div>
                        </td>
                        <td>{priceToString(item?.allSum)} {`so'm`}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
