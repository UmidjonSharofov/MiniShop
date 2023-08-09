import {BiSearch} from 'react-icons/bi'
const Search = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="SearchINp">
          <input placeholder="Maxsulot qidiring" />
          <div className='SearchIcon'>
            <BiSearch/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search