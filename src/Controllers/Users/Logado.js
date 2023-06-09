const jsonwebtoken = requeri('jsonwebtoken');

async function Logado(req, res, next) {
    //PEGA OS COOKIES DO NAVEGADOR.
    Auth = req.cookie.Token || null;

    //VERIFICA SE O COOKIE EXISTE.
    if(typeof(Auth) == 'Undefined' || Auth == '' || Auth == null) {
        return res.send({erro: {login: 'Não autorizado.'}});
    } else {
        //TENTA TRADUZIR O TOKEN.
        try {
            //SE CONSEGUIR, AUTORIZA O ACESSO.
            Token = await jsonwebtoken.verify(Auth, 'SenhaParaProtegerOToken');
            next();
        } catch(err) {
            return res.send({ erro: { login: 'Não autorizado.' }});
        }
    }
}

module.exports = Logado;
