var zelena = new Line('Zelena', [])
zelena.add(new Stop('Polna', 1000))
zelena.add(new Stop('Arnolec', 1000))
zelena.add(new Stop('Cerna', 1000))
zelena.add(new Stop('Blizkov', 1000))
zelena.add(new Stop('Merin', 1000))
zelena.add(new Stop('Otin', 1000))
zelena.add(new Stop('Uhrinov', 1000))
zelena.add(new Stop('Oslavice', 1000))
zelena.add(new Stop('Velmez', 1000))
zelena.add(new Stop('Krizanov', 1000))

var cerna = new Line('Cerna', [])
cerna.add(new Stop('Jihlava', 1000))
cerna.add(new Stop('Beranov', 1000))
cerna.add(new Stop('Rehorov', 1000))
cerna.add(new Stop('Merin', 1000))
cerna.add(new Stop('Zhor', 1000))
cerna.add(new Stop('Velmez', 1000))
cerna.add(new Stop('Bites', 1000))
cerna.add(new Stop('Brno', 1000))

var oranzova = new Line('Oranzova', [])
oranzova.add(new Stop('Brtnice', 1000))
oranzova.add(new Stop('Kamenice', 1000))
oranzova.add(new Stop('Merin', 1000))
oranzova.add(new Stop('Blizkov', 1000))
oranzova.add(new Stop('Netin', 1000))
oranzova.add(new Stop('Radostin', 1000))
oranzova.add(new Stop('Ostrov', 1000))

var modra = new Line('Modra', [])
modra.add(new Stop('Krizanov', 1000))
modra.add(new Stop('Ostrov', 1000))

var lines = [zelena, cerna, oranzova, modra]
