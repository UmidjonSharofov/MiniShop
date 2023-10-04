import axios from 'axios'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { priceToString } from '../../../utils/variable'

const Search = () => {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  const handleSearch = (e) => {
    setLoading(true)
    setSearch(e.target.value)
    if (e.target.value.length >= 1) {
      axios.get(`http://localhost:5000/api/products/filter/items?text=${e.target.value}`)
        .then((res) => {
          setData([])
          setData(res?.data?.product)
          console.log(res?.data?.product)
        })
        .catch((err) => {
          console.log(err)
        })

    }

  }
  console.log(search.length);
  return (
    <div>
      <div className="container">

        <div className="wrapper">
          <div className="SearchINp">
            <input id={'myInput'} value={search} type='text' onChange={handleSearch} placeholder="Maxsulot qidiring" />
            <div className='SearchIcon'>
              <BiSearch />
            </div>
          </div>
        </div>

      </div>
      {
        search.length > 0 && <div className='Search_wrapper'>
          <div className='container'>
            <div className='wrapper'>
              <div className='search'>
                {
                  data?.map((item) => {
                    return (
                      <div key={item?._id} className="search_map">
                        <Link className='Link' onClick={() => {
                          setSearch('')
                        }} to={`/product/${item._id}`}>
                          <div className={"img_div"}>
                            <img src={`http://localhost:5000/images/${item.images[0]}`} alt={item.title} />
                          </div>
                          <div className="info_div">
                            <p>{item.title}</p>
                            <p>{priceToString(item.price)} {`so'm dan`}</p>
                          </div>
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Search