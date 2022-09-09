// Calculadora de empréstimo

'use strict'

function calculate() {
  let amount = document.getElementById('amount')
  let apr = document.getElementById('apr')
  let years = document.getElementById('years')
  let zipcode = document.getElementById('zipcode')
  let payment = document.getElementById('payment')
  let total = document.getElementById('total')
  let totalinterest = document.getElementById('totalinterest')

  let principal = parseFloat(amount.value)
  let interest = parseFloat(apr.value) / 100 / 12
  let payments = parseFloat(years.value) * 12

  let x = Math.pow(1 + interest, payments)
  let monthly = (principal * x * interest) / (x - 1)

  if (isFinite(monthly)) {
    payment.innerHTML = monthly.toFixed(2)
    total.innerHTML = (monthly * payments).toFixed(2)
    totalinterest.innerHTML = (monthly * payments - principal).toFixed(2)

    save(amount.value, apr.value, years.value, zipcode.value)

    try {
      getLenders(amount.value, apr.value, years.value, zipcode.value)
    } catch (e) {
      /* E ignora estes erros */
    }

    chart(principal, interest, monthly, payments)
  } else {
    payment.innerHTML = ''
    totalinterest.innerHTML = ''
    totalinterest.innerHTML = ''
    chart()
  }
}

function save(amount, apr, years, zipcode) {
  if (window.localStorage) {
    localStorage.loan_amount = amount
    localStorage.loan_apr = apr
    localStorage.loan_years = years
    localStorage.loan_zipcode = zipcode
  }
}

// window.onload function () {
//   if (window.localStorage && localStorage.loan_amount) {
//     document.getElementById("amount").value = localStorage.loan_amount
//     document.getElementById("apr").value = localStorage.loan_apr
//     document.getElementById("years").value = localStorage.loan_years
//     document.getElementById("zipcode").value = localStorage.loan_zipcode
//   }
// };

function getLenders(amout, apr, years, zipcode) {
  if (!window.XMLHttpRequest) return

  let ad = document.getElementById('lenders')
  if (!ad) return

  let url =
    'getLenders.php' +
    '?amt=' +
    encodeURIComponent(amout) +
    '?apr=' +
    encodeURIComponent(apr) +
    '?yrs=' +
    encodeURIComponent(years) +
    '?zip=' +
    encodeURIComponent(zipcode)

  let req = new XMLHttpRequest()
  req.open('GET', url)
  req.send(null)

  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      let response = req.response.Text
      let lenders = JSON.parse(response)

      let list = ''
      for (let i = 0; i < lenders.length; i++) {
        list +=
          "<li><a href='" + lenders[i].url + "'>" + lenders[i].name + '</a>'
      }

      ad.innerHTML = '<ul>' + list + '</ul>'
    }
  }
}

function chart(principal, interest, monthly, payments) {
  let graph = document.getElementById('graph')
  graph.width = graph.width

  if (arguments.length == 0 || !graph.getContext) return

  let g = graph.getContext('2d')
  let width = graph.width,
    height = graph.height

  function paymentToX(n) {
    return (n * width) / payments
  }

  function amountToY(a) {
    return height - (a * height) / (monthly * payments * 1.05)
  }

  g.moveTo(paymentToX(0), amountToY(0))
  g.lineTo(paymentToX(payments), amountToY(monthly * payments))
  g.lineTo(paymentToX(payments), amountToY(0))
  g.closePath()
  g.fillStyle = '#f88'
  g.fill()
  g.font = 'bold 12px sans-serif'
  g.fillText('Total com encargos', 20, 20)

  let equity = 0

  g.beginPath()
  g.moveTo(paymentToX(0), amountToY(0))

  for (let p = 1; p <= payments; p++) {
    let thisMonthsInterest = (principal - equity) * interest
    equity += monthly - thisMonthsInterest
    g.lineTo(paymentToX(p), amountToY(equity))
  }

  g.lineTo(paymentToX(payments), amountToY(0))
  g.closePath()
  g.fillStyle = 'green'
  g.fill()
  g.fillText('Valor total', 20, 35)

  let bal = principal
  g.beginPath()
  g.moveTo(paymentToX(0), amountToY(bal))
  for (let p = 1; p <= payments; p++) {
    let thisMonthsInterest = bal * interest
    bal -= monthly - thisMonthsInterest
    g.lineTo(paymentToX(p), amountToY(bal))
  }

  g.lineWidth = 3
  g.stroke()
  g.fillStyle = 'black'
  g.fillText('Balanço do empréstimo', 20, 50)

  g.textAlign = 'center'

  let y = amountToY(0)
  for (let year = 1; year * 12 <= payments; year++) {
    let x = paymentToX(year * 12)
    g.fillRect(x - 0.5, y - 3, 1, 3)
    if (year == 1) g.fillText('Ano', x, y - 5)
    if (year % 5 == 0 && year * 12 !== payments)
      g.fillText(String(year), x, y - 5)
  }

  g.textAlign = 'right'
  g.textBaseline = 'middle'
  let ticks = [monthly * payments, principal]
  let rightEdge = paymentToX(payments)
  for (let i = 0; i < ticks.length; i++) {
    let y = amountToY(ticks[i])
    g.fillRect(rightEdge - 3, y - 0.5, 3, 1)
    g.fillText(String(ticks[i].toFixed(0)), rightEdge - 5, y)
  }
}
