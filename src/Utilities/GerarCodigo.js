

function gerarCodProd(tipo, material, pedra){
    const p1 = tipo.substr(0, 3);
    const p2 = material.substr(0, 3);
    const p3 = pedra.substr(0,3);
    const p4 = Date.now().toString(36);

    const cod_prod = p1+p2+p3+"-"+p4;
    return cod_prod;
}

function gerarCodVenda(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result= ' ';
    for ( let i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    const p1 = Date.now().toString(36);
    const p2 = Math.floor(Math.random() * 1000);
    const p3 = result.trim();
    const cod_venda = p1+p2+p3;
    return cod_venda;
}

module.exports = {
    gerarCodProd,
    gerarCodVenda
}