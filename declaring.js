// DECLARATION DES FONCTIONS


console.log('... déclaration des fonctions ...');
// ARRAYCREATION
		const arraycreation = (ante, anteTxtList) => {
			window.lastAnteSelect = ante;
			window.lastAnteSelectTxt = anteTxtList;
			document.getElementById(anteTxtList).style.color = 'white';
			if (ante == 'ante10') {	var anteIndex = 1; var antePourcentage = '10';}
			else if (ante == 'ante125') {	var anteIndex = 2; var antePourcentage = '125';}
			else if (ante == 'ante20') {	var anteIndex = 3; var antePourcentage = '20';}
			else if (ante == 'noAnte') {var anteIndex = 0; var antePourcentage = '0';}
		
			document.getElementById('helptxt').style.display = 'none';
			var array = document.createElement("div");							//TABLEAU (antes)
			array.id = ante;
			array.classList.add('table');
			document.getElementById('bloc').appendChild(array);
			for (n=0; n < (matrice[anteIndex].length + 1); n++) {										//LIGNES _
				var antes = antePourcentage;
				var colonne = document.createElement("div");
				colonne.id = positions[n];
				colonne.classList.add('position');
				// colonne.backgroundColor(fonction()).
				document.getElementById(array.id).appendChild(colonne);

				for (depth=20; depth>0; depth--){										//COLONNES !
					if (positions[n] == 'off') {
							var cell = document.createElement("div");										//CELLULES .
							var id = positions[n]  + depthIndex + "-" + antes;
							var virtdepthIndex = 'depth' + depthIndex;			
							cell.id = 'profondeurTable' + depth;
							cell.classList.add('arrawcell');
							cell.textContent = depth;}
					else {
						if (depth < 10) {var depthIndex =  '0'+depth;}
						else {var depthIndex = depth;}

						var cell = document.createElement("div");										//CELLULES .
						var id = positions[n]  + depthIndex + "-" + antes;
						var virtdepthIndex = 'depth' + depthIndex;
						var virtualMatrice = positions[n]  + depthIndex + "-" + antePourcentage;
						var colorCodeR = bright(virtualMatrice, _bright) / 1326 * 102 + 52;
						var colorCodeG = bright(virtualMatrice, _bright) / 1326 * 198;
						var colorCodeB = bright(virtualMatrice, _bright) / 1326 * 152;
						var color = 'rgb(' + colorCodeR + ',' + colorCodeG + ',' + colorCodeB + ')';
						cell.id = id;
						cell.classList.add('arrawcell',  virtdepthIndex);
						cell.onmouseover = bright;
						cell.onmouseout = clearmatrix;
						cell.style.backgroundColor = color;
						//
					}
					document.getElementById(colonne.id).appendChild(cell);

						var info = document.createElement("div");					//INFO
						var id = positions[n] + depthIndex + "-" + antes + "_info";
						info.id = id;
						info.classList.add("info");
						info.textContent = positionsAffichage[n] + ' :: ' + depth + 'bb';
						//
						document.getElementById(cell.id).appendChild(info);
					
				}
				// Colonne txt
				var cell = document.createElement("div")
				id = positionsAffichage[n];
				cell.id = id;
				cell.classList.add('arrawcell');
				cell.style.paddingTop = '5px';
				cell.textContent = id;
				cell.style.color = 'rgba(245, 241, 222, 0.4)';
				//cell.classList = affichagePositionTableau;
				document.getElementById(colonne.id).appendChild(cell);
			}
		}

