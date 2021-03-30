var ecra = document.querySelector('.ecra')
var n1 = ""
var n2 = ""
var operacao = ""

function nPressionado(num) {
  if (n1 >= "" && operacao == "") {
    n1 += "" + num
    ecra.value += num
  } else {
    n2 += "" + num
    ecra.value += num


  }
}

function oPressionado(oper) {
  if (operacao == "") {
    operacao = oper
    ecra.value += oper
  }
}

function igual(enter) {
  if (operacao == '+') {
    ecra.value += enter
    ecra.value += Number(n1) + Number(n2)
  } else if (operacao == '-') {
    ecra.value += enter
    ecra.value += Number(n1) - Number(n2)
  } else if (operacao == 'x') {
    ecra.value += enter
    ecra.value += Number(n1) * Number(n2)
  } else if (operacao == '/') {
    ecra.value += enter
    ecra.value += Number(n1) / Number(n2)
  }
}

function del() {
  if (n1 > "") {
    n1 = ''
    n2 = ''
    operacao = ''
    ecra.value = ''
  }
}