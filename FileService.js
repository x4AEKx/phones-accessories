import * as uuid from 'uuid'
import * as path from 'path'
import Post from "./Post.js";

class FileService {
    saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg'
            const filePath = path.resolve('static', fileName)
            file.mv(filePath)
            return `http://localhost:5000/${fileName}`
        } catch (e) {
            console.log(e)
        }
    }
    async getAll() {
        const pictures = await Post.find({}, 'picture' ).exec()
        return pictures
    }
}

export default new FileService()