export class Negociacao {
    
    constructor(
        private _data: Date, 
        public readonly _quantidade: number, 
        public readonly _valor: number){
    }

    get data(): Date{
        return new Date(this._data.getMilliseconds());
    };

    get volume(): number{
        return this._quantidade * this._valor;
    }
}