# JSSQLAOUT2020
Matthew Everard HE201678
Partie à représenter les deux (S1 - Aspects Logique et Programmation, S2 - Aspects Structures et Données)

Mon projet consiste a créé pour un service informatique une page programmé en HTML, CSS, JS et SQL qui regroupe l’ensemble d’un parc informatique et informe sur quel user possède quel device. Chaque user ainsi que chaque device aura un id qui lui est propre. Il y aura une page de connexion pour accéder à la page.

# Aspects implémentés
* La partie backend sert à stocker les utilisateurs, les appareils ainsi que les types.
* La partie frontend sert à gérer la partie client et de faire le lien avec la partie backend via les webservices.

# Détail api rest
* Webservice root :
  - Fait appel à la procédure get_page qui permet d'ouvrir notre fichier html.
  - Comporte un seul paramètre de type char qui représente le nom de notre fichier Html.
  - Type raw.
 
  
* Webservice js :
  - Fait appel à la procédure get_page qui permet de lier notre js à notre html.
  - Comporte un seul paramètre de type char qui représente le nom de notre fichier Js.
  - Type raw.
  
  
* Webservice css :
  - Fait appel à la procédure get_page qui permet de lier notre css à notre html.
  - Comporte un seul paramètre de type char qui représente le nom de notre fichier Css.
  - Type raw.
 
  
* Webservice imgs :
  - Fait appel à la procédure get_page qui permet de lier notre js à notre html.
  - Comporte un seul paramètre de type char qui représente le nom de notre fichier Js.
  - Type raw.

  
* Webservice get_sondage  :
  - Fait appel à la procédure get_sondage qui permet de récupérer dans la base de données le titre du sondage, les réponses et    leurs nombres de votes, le nombre de participant ainsi que l'id du créateur en les tranformant en un objet JSON.
  - Comporte un seul paramètre de type integer qui représente l'ID du sondage que l'on souhaite récupérer.
  - Type JSON

  
* Webservice addAssignation :
  - Fait appel à la procédure AddAssignation qui permet de ajouter dans la base de données une nouvelle assignation d'un appareil à un utulisateur.
  - comporte deux parametres de type integer qui représente l'id de l'appareil ainsi que l'id de l'utulisateur
  - type RAW
 
  
* Webservice addDevice :
  - Fait appel à la procédure AddDevice qui permet de modifier( ajouter) dans la base de données le nom de l'appareil ainsi que son Type
  - Comporte deux parametre de type varchar qui représentre le nom de l'appareil ainsi que le type
  - Type RAW
  

* Webservice deleteAssignation :
  -fait appel à la procédure deleteAssignation qui permet de modifier ( supprimer ) dans la base de données une assignation qui relie l'user à son device.
  - Comporte un seul paramètre de type integer.
  - Type RAW
  
  
* Webservice deleteDevice :
  - Fait appel à la procédure deletDevice qui permet de mofifier (supprimer)  dans la base de données un device. 
  - Comporte 1 paramètre.
  - Type raw
 
  
* Webservice get_accesTable :
  - Fait appel à la procédure get_accesTable qui permet de verifier le nom d'utulisateur qui sert pour acceder a la base dans la table acces ansi que son mot de passe . 
  - Comporte 2 paramètres qui sont le nom de l' utulisateur qui est de type Varchar et le mot de passe qui est de type varchar  
  - Type JSON
  
  
* Webservice get_assignation :
  - Fait appel à la procédure get_assignation qui permet de verifier l'assignation d'un appareil ( device) 
  - Comporte 1 paramètre de type integer
  - Type JSON
 

* Fonction get_devicesFromType :
  - Permet de récuperer les devices en fonction du type
  - elle comporte un paramètre de type integer
  - Elle renvoit une valeur de type long varchar.
  -Type: JSON

* Fonction get_deviceId :
  - Permet de récupérer l'Id d'un device.
  - Ne comporte aucun paramètre.
  - Elle renvoit une valeur de type integer ainsi qu'un varchar
  - Type: JSON  

* Fonction get_userDevices :
  - Permet de récupérer d'afficher les device assigné a un user.
  - reçoit en parametre un entier.
  - Elle renvoit 4 valeurs de type varchar ansi qu'un integer
  - type : JSON
  
  * Fonction get_usersTable :
  - Permet de récupérer l'Id du dernier sondage créé.
  - Ne comporte aucun paramètre.
  - Elle renvoit 2 valeur de types varchar ainsi qu'un integer.
   - type : JSON
  
# Détail DB
La base de données se compose de 4 tables qui sont respectivement :
* users :
   - Cette table comporte 3 colonnes :
     1. userId : cette colonne est un autoincrement qui crée automatiquement les Ids des utilisateurs ( type Integer ).
     2. userNom : cette colonne permet de stocker le nom de tous les utilisateurs ( type varchar ).
     3. userPrenom : cette colonne permet de stocker le prénom de tous les utilisateurs ( type varchar )
   - La clé primaire pk_users est la colonne userId.
   
* types :
   - Cette table comporte 2 colonnes : 
     1. typeId : cette colonne permet de stocker l'id du type de l'appareil ( type varchar)
     2. typeName: cette colonne permet de stocker le nom de la categorie en fonction de l'id ( type varchar)
   - La clé primaire pk_typeId est la colonne typeId.
   
* acces :
   - Cette table comporte 2 colonnes :
     1. accessUser : cette colonne permet de stocker le nom de l'user qui permet d'acceder à la page( type Integer).
     2. accessPassword :cette colonne permet de stocker le mot de passe pour acceder au la page (type varchar
  
* assignations : 
   - Cette table comporte 2 colonnes :
        1. userId : cette colonne est un autoincrement qui crée automatiquement les Ids des utilisateurs ( type Integer ).
      2. deviceId : cette colonne est un autoincrement qui crée automatiquement les Ids des device ( type Integer ).
   - La clé etrangère fK_userId est la colonne UserId.
    - La clé etrangère fK_device est la colonne deviceId.
   
   *devices : 
    -cette table comporte 4 colonnes:
      1. deviceId : cette colonne est un autoincrement qui crée automatiquement les Ids des device ( type Integer ).
      2. deviceName: cette colonne est une chaine de caracter qui stock le nom( modele du device) (varchar) 
      3. deviceType: cette colonne est permet de stocker le type de l'appareil (varchar)
      4. deviceUsed: cette colonne permet de stocker si l'appareil est disponible ou pas (varchar) 
     - La clé etrangère fk_device_types est la colonne typeId.
    - La clé primaire PK_device est la colonne deviceId.
      
      



https://github.com/ematthewephec/JSSQLAOUT2020