// BRIGHT
		const bright = (matrixList, brightness) =>{
			try {var cellule = matrixList.target.id;
			} catch (error) {var cellule = matrixList;}
			
			if (cellule[5] == 0) {var anteCode=0;}
			else if (cellule[5] == 2) {var anteCode=3;}
			else if (cellule[6] == 2) {var anteCode=2;}
			else {var anteCode = 1;}
			var position = cellule[0] + cellule[1];
			var dizaine = 2;
			var unite = 3;
			var depth = String(cellule[2]) + String(cellule[3]);
			if (cellule[2] < 10) {var depth = String(parseInt(depth));}
			var depthIndex = parseInt(depth) - 1;
			var brightness = _bright;
			var brightcardsnumber = 0;
			var infotext = '';

			// traitement
			try {document.getElementById('profondeurTable' + depth).style.color = 'rgba(245, 241, 222, 1)';
			} catch (error) {}

			var n = positions.indexOf(position);

			// hightcard
			console.log(matrice[anteCode][n][depthIndex]);
			for (z = 0; z < matrice[anteCode][n][depthIndex].length; z++) {	//où n = position
				var matrixList = matrice[anteCode][depthIndex];
				var messager = matrice[anteCode][n][depthIndex][z];
				if (messager[1] == 'p'){hightcard=messager[2];}		//créer fonction
				else if (messager[1] == 'T'){hightcard=10;}
				else if (messager[1] == 'J'){hightcard=11;}
				else if (messager[1] == 'Q'){hightcard=12;}
				else if (messager[1] == 'K'){hightcard=13;}
				else if (messager[1] == 'A'){hightcard=14;}
				else {var hightcard = messager[1];}
				// lowcard
				if (messager[2] == 'T'){lowcard=10;}
				else if (messager[2] == 'J'){lowcard=11;}
				else if (messager[2] == 'Q'){lowcard=12;}
				else if (messager[2] == 'K'){lowcard=13;}
				else if (messager[2] == 'A'){lowcard=14;}
				else {var lowcard = messager[2];}

		
			//paire
				if (messager[1] == 'p') {
					for(i=0; i < 13; i++){
						if (messager[2] == cardOrder[i]) {
							var m = i;
							while (m < cardOrder.length) {
								var id = '_' + cardOrder[m] + cardOrder[m];
								document.getElementById(id).style.backgroundColor = _bright;
								brightcardsnumber += 6;
								m++;	
							}	
						}	
					}
				}	

			//hauteur
				if (messager[2] == 'x') {
					for(i=0; i<hightcard-2; i++){
						var ids = '_' + messager[1] + cardOrder[i] + 's';
						var ido = '_' + messager[1] + cardOrder[i] + 'o';
						document.getElementById(ids).style.backgroundColor = _bright;
						document.getElementById(ido).style.backgroundColor = _bright;
						brightcardsnumber += 16;
					}
				}

			//solitaire
				if(messager[4] == '.') {
					var id = '_' + messager[1] + messager[2] + messager[3];
					document.getElementById(id).style.backgroundColor = _bright;
					if (messager[3] == 's'){brightcardsnumber += 4;}
					else if (messager[3] == 'o'){brightcardsnumber += 12;}
				}
			//couleur
				else {
					if (messager[3] == 's') {				//diviser code par deux en modifiant 's' et 'o' en messager[3]
						for (i = lowcard; i < hightcard; i++){
							var id = '_' + messager[1] + cardOrder[i-2] + 's'; 
							document.getElementById(id).style.backgroundColor = _bright;
							brightcardsnumber += 4;
						}
					}
					if(messager[3] == 'o'){
						for (i = lowcard; i < hightcard; i++){
							var id = '_' + messager[1] + cardOrder[i-2] + 'o'; 
							document.getElementById(id).style.backgroundColor = _bright;
							brightcardsnumber += 12;
						}
					}
					var brightcardspourcent = brightcardsnumber/1326*100
				}
			}
			progressInfo('transparent');
			return brightcardsnumber;
		}

// CLEARMATRICE
		const clearmatrix = () => {
			for(n=cardOrder.length - 1; n>=0; n--){
				for(i=0; i<cardOrder.length ; i++) {
					if (n>i){
						var ids = '_' + cardOrder[n] + cardOrder[i] + 's';
						var ido = '_' + cardOrder[n] + cardOrder[i] + 'o';
						document.getElementById(ids).style.backgroundColor = _shadow;
						document.getElementById(ido).style.backgroundColor = _shadow;
					}
					else if (n==i){
						var id = '_' + cardOrder[n] + cardOrder[i];
						document.getElementById(id).style.backgroundColor = _shadow;
					}
				}
			}

			for (n=1; n<21; n++){
				document.getElementById('profondeurTable' + parseInt(n)).style.color = 'rgba(245,241,222,.4)';
				document.getElementById('profondeurTable' + parseInt(n)).style.borderLeft = 'none';
			}
		}	

