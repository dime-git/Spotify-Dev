class BaseController {
    constructor(req, res, next) {
        this._req = req
        this._res = res
        this._next = next
    }

    dto(object) {
        if(object) {
            this._res.status(200).json(object)
        } else {
            this._res.sendStatus(200)
        }
    }

    ok() {
        this._res.sendStatus(200)
    }
}

module.exports = BaseController