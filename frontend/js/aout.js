"use strict";

/********************************* Fonctions Utiles ******************************/

function getElemId(param) {
    return document.getElementById(param);
}

function getElemClass(param) {
    return document.getElementsByClassName(param)
}

function goToConnexion() {
    getElemId('accueil').hidden = true;
    getElemId('connexion').hidden = false;
}

function goToManagment() {
    getElemId('accueil').hidden = true;
    getElemId('connexion').hidden = true;
    getElemId('managment').hidden = false;
    getElemId('addDevice').hidden = true;
    getElemId('deleteDevice').hidden = true;
    getElemId('users').hidden = true;
    getElemId('devices').hidden = true;
    getElemId('divAffichageUser').hidden = true;
    getElemId('usersDiv').hidden = true;
    getElemId('types').hidden = true;

    return false
}

function goToAddDevice() {
    getElemId('accueil').hidden = true;
    getElemId('connexion').hidden = true;
    getElemId('managment').hidden = true;
    getElemId('addDevice').hidden = false;
    getElemId('deleteDevice').hidden = true;
}

function goToDeleteDevice() {
    getElemId('accueil').hidden = true;
    getElemId('connexion').hidden = true;
    getElemId('managment').hidden = true;
    getElemId('addDevice').hidden = true;
    getElemId('deleteDevice').hidden = false;
}

function askConfirmation() {
    getElemId('confirmDelete').hidden = false;

}

function goToUsers() {
    getElemId('accueil').hidden = true;
    getElemId('connexion').hidden = true;
    getElemId('managment').hidden = true;
    getElemId('addDevice').hidden = true;
    getElemId('deleteDevice').hidden = true;
    getElemId('users').hidden = false;
    getElemId('devices').hidden = true;
    getElemId('usersDiv').hidden = false;

}

function goToDevices() {
    getElemId('accueil').hidden = true;
    getElemId('connexion').hidden = true;
    getElemId('managment').hidden = true;
    getElemId('addDevice').hidden = true;
    getElemId('deleteDevice').hidden = true;
    getElemId('users').hidden = true;
    getElemId('devices').hidden = false;
    getElemId('resultatRecherche').hidden = true;

}

function afficherResultat() {
    getElemId('resultatRecherche').hidden = false;

    return false;
}

function afficherDevicesUser() {
    getElemId('divAffichageUser').hidden = false;
    getElemId('usersDiv').hidden = true;
}

function goToTypes() {
    getElemId('accueil').hidden = true;
    getElemId('connexion').hidden = true;
    getElemId('managment').hidden = true;
    getElemId('addDevice').hidden = true;
    getElemId('deleteDevice').hidden = true;
    getElemId('users').hidden = true;
    getElemId('devices').hidden = true;
    getElemId('resultatRecherche').hidden = true;
    getElemId('types').hidden = false;
}

function afficherTablets() {
    getElemId("titreTableTypes").innerText = "Tablets";
}

function afficherComputers() {
    getElemId("titreTableTypes").innerText = "Computers";
}

function afficherPhones() {
    getElemId("titreTableTypes").innerText = "Phones";
}