const path = require(`path`);
const fs = require(`fs`);
const Product = require(`./model`);

// Mmebuat Data Table
const CreateProductV2 = async (req, res) => {
    const {users_id, name, price, stock, status} = req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, '../uploads', image.originalname);
        fs.renameSync(image.path, target);
        try {
            await Product.sync();
            const result  = await Product.create({users_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}`});
            res.send(result);
        }catch (error) {
            res.json({ message: error.message })
            console.log(error);
        }
    }
};

// Mmebaca Data table
const viewProductV2 = async (req, res) => {
    const product = await Product.findAll();
    try {
        res.json({
        status: "Get data Success",
        data: product,
        });
      } catch (error) {
        res.json({ message: error.message })
        console.log(error);
      }
};

// Update data table
const updateProductV2 = async (req, res) => {
    const {users_id, name, price, stock, status} = req.body;
    const image = req.file;
    const id = req.params.id;
    let find = await Product.findByPk(id);
    if (image) {
        const target = path.join(__dirname, '../uploads', image.originalname);
        fs.renameSync(image.path, target);
        try {
            const result  = await find.update({users_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}`});
            res.send(result);
        }catch (error) {
            res.json({ message: error.message })
            console.log(error);
        }
    }
};

// Membaca table berdasarkan Id
const viewProductV2ById = async (req, res) => {
    const product = await Product.findAll({
        where: {
            id: req.params.id
        }
    });
    try {
        res.json({
        status: "Get data Success",
        data: product[0],
        });
      } catch (error) {
        res.json({ message: error.message })
        console.log(error);
      }
};

// Menghapus data Table
const deleteProductV2 = async (req, res) => {
    const {users_id, name, price, stock, status} = req.body;
    const image = req.file;
    const id = req.params.id;
    let find = await Product.findByPk(id);
    if (image) {
        const target = path.join(__dirname, '../uploads', image.originalname);
        fs.renameSync(image.path, target);
        try {
            const result  = await find.destroy({users_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}`});
            res.json({
                "message" : "Deleted data succes",
            })
        }catch (error) {
            res.json({ message: error.message })
            console.log(error);
        }
    }
};

// 

module.exports = {
    CreateProductV2,
    viewProductV2,
    viewProductV2ById,
    updateProductV2,
    deleteProductV2

}