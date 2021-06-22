/**
 * @this calc.js
 * @author Anorak
 * @description Fonctions de calculs v1:
 * 
 * Taux de remise = (1 - Prix de d’achat net / Prix d’achat brut) x 100
 * Prix d’achat net = Prix d’achat brut x (1 – taux de remise)
 * Prix de vente net = prix d’achat net x coefficientmultiplicateur
 * Coefficient multiplicateur = Prix de vente net / Prix d’achat net
 */


function calcTauxRemise(prixAchatNet, prixAchatBrut) {

    return (1 - prixAchatNet / prixAchatBrut) * 100;
}

function calcPrixAchatNet(prixAchatBrut, tauxRemise) {

    return prixAchatBrut * (1 - tauxRemise);
}

function calcPrixVenteNet(prixAchatNet, coeffMult) {

    return prixAchatNet * coeffMult;
}

function calcCoeffMult(prixVenteNet, prixAchatNet) {

    return prixVenteNet / prixAchatNet;
} 