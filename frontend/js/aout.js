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
    getElemId("deleteAssignation").hidden = true;
    getElemId("addAssignation").hidden = true;
    getElemId('addDevice').hidden = true;
    getElemId('deleteDevice').hidden = true;
    getElemId('users').hidden = true;
    getElemId('devices').hidden = true;
    getElemId('divAffichageUser').hidden = true;
    getElemId('usersDiv').hidden = true;
    getElemId('types').hidden = true;
    getElemId("usersBody").innerHTML = "";
    getElemId("resultatRecherche").hidden = true;
    getElemId("idRecherche").value = "";
    getElemId("confirmDelete").hidden = true;
    getElemId("check").checked = true;
    getElemId("messageRefus").hidden = true;
    getElemId("messageAccepter").hidden = true;
    getElemId("confirmDeleteAssi").hidden = true;
    getElemId("confirmAddAssi").hidden = true;
    getElemId("idDeleteDevice").value = "";
    getElemId("nameAddDevice").value = "";
    getElemId("messageAjouter").hidden = true;
    getElemId("formAddDevice").categ.value = "P";
    getElemId("deviceIdDeleteAssi").value = "";
    getElemId("delAssAccepted").hidden = true;
    getElemId("confirmAddAssi").hidden = true;
    getElemId("deviceIdAddAssi").value = "";
    getElemId("userIdAddAssi").value = "";
    getElemId("addAssAccepted").hidden = true;

    return false
}

function goToDeleteAssignation() {
    getElemId('accueil').hidden = true;
    getElemId('connexion').hidden = true;
    getElemId('managment').hidden = true;
    getElemId('addDevice').hidden = true;
    getElemId('deleteDevice').hidden = true;
    getElemId("deleteAssignation").hidden = false;
    getElemId("addAssignation").hidden = true;
}

function goToAddAssignation() {
    getElemId('accueil').hidden = true;
    getElemId('connexion').hidden = true;
    getElemId('managment').hidden = true;
    getElemId('addDevice').hidden = true;
    getElemId('deleteDevice').hidden = true;
    getElemId("deleteAssignation").hidden = true;
    getElemId("addAssignation").hidden = false;
}

function goToAddDevice() {
    getElemId('accueil').hidden = true;
    getElemId('connexion').hidden = true;
    getElemId('managment').hidden = true;
    getElemId('addDevice').hidden = false;
    getElemId('deleteDevice').hidden = true;
    getElemId("deleteAssignation").hidden = true;
    getElemId("addAssignation").hidden = true;
}

function goToDeleteDevice() {
    getElemId('accueil').hidden = true;
    getElemId('connexion').hidden = true;
    getElemId('managment').hidden = true;
    getElemId('addDevice').hidden = true;
    getElemId('deleteDevice').hidden = false;
    getElemId("deleteAssignation").hidden = true;
    getElemId("addAssignation").hidden = true;
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

    afficherTablets('T');
}

/****************************** Page de connexion *********************************/

function connexion() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/get_accessTable', true);
    xhr.onload = function testConnexion() {
        let tableau = JSON.parse(xhr.responseText);
        if (tableau[0].accessUser == getElemId("inputUser").value && tableau[0].accessPassword == getElemId("inputPassword").value){
            goToManagment();
        }
        else {
            getElemId("messageErreure").hidden = false;
        }
    };
    xhr.send();
    return false;
}

/*********************************** Page liste Users **********************************/

function usersList() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/get_usersTable', true);
    xhr.onload = function genererBoutons() {
        let tableau = JSON.parse(xhr.responseText);
        let boutons = "";
        for (let i of tableau) {
            boutons += "<button onclick='afficherDevicesUser("+ i.userId +")'>"+ i.userPrenom + " " + i.userNom + " : " + i.userId +  "</button><br>"
        }
        getElemId("usersDiv").innerHTML = boutons;
    };
    xhr.send();
    goToUsers();
}

