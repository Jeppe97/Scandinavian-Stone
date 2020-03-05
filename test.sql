DROP TABLE IF EXISTS LogIn;

CREATE TABLE LogIn (
    UserId INT NOT NULL AUTO_INCREMENT,
    UserName VARCHAR(30),
    Password VARCHAR(35),
    Access VARCHAR(15),
    PRIMARY KEY (UserId)
);

INSERT INTO LogIn (UserName, Password, Access) VALUES
    ('Kalle', 'KalleSten', 'arbetare'),
    ('Rickard', 'RickardSten', 'arbetare'),
    ('Maria', 'MariaSten', 'admin');
SELECT * FROM LogIn;

DROP TABLE IF EXISTS Places;
CREATE TABLE Places (Location VARCHAR (20) PRIMARY KEY);
INSERT INTO Places (Location) VALUES
    ('Biskopsgården'),
    ('Bjärlöv'),
    ('Brännhult'),
    ('Bårarp'),
    ('Duvhult'),
    ('Ekeröd'),
    ('Flivik'),
    ('Gylsboda'),
    ('Hjortsjö'),
    ('Hägghult'),
    ('Iddefjord'),
    ('Kulla'),
    ('Vånga');

SELECT * FROM Places;

# Sten typer: Swedish black, Dark stone, Red stone, Gneiss, Grey stone

###################################################
# test functions and procedures

SELECT count(quarryName) FROM Quarry;

SELECT length(quarryName) FROM Quarry;

DROP FUNCTION IF EXISTS testMultiply;
CREATE FUNCTION testMultiply()
    RETURNS INTEGER
    RETURN 46*3;

SELECT testMultiply();

CREATE TABLE User (
    id INT,
    birthday DATE
);

INSERT INTO User (id, birthday) VALUES
    (5, '1976-08-21'),
    (6, '1989-06-28'),
    (7, '1986-04-10')
ON DUPLICATE KEY UPDATE
    id=VALUES(id), birthday=VALUES(birthday);


DROP FUNCTION IF EXISTS AGE;
CREATE FUNCTION AGE(birthday1 DATE)
    RETURNS INT
    RETURN TIMESTAMPDIFF(YEAR, birthday1, now() );

SELECT AGE(birthday), id FROM User;

SELECT TIMESTAMPDIFF(YEAR, '1997-08-18', now() );

SET GLOBAL log_bin_trust_function_creators = 1;