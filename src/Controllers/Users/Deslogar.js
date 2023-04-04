async function Deslogar(res) {
    //LIMPA OS COOKIES DO NAVEGADOR.
    res.clearCookies('Token');
    res.redirect('/');
}

module.exports = Deslogar;