function afficherDevicesUser(id) {
    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost/get_userDevices?id=' + id, true );
    xhr.onload = function genererTable() {
        let tableau = JSON.parse(xhr.responseText);
        if (tableau.length >= 1){
            let tbody = "<tr><td>" + tableau[0].userPrenom + " "+ tableau[0].userName + "</td><td>"+ tableau[0].deviceName +"</td><td>"+ tableau[0].deviceId +"</td><td>"+ typeIdToTypeName(tableau[0].deviceType) +"</td></tr>";
            for (let i=1 ;i < tableau.length ; i++) {
                tbody += "<tr><td></td><td>" + tableau[i].deviceName + "</td><td>" + tableau[i].deviceId + "</td><td>" + typeIdToTypeName(tableau[i].deviceType) + "</td></tr>";
            }
            getElemId("usersBody").innerHTML = tbody;
        }
    };
    xhr.send();
    getElemId('divAffichageUser').hidden = false;
    getElemId('usersDiv').hidden = true;
}

function typeIdToTypeName(typeId) {
    if (typeId.toUpperCase() == "P") {
        return "Phone"
    }
    else if (typeId.toUpperCase() == "C") {
        return "Computer"
    }
    else {
        return "Tablet"
    }
}

/******************************** Page Shearch Device ***********************************/

function searchDevice(){
    let deviceId = getElemId("idRecherche").value;

    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/get_assignation?id=' + deviceId, true);
    xhr.onload = function genererNotif() {
        let tableau = JSON.parse(xhr.responseText);
        if (tableau.length == 1) {
            let phrase = "<p>L'appareil portant l'id "+ deviceId + " est utilisé par " + tableau[0].userPrenom + " " + tableau[0].userName +".</p>"
            getElemId("resultatRecherche").innerHTML = phrase;
            getElemId("resultatRecherche").hidden = false;
        }
        else {
            let phrase = "<p>L'appareil portant l'id " + deviceId +" n'est pas attribué ou n'existe pas.</p>"
            getElemId("resultatRecherche").innerHTML = phrase;
            getElemId("resultatRecherche").hidden = false;
        }
    };
    xhr.send();
    return false;
}

/********************************* Page Types *****************************************/

function afficherTablets(param) {
    getElemId("titreTableTypes").innerText = "Tablets";

    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/get_devicesFromType?type=' + param, true);
    xhr.onload = function genererTable() {
        let tableau = JSON.parse(xhr.responseText);
        let tbody = "";
        if (tableau.length >=1){
            for (let i of tableau) {
                tbody += "<tr><td>"+ i.deviceName + " (id : " + i.deviceId +")</td></tr>"
            }
            getElemId("tbodyType").innerHTML = tbody;
        }
    };
    xhr.send();
}

function afficherComputers(param) {
    getElemId("titreTableTypes").innerText = "Computers";

    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/get_devicesFromType?type=' + param, true);
    xhr.onload = function genererTable() {
        let tableau = JSON.parse(xhr.responseText);
        let tbody = "";
        if (tableau.length >=1){
            for (let i of tableau) {
                tbody += "<tr><td>"+ i.deviceName + " (id : " + i.deviceId +")</td></tr>"
            }
            getElemId("tbodyType").innerHTML = tbody;
        }
    };
    xhr.send();
}

function afficherPhones(param) {
    getElemId("titreTableTypes").innerText = "Phones";

    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/get_devicesFromType?type=' + param, true);
    xhr.onload = function genererTable() {
        let tableau = JSON.parse(xhr.responseText);
        let tbody = "";
        if (tableau.length >=1){
            for (let i of tableau) {
                tbody += "<tr><td>"+ i.deviceName + " (id : " + i.deviceId +")</td></tr>"
            }
            getElemId("tbodyType").innerHTML = tbody;
        }
    };
    xhr.send();
}

/********************************* Delete Device *****************************************/

