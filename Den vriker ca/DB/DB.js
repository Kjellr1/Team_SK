var  FigurFormDB = ["Kule", "Kjegle", "Sylinder"]

var MetallDB = ["Gull", "Sølv", "Bronze", "Jern", "Aluminium"]

var MetallPrisCm3DB = {Gull:'1710', Sølv:'125', Bronze:'80', Jern:'5', Aluminium:'20'}
var MetallTetthetDB = {Gull:'19', Sølv:'10.5', Bronze:'80', Jern:'7.88', Aluminium:'2.7'}


localStorage["MetallTetthetDB"] = JSON.stringify(MetallTetthetDB);
localStorage["FigurFormDB"] = JSON.stringify(FigurFormDB);
localStorage["MetallDB"] = JSON.stringify(MetallDB);
localStorage["MetallPrisCm3DB"] = JSON.stringify(MetallPrisCm3DB);

var MetallTetthet = JSON.parse(localStorage["MetallTetthetDB"]);
var FigurForm = JSON.parse(localStorage["FigurFormDB"]);
var Metall = JSON.parse(localStorage["MetallDB"]);
var MetallPris = JSON.parse(localStorage["MetallPrisCm3DB"]);
