// fetch substitui promise e http
export const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
        .then( resposta => {
            return resposta.json()
        })
}