function askConfirmation() {
    debugger;
    let deviceASupp = getElemId("idDeleteDevice").value;

    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/get_devicesId',true);
    xhr.onload = function testExistence() {
        let tableau = JSON.parse(xhr.responseText);

        for (let i = 0; i < tableau.length; i++ ) {
            if (tableau[i].deviceId == deviceASupp) {
                getElemId('confirmDelete').hidden = false;
                getElemId("messageRefus").hidden = true;
                break;
            }
            else if (i + 1 == tableau.length) {
                getElemId("idDeleteDevice").value = "";
                getElemId("messageRefus").hidden = false;
            }
        }
    };
    xhr.send();
}

function confirmerSupp() {
    debugger;
    let deviceASupp = getElemId("idDeleteDevice").value;

    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost/deleteDevice?id=' + deviceASupp, true );
    xhr.send();
    getElemId("messageAccepter").hidden = false;
    return false;
}

/************************************* AddDevice *************************************/

function addDevice() {
    let type = getElemId("formAddDevice").categ.value;
    let deviceName = getElemId("nameAddDevice").value;

    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/addDevice?name=' + deviceName + "&type=" + type,true);
    xhr.send();
    getElemId("messageAjouter").hidden = false;

    return false;
}



/********************************** Delete Assignation *********************************/

function askDeleteAssi() {
    let deviceId = getElemId("deviceIdDeleteAssi").value;

    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/get_devicesId',true);
    xhr.onload = function testExistence() {
        let tableau = JSON.parse(xhr.responseText);

        for (let i = 0; i < tableau.length; i++ ) {
            if (tableau[i].deviceId == deviceId) {
                getElemId("confirmDeleteAssi").hidden = false;
                getElemId("delAssRefus").hidden = true;
                break;
            }
            else if (i + 1 == tableau.length) {
                getElemId("deviceIdDeleteAssi").value = "";
                getElemId("delAssRefus").hidden = false;
            }
        }
    };
    xhr.send();
}

function confirmDeleteAssig() {
    let deviceId = getElemId("deviceIdDeleteAssi").value;

    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/deleteAssignation?id=' + deviceId, true);
    xhr.send();

    getElemId("delAssAccepted").hidden = false;
    return false;
}

/************************************* Add Assignation *************************************/

function verifUser() {
    debugger;
    let userId = getElemId("userIdAddAssi").value;

    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/get_usersTable',true);
    xhr.onload = function testExistence() {
        let tableau = JSON.parse(xhr.responseText);

        for (let i = 0; i < tableau.length; i++ ) {
            if (tableau[i].userId == userId) {
                break;
            }
            else if (i + 1 == tableau.length) {
                getElemId("userIdAddAssi").value = "";
                break;
            }
        }
        verifDevice();
    };
    xhr.send();
}

function verifDevice() {
    let deviceId = getElemId("deviceIdAddAssi").value;

    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/get_devicesId',true);
    xhr.onload = function testExistence() {
        let tableau = JSON.parse(xhr.responseText);

        for (let i = 0; i < tableau.length; i++ ) {
            if (tableau[i].deviceId == deviceId) {
                if (tableau[i].used == "NO") {
                    break;
                }
            }
            else if (i + 1 == tableau.length) {
                getElemId("deviceIdAddAssi").value = "";
            }
        }
        if (getElemId("deviceIdAddAssi").value == "" || getElemId("userIdAddAssi").value == "") {
            getElemId("confirmAddAssi").hidden = true;
            getElemId("addAssRefus").hidden = false;
        }
        else {
            getElemId("confirmAddAssi").hidden = false;
            getElemId("addAssRefus").hidden = true;

        }
    };
    xhr.send();
}

function addAssignation() {
    let deviceId = getElemId("deviceIdAddAssi").value;
    let userId = getElemId("userIdAddAssi").value;

    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/addAssignation?user='+ userId + "&device="+ deviceId, true);
    xhr.send();
    getElemId("confirmAddAssi").hidden = true;
    getElemId("addAssAccepted").hidden = false;
    return false;
}