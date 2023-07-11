const upload = require('../Utilities/Avatar-upload');
const singleUpload = upload.single('avatar');

module.exports = {

     uploadImagem: (req, res) => {
        singleUpload(req, res, function(err) {
          if (err) {
            return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}]});
          }
          return res.send(req.file.location);
      });
     } 
       
}