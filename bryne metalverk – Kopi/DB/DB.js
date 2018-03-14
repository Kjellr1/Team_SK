var MetallDB = new Array();
MetallDB[0] = "Gull";
MetallDB[1] = "Sølv";
MetallDB[2] = "Bronze";

localStorage["MetallDB"] = JSON.stringify(MetallDB);

var Metall = JSON.parse(localStorage["MetallDB"]);
