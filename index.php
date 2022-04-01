<!DOCTYPE html> <!-- reajuster couleur elltable en f) du % de cartes vertes-->
<html lang='fr'>
<head>
	<meta charset="UTF-8">
	<title> Push or Fold </title>
	<meta name='description' content="Ce site permet de générer dynamiquement des tableaux de Push or Fold et de les associer à une matrice de cartes intuitive. Cette représentation innovante permet une utilsation rapide et facilement lisible de l'équilibre de Nash lors d'une session de MTT.">
 	<link rel='stylesheet' href='form.css'/>											<!-- form_v1.0.0a.css  -->
 	<link rel="icon" href="img/favPileJeton.png">
	<script type="text/javascript" src="data.js"></script>
	<script type="text/javascript" src="declaring.js"></script>		<!-- declaring_v1.0.0b.js  -->
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-MR3V39LCFW"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-MR3V39LCFW');
	</script>
</head>

<body onload="progressInfo('transparent')">
	<script type="text/javascript">
		matriceDNA();
	</script>

	<section id = "matrix">
		<div id='progress_divtxt'> <p> &ensp; ..in progress </p> </div>
		<?php include("includes/bulles.php"); ?>

		<aside id='bloc' class="blocs">
			<div id = "listAnte">
				<!-- <div id = "ante0" class='celluleAnte' onmousedown='arrayClear()' onmouseup="arraycreation('noAnte', 'ante0')"><p>no ante</p></div>
				<div id = "ante1" class='celluleAnte' onmousedown='arrayClear()' onmouseup="arraycreation('ante10', 'ante1')"><p>10%</p></div> -->
				<div id = "ante0" class='celluleAnte' onmousedown='arrayClear()' onmouseup="arraycreation('noAnte', 'ante0')"><p>| no ante |</p></div>
				<div id = "ante1" class='celluleAnte' onmousedown='arrayClear()' onmouseup="arraycreation('ante10', 'ante1')"><p>| 10% |</p></div>
				<div id = "ante12" class='celluleAnte' onmousedown='arrayClear()' onmouseup="arraycreation('ante125', 'ante12')"><p>| 12,5% |</p></div>
				<div id = "ante2" class='celluleAnte' onmousedown='arrayClear()' onmouseup="arraycreation('ante20', 'ante2')"><p>| 20% |</p></div>
				<!-- <div id = "ante2" class='celluleAnte' onmousedown='arrayClear()' onmouseup="arraycreation('ante20', 'ante2')"><p>20%</p></div> -->
			</div>

			<div id = "helptxt">
				<p>
					<h1> <strong>Push</strong> or <strong>Fold</strong><br/></h1>
					<p style="font-family: tintin; font-size: 18px;">
						<strong>pushorfold.org</strong> vous permet d'obtenir les ranges de <strong>push</strong> de manière très dynamique ce qui permet une utilisation en direct lors d'un <strong>tournoi</strong>. <br/>
						Son utilisation est intuitive, la représentation des <strong>ranges</strong> est faite sous forme de <strong>matrice</strong>. Le texte ci-dessous en explique le fonctionnement.
					</p>
				</p>
				<p style = "font-family: _TINTIN">
					<h2> Etape I </h2>
					Choisissez ci-dessus le pourcentage d'ante en vigueur sur le tournoi <br/>
					(BB/ante * 100)<br/>
					<span style="font-family: tintin; font-size: 120%">où BB = montant de la grosse blinde et ante = montant de la mise obligatoire à chaque nouvelle distribution de cartes.</span>
				</p>
				<p>
					<h2> Etape II </h2>
					Dans le tableau qui apparaitra ici selectionnez votre hauteur de tapis en BB (lignes) et votre position à la table (colonnes). <br/>
					Cherchez vos cartes dans la matrice
					<br/>
					Les cases s'éclairant <span style='color: green'>en vert</span> sont à ouvrir à tapis <strong>(PUSH)</strong>,  <span style='color: rgb(135,135,135);'>les autres</span> sont à coucher <strong>(FOLD)</strong>. <br/>
				</p>
			</div>

			<!-- MATRICE -->
			<?php include("matrice.php"); ?>
		</aside>
	</section>

	<section id='help'>
		<div id='blocHelp' class="blocs">
			<a  href='#matrix'>
			<div id='accesMatrice'>
				<h1>^ Accéder aux matrices ^ </h1>
			</div>
			</a>
			<p id='txtSectionHelp'>
				L’<strong>équilibre de Nash</strong> est dans le domaine de la <em>théorie des jeux</em>, un <strong>équilibre</strong> auquel le joueur prend une décision optimale, c’est à dire que son <em>ratio gain/risque</em> est positif.
				<br/>
				<br/>Au <strong>poker</strong> cet <strong>équilibre</strong> a été adaptée dans les <strong>tableaux de Push or Fold</strong> (ou <strong>tableaux de Nash</strong>) où ils interviennent, notamment en <strong>tournoi</strong>, lorsque le <strong>tapis</strong> d’un joueur devient trop petit pour réaliser encore plusieurs tours de table. 
				<br/> (les tableaux sont donnés pour une profondeur maximale de 20bb ; l’impact de la <strong>variance</strong> à une telle profondeur sera important)
				<br/>Ils permettent alors de prédire en fonction de votre nombre de <em>jetons</em> (en BB*) , de votre <strong>position</strong> à la table mais également du pourcentage d’<strong>ante</strong> en vigueur si votre main doit être ouverte à tapis ou coucher directement. 
				<br/>
				<br/><span style="font-family: 'tintin'">Cet équilibre mathématique permet d’obtenir un <strong>éventail de mains</strong> à <strong>ouvrir</strong> à tapis (<strong>open shove</strong>) dont l’<strong>espérance de gains</strong> est positive (<strong>ev+</strong>).</span>
				<br/><br/>&emsp; Cependant,
				<br/>votre <em>image à la table</em>, mais également les <em>profils de vos adversaires</em> et la dynamique générale sont à prendre en compte afin d’élargir ou de resserrer ces <strong>ranges</strong>.
			</p>		

			<!--<a href='../src/pushOrFold.pdf' download='Tableaux de Nash'>
				<div id='downloadSrcDiv'> 
					<p>
						<h1>
							Download PDF source
						</h1>
					</p>
				</div>
			</a>
		-->
		</div>
	</section>

	<section id='cryptips' style="position: absolute; left: 0vw; top: 200vh; background-image: url(img/background13.jpg);">
		<div style="position: absolute; left: calc(50% - 50vw  / 2); top: 32vh; width: 50vw; height: 80vh; text-align: center;  ">
			<button id="BTC" class="tipsButton tips_crypto" onmouseover="QRCode_echo(1, 'BTC')" onmouseleave="QRCode_echo(0)" onclick="copy_to_clipboard(this.id);" title='Clic to copy BTC address on your clipboard' >
				<img src="img/bitcoinSymbol.png" class="iconeCrypto" style="rotate: 10deg;"/>
				<div id="BTC_adress" style="display: none;">bc1q60nyrjhptgpnawegyx5x5cqx380pd63k7k96qk</div>
			</button>

			<button id="EGLD" class="tipsButton tips_crypto" onmouseover="QRCode_echo(1, 'EGLD')" onmouseleave="QRCode_echo(0)" onclick="copy_to_clipboard(this.id);" title='Clic to copy EGLD address on your clipboard' >
				<img src="img/elrondSymbol.png" class="iconeCrypto" style="filter: invert(100%);" />
				<div id="EGLD_adress" style="display: none;">erd1p2t6ep6nnuktu2devlaxrrhm8y24t26say26jmjhwce4yqdcprfqk66usy</div>
			</button>
			<br/>

			<button id="QRcode_displayer" class="tipsButton" style="background-size: contain; margin-top: 2px;">
				<div id="QRcode" style="display: none;"></div>
				<p id="QRcodeTxt">QR CODE <br/> DISPLAY</p>
			</button>
			<br/>
		</div>


	</section>
</body>
</html>