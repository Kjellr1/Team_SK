
var  FigurFormDB = ["Kule", "Sylinder", "Kjegle"]

var MetallDB = ["Gull", "Sølv", "Bronze", "Jern", "Aluminium"]

var MetallPrisCm3DB = {gull:'1719', sølv:'125', bronze:'80', jern:'5', aluminium:'20'}

localStorage["FigurFormDB"] = JSON.stringify(FigurFormDB);
localStorage["MetallDB"] = JSON.stringify(MetallDB);
localStorage["MetallPrisCm3DB"] = JSON.stringify(MetallPrisCm3DB);

var FigurForm = JSON.parse(localStorage["FigurFormDB"]);
var Metall = JSON.parse(localStorage["MetallDB"]);
var MetallPris = JSON.parse(localStorage["MetallPrisCm3DB"]);
