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