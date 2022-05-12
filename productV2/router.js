const router = require(`express`).Router();
const multer = require(`multer`);
const upload = multer({dest: `uploads`});
const productControllerV2 = require(`./controller`);


// Crud Sequelize
router.get(`/product`, upload.single(`image`), productControllerV2.viewProductV2);
router.get(`/product/:id`, upload.single(`image`), productControllerV2.viewProductV2ById);
router.post(`/product`, upload.single(`image`), productControllerV2.CreateProductV2);
router.put(`/product/:id`, upload.single(`image`), productControllerV2.updateProductV2); 
router.delete(`/product/:id`, upload.single(`image`), productControllerV2.deleteProductV2); 



module.exports = router;