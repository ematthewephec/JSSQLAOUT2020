CREATE PROCEDURE "DBA"."get_usersTable"()
result( userPrenom varchar(30), userNom varchar(30), userId int )
BEGIN   
    call sa_set_http_header('content-type', 'application:json');
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
    select DBA.users.userPrenom, DBA.users.userNom, DBA.users.userId
    from users
end;


CREATE PROCEDURE "DBA"."get_userDevices"( in param int )
result( userName varchar(30), userPrenom varchar(30), deviceName varchar(50), deviceId int, deviceType varchar(1) )
BEGIN
    call sa_set_http_header('content-type', 'application:json');
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
    select DBA.users.userNom, DBA.users.userPrenom, DBA.devices.deviceName, DBA.assignations.deviceId, DBA.devices.deviceType
    from assignations
    join users on DBA.assignations.userId = DBA.users.userId
    join devices on DBA.assignations.deviceId = DBA.devices.deviceId
    where DBA.assignations.userId = param
END;


CREATE PROCEDURE "DBA"."get_Page"(in param CHAR(200))
// renvoie le contenu de la page html dont le nom (SANS extension) est le paramètre url
BEGIN 

    call sa_set_http_header('content-type', 'text/html; charset=utf-8');
    select xp_read_file(get_path() || param || '.html');
END;


CREATE PROCEDURE "DBA"."get_js"(in url char(200))
// renvoie le contenu du script js dont le nom (+ extension) est le paramètre url
BEGIN 

    call sa_set_http_header('Content-Type', 'text/javascript'); 
    select xp_read_file(dba.get_path() || 'js\' || url);
END;

CREATE PROCEDURE "DBA"."get_Img"( in url char(255))
// renvoie le contenu de l image/graphique dont le nom (+ extension) est le paramètre url
BEGIN 

    call sa_set_http_header('content-type', 'image/png');
    select xp_read_file(get_path() || 'imgs\' || url);
END;


CREATE PROCEDURE "DBA"."get_devicesId"()
result( deviceId int, used varchar(3))
BEGIN
    call sa_set_http_header('content-type', 'application:json');
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
    select DBA.devices.deviceId, DBA.devices.deviceUsed
    FROM devices
END;

CREATE PROCEDURE "DBA"."get_devicesFromType"( in param varchar(1) )
result( deviceId int, deviceName varchar(50))
BEGIN
    call sa_set_http_header('content-type', 'application:json');
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
    select DBA.devices.deviceId, DBA.devices.deviceName
    FROM devices
    where deviceType = param
END;

CREATE PROCEDURE "DBA"."get_css"( in url char(255))
// renvoie le contenu de la feuille de style dont le nom (+ extension) est le paramètre url
BEGIN 

    call sa_set_http_header('Content-Type', 'text/css');
	select xp_read_file(dba.get_path() || 'css\' || url);
END;

CREATE PROCEDURE "DBA"."get_assignation"( in param int )
result( deviceId int, userPrenom varchar(30), userName varchar(30))
BEGIN
    call sa_set_http_header('content-type', 'application:json');
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
    select DBA.assignations.deviceId, DBA.users.userPrenom, DBA.users.userNom
    from assignations
    JOIN users on DBA.assignations.userId = DBA.users.userId
    where assignations.deviceId = param
END;

CREATE PROCEDURE "DBA"."get_accessTable"()
result( accessUser varchar(30), accessPassword varchar(30) )
BEGIN   
    call sa_set_http_header('content-type', 'application:json');
    Call sa_set_http_header('Access-Control-Allow-Origin', '*');
    select DBA.access.accessUser, DBA.access.accessPassword
    from access
end;

CREATE PROCEDURE "DBA"."deleteAssignation"(in param int)
BEGIN 
    DELETE from assignations
    where DBA.assignations.deviceId = param;
    update devices
    set DBA.devices.deviceUsed = 'NO'
    where deviceId = param
END;

CREATE PROCEDURE "DBA"."deletDevice"(in param int)
BEGIN 
    delete assignations
    WHERE DBA.assignations.deviceId = param;
    delete devices
    WHERE DBA.devices.deviceId = param
END;

CREATE PROCEDURE "DBA"."addDevice"(in name varchar(50), in type varchar(1))
BEGIN 
    INSERT INTO devices(deviceName, deviceType)
    VALUES (name, type)
END;
CREATE PROCEDURE "DBA"."addAssignation"(in param1 int, in param2 int)
BEGIN 
    insert into assignations(userId, deviceId)
    VALUES (param1, param2);
    UPDATE devices
    set deviceUsed = 'YES'
    where deviceId = param2
END;


