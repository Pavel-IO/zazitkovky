
function timeToInt(str) {
  let parts = str.split(':')
  return 60 * parseInt(parts[0]) + parseInt(parts[1])
}

function intToTime(num) {
  return Math.floor(num / 60) + ':' + ((num % 60) + '').padStart(2, '0')
}

var zelena = new Line('Zelena', [])
zelena.add(new Stop('Polna'))
zelena.add(new Stop('Arnolec'))
zelena.add(new Stop('Cerna'))
zelena.add(new Stop('Blizkov'))
zelena.add(new Stop('Merin'))
zelena.add(new Stop('Otin'))
zelena.add(new Stop('Uhrinov'))
zelena.add(new Stop('Oslavice'))
zelena.add(new Stop('Velmez'))
zelena.add(new Stop('Krizanov'))
zelena.setDistances([10, 7, 3, 8, 2, 12, 8, 3, 7])
zelena.addForward(timeToInt('8:00'))
zelena.addForward(timeToInt('10:00'))
zelena.addForward(timeToInt('12:00'))
zelena.addForward(timeToInt('14:00'))
zelena.addForward(timeToInt('16:00'))
zelena.addForward(timeToInt('18:00'))
zelena.addForward(timeToInt('20:00'))
zelena.addBackward(timeToInt('9:00'))
zelena.addBackward(timeToInt('11:00'))
zelena.addBackward(timeToInt('13:00'))
zelena.addBackward(timeToInt('15:00'))
zelena.addBackward(timeToInt('17:00'))
zelena.addBackward(timeToInt('19:00'))
zelena.addBackward(timeToInt('21:00'))

var cerna = new Line('Cerna', [])
cerna.add(new Stop('Jihlava'))
cerna.add(new Stop('Beranov'))
cerna.add(new Stop('Rehorov'))
cerna.add(new Stop('Merin'))
cerna.add(new Stop('Zhor'))
cerna.add(new Stop('Velmez'))
cerna.add(new Stop('Bites'))
cerna.add(new Stop('Brno'))
cerna.setDistances([7, 5, 3, 8, 2, 9, 8])
cerna.addForward(timeToInt('9:15'))
cerna.addForward(timeToInt('10:45'))
cerna.addForward(timeToInt('12:10'))
cerna.addForward(timeToInt('14:20'))
cerna.addForward(timeToInt('15:30'))
cerna.addForward(timeToInt('17:05'))
cerna.addForward(timeToInt('18:25'))
cerna.addForward(timeToInt('19:30'))
cerna.addBackward(timeToInt('9:00'))
cerna.addBackward(timeToInt('11:11'))
cerna.addBackward(timeToInt('13:08'))
cerna.addBackward(timeToInt('15:20'))
cerna.addBackward(timeToInt('17:40'))
cerna.addBackward(timeToInt('21:30'))

var oranzova = new Line('Oranzova', [])
oranzova.add(new Stop('Brtnice'))
oranzova.add(new Stop('Kamenice'))
oranzova.add(new Stop('Merin'))
oranzova.add(new Stop('Blizkov'))
oranzova.add(new Stop('Netin'))
oranzova.add(new Stop('Radostin'))
oranzova.add(new Stop('Ostrov'))
oranzova.setDistances([6, 20, 25, 18, 12, 9])
oranzova.addForward(timeToInt('9:15'))
oranzova.addForward(timeToInt('10:45'))
oranzova.addForward(timeToInt('12:10'))
oranzova.addForward(timeToInt('14:20'))
oranzova.addForward(timeToInt('15:30'))
oranzova.addForward(timeToInt('17:05'))
oranzova.addForward(timeToInt('18:25'))
oranzova.addForward(timeToInt('19:30'))
oranzova.addBackward(timeToInt('9:00'))
oranzova.addBackward(timeToInt('11:11'))
oranzova.addBackward(timeToInt('13:08'))
oranzova.addBackward(timeToInt('15:20'))
oranzova.addBackward(timeToInt('17:40'))
oranzova.addBackward(timeToInt('21:30'))

var modra = new Line('Modra', [])
modra.add(new Stop('Krizanov'))
modra.add(new Stop('Ostrov'))
modra.setDistances([18])
modra.addForward(timeToInt('9:00'))
modra.addForward(timeToInt('12:00'))
modra.addForward(timeToInt('15:00'))
modra.addForward(timeToInt('18:00'))
modra.addForward(timeToInt('23:00'))
modra.addBackward(timeToInt('10:00'))
modra.addBackward(timeToInt('14:11'))
modra.addBackward(timeToInt('16:08'))
modra.addBackward(timeToInt('18:20'))
modra.addBackward(timeToInt('22:40'))

var lines = [zelena, cerna, oranzova, modra]
