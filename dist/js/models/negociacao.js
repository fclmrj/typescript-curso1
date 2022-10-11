export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        return new Date(this._data.getMilliseconds());
    }
    ;
    get volume() {
        return this._quantidade * this._valor;
    }
}
