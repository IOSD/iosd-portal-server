import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
    callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        console.log(file);
        callback(null, file.fieldname + '-' + Date.now());
    }
});
  
const upload = multer({ storage : storage}).single('file');

export default upload;