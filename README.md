# Trading Game

## But : 

* Une platform de simulation boursière.


## Participants Groupe
* 1- Yvann
* 2- Tom
* 3- Gor



## Fonctionnalités : 
 
 * application multi-utilisateur (s'enregistrer / supprimer son compte)
 * Possibilité pour un admin de créer un ou plusieurs Jeux d'investissement (durée en nb de jours, montant initiale du portefeuille, frais de transactions, nombre de portefeuilles max par joueur)
 * Tous les jours ouvré la platform doit récupérer les cours de la veille et valoriser les portefeuilles
 * la platform doit supporter tous les ordres de bourses valides (https://www.boursier.com/guide/devenir-trader-en-bourse/type-ordres-de-bourse)
 * les ordres sont évalués une fois les données de la veille actualisées  
 * la homepage anonyme comporte le classement des tournois en cours
 * la homepage du joueur lui permet de visualiser les positions pour un jeu / portefeuille 
 * hors scope : on ne tient pas compte de la volatilité ni de la vente a découvert de titres

 
 
## si 3 éme membre

 * le jeu de simulation peut être lancer en 2 modes : soit live (décrit plus haut) soit historisé : le jeu commence a une date dans le passé
 * a cette fin les données historiques doivent être préchargé en base (intégralité actions euro-next paris), et le jeu configurer pour tourner sur une base de temps. (1 jours = 10 minutes)


# https://tradinggame-api.oups.net
