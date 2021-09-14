import firebase from "../config";
import Morador from "../../core/Morador";
import MoradorRepositorio from "../../core/MoradorRepositorio";

export default class ColecaoMorador implements MoradorRepositorio {

    #conversor = {
        toFirestore(morador: Morador) {
            return {
                nome: morador.nome,
                estadoCivil: morador.estadoCivil
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Morador {
            const dados = snapshot.data(options)
            return new Morador(dados.nome, dados.estadoCivil, snapshot.id)
        }
    }

    async salvar(morador: Morador): Promise<Morador> {
        if(morador?.id){
            await this.colecao().doc(morador.id).set(morador)//se já tiver ID. atualiza
            return morador
        }
        else{
            const docRef = await this.colecao().add(morador) //se não tiver ID, adiciona
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(morador: Morador): Promise<void> {
        return this.colecao().doc(morador.id).delete()
    }

    async obterTodos(): Promise<Morador[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase.firestore()
            .collection("moradores")
            .withConverter(this.#conversor)
    }
}