import multer from "multer";

const storage = multer.memoryStorage()

const upload = multer({ storage }).single("profile")

export default upload;