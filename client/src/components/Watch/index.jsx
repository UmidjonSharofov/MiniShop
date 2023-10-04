import ProductsMac from "../Generic/productMac"

const Watch = () => {
  const productsLis= {
    id:4,
    title: "Watch",
    desc: "AppleUz internet-do‘koni Toshkentdagi iWatch soatlari toifasini taqdim etadi. Kompaniya 14 yildan ortiq vaqt " +
        "davomida Amerikaning yetakchi ishlab chiqaruvchisidan mobil gadjetlarni yetkazib berishga ixtisoslashgan. Biz " +
        "Apple kompaniyasining O'zbekistondagi distribyutorimiz, bu bizga mashhur iWatchning eng yaxshi modellarini xarid" +
        " qilish uchun maqbul shart-sharoitlarni ta'minlash imkonini beradi. Katalogning ushbu bo'limidagi mahsulot haqida " +
        "ma'lumot va iWatch xarid qilishning afzalliklari bilan tanishib chiqing Apple O'zbekistonda AppleUz onlayn do'konida." +
        " Sharh shuningdek, xaridorlarning tez-tez so'raladigan savollariga javob beradi."
}
    return (
        <div>
         <ProductsMac sameObj={productsLis} />
        </div>
    )
}

export default Watch