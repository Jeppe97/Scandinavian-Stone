DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    userID INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(20) NOT NULL,
    password VARCHAR(30) NOT NULL,
    access BOOLEAN,
    PRIMARY KEY(userID)
);

DROP TABLE IF EXISTS Quarry;

CREATE TABLE Quarry (
  quarryID INT AUTO_INCREMENT,
  /*userID INT NOT NULL,*/
  stoneType VARCHAR(20),
  stoneName VARCHAR(50),
  quarryName VARCHAR(20),
  PRIMARY KEY (quarryID)
 /* FOREIGN KEY (userID) REFERENCES Users(userID)*/
);

DROP TABLE IF EXISTS Stone;

CREATE TABLE Stone (
    stoneID INT NOT NULL AUTO_INCREMENT,
    quarryID INT NOT NULL,
    width FLOAT NOT NULL,
    length FLOAT NOT NULL,
    depth FLOAT NOT NULL,
    location INT,
    nrOfProcessedSides INT,
    PRIMARY KEY (stoneID),
    FOREIGN KEY (quarryID) REFERENCES Quarry(quarryID)
);

DROP TABLE IF EXISTS PrimaryStone;

CREATE TABLE PrimaryStone (
  primaryStoneID INT NOT NULL AUTO_INCREMENT,
  stoneID INT NOT NULL,
  productIDPrimary VARCHAR(30),
  PRIMARY KEY (primaryStoneID),
  FOREIGN KEY (stoneID) REFERENCES Stone(stoneID)
);

DROP TABLE IF EXISTS Block;

CREATE TABLE Block(
  bLockID INT NOT NULL AUTO_INCREMENT,
  stoneID INT NOT NULL,
  primaryStoneID INT NOT NULL,
  productIDBlock VARCHAR(30),
  quality VARCHAR(30),
  weight FLOAT NOT NULL,
  PRIMARY KEY (blockID),
  FOREIGN KEY (stoneID) REFERENCES Stone(stoneID),
  FOREIGN KEY (primaryStoneID) REFERENCES PrimaryStone(primaryStoneID)
);

DROP TABLE IF EXISTS ProcessedSide;

CREATE TABLE ProcessedSide (
  sideID INT NOT NULL AUTO_INCREMENT,
  stoneID INT NOT NULL,
  height FLOAT NOT NULL,
  length FLOAT NOT NULL,
  PRIMARY KEY (sideID),
  FOREIGN KEY (stoneID) REFERENCES Stone(stoneID)
);

DROP TABLE IF EXISTS Drilling;

CREATE TABLE Drilling (
    drillingID INT NOT NULL AUTO_INCREMENT,
    sideID INT NOT NULL,
    nrOfHoles INT NOT NULL,
    lengthOfHoles FLOAT NOT NULL,
    PRIMARY KEY (drillingID),
    FOREIGN KEY (sideID) REFERENCES ProcessedSide(sideID)
);

DROP TABLE IF EXISTS Explosive;

CREATE TABLE Explosive (
    explosiveID INT NOT NULL AUTO_INCREMENT,
    sideID INT NOT NULL,
    type VARCHAR(30),
    amount FLOAT NOT NULL,
    PRIMARY KEY (explosiveID),
    FOREIGN KEY (sideID) REFERENCES ProcessedSide(sideID)
);

DROP TABLE IF EXISTS Sawing;

CREATE TABLE Sawing (
    sawingID INT NOT NULL AUTO_INCREMENT,
    sideID INT NOT NULL,
    PRIMARY KEY (sawingID),
    FOREIGN KEY (sideID) REFERENCES ProcessedSide(sideID)
);

/*CORRECT ORDER TO DROP TABLES*/
DROP TABLE IF EXISTS Sawing;
DROP TABLE IF EXISTS Explosive;
DROP TABLE IF EXISTS Drilling;
DROP TABLE IF EXISTS ProcessedSide;
DROP TABLE IF EXISTS Block;
DROP TABLE IF EXISTS PrimaryStone;
DROP TABLE IF EXISTS Stone;
DROP TABLE IF EXISTS Quarry;
DROP TABLE IF EXISTS Users;

INSERT INTO Quarry(stoneType, stoneName, quarryName) VALUES
    ('Diabas','Swedish Biskopsgården','Biskopsgården'),
    ('Granit','Swedish Brown','Bjärlöv'),
    ('Diabas', 'Swedish Black','Brännhult'),
    ('Gnesis', 'Swedish Gnesis Bårarp', 'Bårarp'),
    ('Diabas', 'Swedish Black Duchult', 'Duvhult'),
    ('Syenite', 'Swedish Green Ekeröd','Ekeröd'),
    ('Granite', 'Swedish Mahogany Flivik','Flivik'),
    ('Diabas', 'Swedish Black Gylsboda','Gylsboda'),
    ('Diabas', 'Swedish Black Hjortsjö','Hjortsjö'),
    ('Diabas', 'Swedish Black Hägghult','Hägghult'),
    ('Granite', 'Bohus Gray Iddefjord', 'Iddefjord'),
    ('Granite','Swedish Gray Kulla','Kulla'),
    ('Granite','Swedish Red Vånga','Vånga');