exports.index = (req, res, next) => {
    res.status(200). json({
    name: 'Somsanith',
    age: 28,
    address: {
        province: 'Vientiane',
        district: 'Xaythany',
        village: 'Nongviengkham'
    }
 })
}