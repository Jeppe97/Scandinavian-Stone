DROP TABLE IF EXISTS LogIn;

CREATE TABLE LogIn (
    UserId INT NOT NULL AUTO_INCREMENT,
    UserName VARCHAR(30),
    Password VARCHAR(35),
    PRIMARY KEY (UserId)
);

INSERT INTO LogIn (UserName, Password) VALUES
    ('Kulla', 'stone1234'),
    ('Bjarlov', 'stone1'),
    ('Lonnsboda', 'sten');
SELECT * FROM LogIn;

DROP TABLE IF EXISTS Places;
CREATE TABLE Places (Location VARCHAR (20), UserId INT, PRIMARY KEY (Location, UserId), FOREIGN KEY (UserId) REFERENCES LogIn(UserId));
INSERT INTO Places (Location, UserId) VALUES ('Skane', 1),('Blekinge', 2),('Blekinge', 3);
SELECT * FROM Places JOIN LogIn LI on Places.UserId = LI.UserId;

#CREATE FUNCTION filter (x VARCHAR());

