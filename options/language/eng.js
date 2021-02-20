exports.wait = () => {
        return `⌛ ESPERA.AI CORNO ⌛`
}

exports.timeEnd = () => {
        return `Tempo acabou`
}

exports.succsess = () => {
        return `✔️ Sucesso ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *habilitar nivelamento*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *desabilitar nivelamento*`
}

exports.levelnol = () => {
        return `*SEU NIVEL AINDA* 0 °-°`
}

exports.stick = () => {
        return `[❗] Falhou, um erro ocorreu ao converter a imagem em um adesivo ❌`
}

exports.Iv = () => {
        return `❌ Invalid link ❌`
}

exports.group = () => {
        return `[❗] Este comando so pode ser usado em grupos! ❌`
}

exports.ownerG = () => {
        return `[❗] Este comando so pode ser usado pelo grupo proprietario! ❌`
}

exports.ownerB = () => {
        return `[❗] Este comando só pode ser usado pelo proprietario de bot! ❌`
}

exports.admin = () => {
        return `[❗] Este comando só pode ser usado por administradores de grupo! ❌`
}

exports.Badmin = () => {
        return `[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌`
}

exports.daftarB = (prefix) => {
        return `──「 AINDA NÃO REGISTRADO 」──\nOla mana !\nVoce ainda nao se cadastrou, vamos registrar primeiro... \n\nComando : ${prefix}Nome de registro|era\nExemplo : ${prefix}register Shreka|26`
}

exports.daftarD = () => {
        return `*「 JA SE REGISTRO 」*\n\n*você se registrou no banco de dados do bot * `
}

exports.wrongf = () => {
        return`*Formato incorreto / texto em brancot*`
}

exports.clears = () => {
        return`*limpar todos os chat com sucessos * `
}

exports.pc = () => {
        return`*「 CADASTRO 」*\n\nif você não entendeu a mensagem. significa que você não salvou o número do  bot * `
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 REGISTRAR DADOS 」*\n\nvoce se registrou no dados \n\n◪ *DATA* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Numero : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Era : ${umurUser} \n  ├─ ❏ Registrar Hora : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTA : NAO ESQUECA ESTE NUMERO PORQUE E IMPORTANTE :v`
}

exports.cmdnf = (prefix, command) => {
        return`comando *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Desculpe, mas ${pushname} não é o script do proprietário * `
}

exports.limitend = (pushname) => {
        return`*Desculpe ${pushname} O Limite de hoje acabou*\n*Limite e zerado a cada 00:00 horas*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT CONTA 」*
o resto de seu limite : ${limitCounts}

NOTA : para chegar ao limite. pode passar de nivel ou comprar limite`
}

exports.satukos = () => {
        return`*Add parametros 1 (enable) or 0 (disable)`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *BALANCO*\n  ❏ *Nome* : ${pushname}\n  ❏ *Numero* : ${sender.split("@")[0]}\n  ❏ *Grana* : ${uangkau}`
}
