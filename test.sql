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