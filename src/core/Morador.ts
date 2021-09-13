export default class Morador{
    // símbolo # representa atributo privado
    #id: string
    #nome: string
    #estadoCivil: string

    constructor (nome: string, estadoCivil: string, id: string = null){
        this.#id = id
        this.#nome = nome
        this.#estadoCivil = estadoCivil
    }

    //construtor vazio
    static Vazio(){
        return new Morador('', '')        
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get estadoCivil(){
        return this.#estadoCivil
    }

}