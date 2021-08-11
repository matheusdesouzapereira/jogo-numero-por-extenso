/* Função para transformar número em valor por extenso */
function converterParaExtenso(){
    /* Pega valor digitado e o campo de resultado */
    var numeroInteiro = formConverter.numeroInteiro.value;
    var resultado = document.getElementById('resultadoExtenso');
    var body = document.getElementsByTagName('body');

    /* Validação para saber se o número está entre 0 e 100 */
    if(numeroInteiro < 0 || numeroInteiro > 100){
        document.body.style.backgroundImage = "url('../img/game-over.gif')";
        setTimeout(()=>{
            alert('O número digitado tem que estar entre 0 e 100. Game Over. Tente novamente.');
        }, 1000);
        resultado.innerHTML = 'Putz meu!.';
    }
    
    /* Switch para cada caso */
    switch (numeroInteiro) {
        case '1':
            resultado.innerHTML = 'Um.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '2':
            resultado.innerHTML = 'Dois.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '3':
            resultado.innerHTML = 'Três.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '4':
            resultado.innerHTML = 'Quatro.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '5':
            resultado.innerHTML = 'Cinco.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '6':
            resultado.innerHTML = 'Seis.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '7':
            resultado.innerHTML = 'Sete.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '8':
            resultado.innerHTML = 'Oito.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '9':
            resultado.innerHTML = 'Nove.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '10':
            resultado.innerHTML = 'Dez.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '11':
            resultado.innerHTML = 'Onze.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '12':
            resultado.innerHTML = 'Doze.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '13':
            resultado.innerHTML = 'Treze.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '14':
            resultado.innerHTML = 'Quatorze.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '15':
            resultado.innerHTML = 'Quinze.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '16':
            resultado.innerHTML = 'Dezesseis.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '17':
            resultado.innerHTML = 'Dezessete.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '18':
            resultado.innerHTML = 'Dezoito.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '19':
            resultado.innerHTML = 'Dezenove.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '20':
            resultado.innerHTML = 'Vinte.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '21':
            resultado.innerHTML = 'Vinte e um.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '22':
            resultado.innerHTML = 'Vinte e dois.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '23':
            resultado.innerHTML = 'Vinte e três.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '24':
            resultado.innerHTML = 'Vinte e quatro.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '25':
            resultado.innerHTML = 'Vinte e cinco.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '26':
            resultado.innerHTML = 'Vinte e seis.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '27':
            resultado.innerHTML = 'Vinte e sete.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '28':
            resultado.innerHTML = 'Vinte e oito.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '29':
            resultado.innerHTML = 'Vinte e nove.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '30':
            resultado.innerHTML = 'Trinta.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '31':
            resultado.innerHTML = 'Trinta e um.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '32':
            resultado.innerHTML = 'Trinta e dois.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '33':
            resultado.innerHTML = 'Trinta e três.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '34':
            resultado.innerHTML = 'Trinta e quatro.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '35':
            resultado.innerHTML = 'Trinta e cinco.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '36':
            resultado.innerHTML = 'Trinta e seis.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '37':
            resultado.innerHTML = 'Trinta e sete.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '38':
            resultado.innerHTML = 'Trinta e oito.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '39':
            resultado.innerHTML = 'Trinta e nove.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '40':
            resultado.innerHTML = 'Quarenta.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '41':
            resultado.innerHTML = 'Quarenta e um.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '42':
            resultado.innerHTML = 'Quarenta e dois.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '43':
            resultado.innerHTML = 'Quarenta e três.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '44':
            resultado.innerHTML = 'Quarenta e quatro.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '45':
            resultado.innerHTML = 'Quarenta e cinco.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '46':
            resultado.innerHTML = 'Quarenta e seis.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '47':
            resultado.innerHTML = 'Quarenta e sete.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '48':
            resultado.innerHTML = 'Quarenta e oito.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '49':
            resultado.innerHTML = 'Quarenta e nove.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '50':
            resultado.innerHTML = 'Cinquenta.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '51':
            resultado.innerHTML = 'Cinquenta e um.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '52':
            resultado.innerHTML = 'Cinquenta e dois.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '53':
            resultado.innerHTML = 'Cinquenta e três.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '54':
            resultado.innerHTML = 'Cinquenta e quatro.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '55':
            resultado.innerHTML = 'Cinquenta e cinco.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '56':
            resultado.innerHTML = 'Cinquenta e seis.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '57':
            resultado.innerHTML = 'Cinquenta e sete.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '58':
            resultado.innerHTML = 'Cinquenta e oito.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '59':
            resultado.innerHTML = 'Cinquenta e nove.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '60':
            resultado.innerHTML = 'Sessenta.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '61':
            resultado.innerHTML = 'Sessenta e um.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '62':
            resultado.innerHTML = 'Sessenta e dois.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '63':
            resultado.innerHTML = 'Sessenta e três.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '64':
            resultado.innerHTML = 'Sessenta e quatro.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '65':
            resultado.innerHTML = 'Sessenta e cinco.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '66':
            resultado.innerHTML = 'Sessenta e seis.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '67':
            resultado.innerHTML = 'Sessenta e sete.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '68':
            resultado.innerHTML = 'Sessenta e oito.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '69':
            resultado.innerHTML = 'Sessenta e nove.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '70':
            resultado.innerHTML = 'Setenta.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '71':
            resultado.innerHTML = 'Setenta e um.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '72':
            resultado.innerHTML = 'Setenta e dois.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '73':
            resultado.innerHTML = 'Setenta e três.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '74':
            resultado.innerHTML = 'Setenta e quatro.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '75':
            resultado.innerHTML = 'Setenta e cinco.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '76':
            resultado.innerHTML = 'Setenta e seis.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '77':
            resultado.innerHTML = 'Setenta e sete.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '78':
            resultado.innerHTML = 'Setenta e oito.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '79':
            resultado.innerHTML = 'Setenta e nove.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '80':
            resultado.innerHTML = 'Oitenta.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '81':
            resultado.innerHTML = 'Oitenta e um.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '82':
            resultado.innerHTML = 'Oitenta e dois.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '83':
            resultado.innerHTML = 'Oitenta e três.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '84':
            resultado.innerHTML = 'Oitenta e quatro.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '85':
            resultado.innerHTML = 'Oitenta e cinco.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '86':
            resultado.innerHTML = 'Oitenta e seis.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '87':
            resultado.innerHTML = 'Oitenta e sete.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '88':
            resultado.innerHTML = 'Oitenta e oito.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '89':
            resultado.innerHTML = 'Oitenta e nove.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '90':
            resultado.innerHTML = 'Noventa.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '91':
            resultado.innerHTML = 'Noventa e um.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '92':
            resultado.innerHTML = 'Noventa e dois.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '93':
            resultado.innerHTML = 'Noventa e três.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '94':
            resultado.innerHTML = 'Noventa e quatro.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '95':
            resultado.innerHTML = 'Noventa e cinco.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '96':
            resultado.innerHTML = 'Noventa e seis.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '97':
            resultado.innerHTML = 'Noventa e sete.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '98':
            resultado.innerHTML = 'Noventa e oito.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '99':
            resultado.innerHTML = 'Noventa e nove.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        case '100':
            resultado.innerHTML = 'Cem.';
            document.body.style.backgroundImage = "url('../img/congratulations.gif')";
            setTimeout(()=>{
                alert('VITÓRIA! VOCÊ CONSEQUIU!');
            }, 1000);
            break;
        }

    return false;
    
}