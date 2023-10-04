import ProductsMac from "../Generic/productMac"


const Mac = () => {
    const productsLis={
        id:1,
        title:'Mac',
        desc:"AppleUz internet-do‘koni Toshkentda MacBook noutbuklarini xarid qilishni taklif qiladi . Kompaniya 14 yildan ortiq " +
        "vaqt davomida ushbu elektronikani yetkazib berishga ixtisoslashgan. Biz Apple kompaniyasining O'zbekistondagi " +
        "distribyutorimiz bo'lib, Amerikaning yetakchi ishlab chiqaruvchisidan mashhur noutbuklarni xarid qilish uchun " +
        "maqbul shart-sharoitlarni ta'minlash imkonini beradi. Katalogning ushbu bo'limida keltirilgan mahsulotlar " +
        "haqida ma'lumot va AppleUz internet do'konida Macbook noutbuklarini O'zbekistonda xarid qilishning afzalliklari " +
        "bilan tanishing . Sharh shuningdek, xaridorlarning tez-tez so'raladigan savollariga javob beradi."
    }
    
    return (
        <div>
            <ProductsMac sameObj={productsLis} />
        </div>
    )
}

export default Mac