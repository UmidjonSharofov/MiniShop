import ProductsMac from "../Generic/productMac"

const Iphone = () => {
  const productsLis={
    
      id:2,
      title: "iPhone",
      desc:"AppleUz internet-do‘koni Toshkentda iPhone sotib olishni taklif qilmoqda . Kompaniya uzoq vaqtdan beri Amerikaning " +
          "yetakchi ishlab chiqaruvchisidan smartfonlar yetkazib berishga ixtisoslashgan. Biz Apple kompaniyasining " +
          "O'zbekistondagi distribyutorimiz bo'lib, bu bizga eng mashhur brend telefonlarini xarid qilish uchun maqbul " +
          "shart-sharoitlarni ta'minlash imkonini beradi. Katalogning ushbu bo'limida keltirilgan mahsulotlar haqida ma'lumot" +
          " va AppleUz internet -do'konida O'zbekistonda iPhone xarid qilishning afzalliklari bilan tanishing . Sharh " +
          "shuningdek, xaridorlarning tez-tez so'raladigan savollariga javob beradi."
  
  }
    return (
        <div>
          <ProductsMac sameObj={productsLis} />
        </div>
    )
}

export default Iphone