// ARRAYCLEAR
		const arrayClear = () => {
			var node = document.getElementById('bloc');
			try {
				var child = document.getElementById(lastAnteSelect);
				node.removeChild(child);
			} catch(error){}
			document.getElementById(lastAnteSelectTxt).style.color = 'rgba(255,255,255,.4)';
		}

// PROGRESS INFO
		const progressInfo = (progress) => {
			console.log('.. ..')
			document.getElementById('progress_divtxt').style.color = progress;}

// GESTION BULLES
		const gestionbulles = (bulle) => {
			if (bulle == 'help'){
				document.getElementById('helpInfo1').style.display = 'block';
				document.getElementById('helpInfo2').style.display = 'block';
				document.getElementById('kezako').style.background = "url('img/kezakoBi.png')"; 
				document.getElementById('kezako').style.backgroundSize = "contain";
				document.getElementById('kezako').style.opacity = "1";
				document.getElementById('tips').style.opacity = ".3";
				document.getElementById('primaire').style.background = "url('img/matrice_vide.png')"; 
				document.getElementById('primaire').style.backgroundSize = "contain";
				document.getElementById('primaire').style.opacity = ".8";
				document.getElementById('textBulle').textContent = 'Help';
			}
			else if (bulle == 'index'){
				document.getElementById('helpInfo1').style.display = 'none';
				document.getElementById('helpInfo2').style.display = 'none';
				document.getElementById('primaire').style.background = "url('img/matrice.png')"; 
				document.getElementById('primaire').style.backgroundSize = "contain";
				document.getElementById('primaire').style.opacity = "1";
				document.getElementById('tips').style.opacity = ".3";
				document.getElementById('kezako').style.background = "url('img/kezako.png')"; 
				document.getElementById('kezako').style.backgroundSize = "contain";
				document.getElementById('kezako').style.opacity = ".3";
				document.getElementById('textBulle').textContent = 'Matrice';
			}
			else if (bulle == 'tips'){
				document.getElementById('helpInfo1').style.display = 'none';
				document.getElementById('helpInfo2').style.display = 'none';
				document.getElementById('primaire').style.background = "url('img/matrice_vide.png')"; 
				document.getElementById('primaire').style.backgroundSize = "contain";
				document.getElementById('primaire').style.opacity = ".8";
				document.getElementById('tips').style.opacity = "1";
				document.getElementById('kezako').style.background = "url('img/kezako.png')"; 
				document.getElementById('kezako').style.backgroundSize = "contain";
				document.getElementById('kezako').style.opacity = ".3";
				document.getElementById('textBulle').textContent = 'Tips';
			}
		}

console.log('ending.');

function copy_to_clipboard(clicked_id) {
		var clicked_child_id = clicked_id + '_adress';
		console.log(clicked_child_id);
    var text = document.getElementById(clicked_child_id).innerHTML;
    alert('Address ('+ text + ') copy on clipboard');
    navigator.clipboard.writeText(text).then(function() {
    }, function() {});
}

function QRCode_echo(show, actif) {
	document.getElementById('QRcode_displayer').style.backgroundColor = "white";
	document.getElementById('QRcodeTxt').style.display = "none";
	if (show == 1) {
		document.getElementById('QRcode').style.display = "inline-flex";}
	else {
		document.getElementById('QRcode').style.display = "none";
		document.getElementById('QRcode_displayer').style.backgroundColor = "transparent";
		document.getElementById('QRcodeTxt').style.display = "inline-flex";
	}
	if (actif == 'BTC'){
		document.getElementById('QRcode').style.backgroundImage = "url('img/BTC_QRCode.png')";
	}
	else if (actif == 'EGLD'){
		document.getElementById('QRcode').style.backgroundImage = "url('img/EGLD_QRCode.png')";
	}
} 
