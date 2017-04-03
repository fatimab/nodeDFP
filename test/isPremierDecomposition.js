// test/isPremierDecomposition.js
var isPremierDecomposition = require("../app/isPremierDecomposition.js");
var expect = require("chai").expect; //importer la fonction expect du module chai

describe("Vérifie si un nombre est premier. Si oui, retourne que le nombre est premier, si non, le décompose en facteurs premiers", function(){
  describe("Fonction isPremier", function()  {
    it("Teste si 24 est un nombre premier", function(){//explique ce que fait la fonction isPremier
		var res=isPremierDecomposition.isPremier(24);
		expect(res).to.equal(false);//24 n'est pas premier donc on s'attend à ce que le résultat de 'res' soit à false
	});
  }) ;
  describe("Fonction decompositionPremier", function()  {
     it("Décompose 24 en facteurs premiers", function(){ //explique ce que fait la fonction decompositionPremier
		var res=isPremierDecomposition.decompositionPremier(24);
		expect(res).to.equal(2+"^"+3+"x"+3);//La valeur à laquelle nous nous attendons pour la decomposition de 24
	}); 
  }) ;
}) ;