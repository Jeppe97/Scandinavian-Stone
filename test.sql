DROP TABLE IF EXISTS LogIn;

CREATE TABLE LogIn (
    UserId INT NOT NULL AUTO_INCREMENT,
    UserName VARCHAR(30),
    Password VARCHAR(35),
    PRIMARY KEY (UserId)
);

INSERT INTO LogIn (UserName, Password) VALUE ('Kulla', 'stone1234');

SELECT * FROM LogIn;

INSERT INTO LogIn (UserName, Password) VALUES ('Bjarlov', 'stone1'),('Lonnsboda', 'sten');
