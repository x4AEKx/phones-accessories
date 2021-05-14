import FileService from "./FileService.js";

class FileController {
    async getAll(req, res) {
        try {
            const pictures = await FileService.getAll()
            return res.json(pictures)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new FileController()