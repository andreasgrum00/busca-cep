function buscarCEP() {
    const cepInput = document.getElementById("cepInput").value;
    const url = `https://viacep.com.br/ws/${cepInput}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.erro) {
                document.getElementById("cepInfo").innerText = "CEP não encontrado."
            } else {
                const endereco = `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`;
                document.getElementById("cepInfo").innerText = endereco;
            }
        })
        .catch(error => {
            console.log("Occoreu um erro", error);
            document.getElementById("cepInfo").innerText = "Ocorreu um erro ao buscar o CEP.";
        })
}