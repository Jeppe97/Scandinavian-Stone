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
  stoneName VARCHAR(20),
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
    nrOfPRocessedSides INT,
    PRIMARY KEY (stoneID),
    FOREIGN KEY (quarryID) REFERENCES Quarry(quarryID)
);

DROP TABLE IF EXISTS PrimaryStone;

CREATE TABLE PrimaryStone (
  primaryStoneID INT NOT NULL AUTO_INCREMENT,
  stoneID INT NOT NULL,
  producIDPrimary VARCHAR(30),
  PRIMARY KEY (primaryStoneID),
  FOREIGN KEY (stoneID) REFERENCES Stone(stoneID)
);

DROP TABLE IF EXISTS Block;

CREATE TABLE Block(
  bLockID INT NOT NULL AUTO_INCREMENT,
  stoneID INT NOT NULL,
  primaryStoneID INT NOT NULL,
  producIDBlock VARCHAR(30),
  PRIMARY KEY (blockID),
  FOREIGN KEY (stoneID) REFERENCES Stone(stoneID),
  FOREIGN KEY (primaryStoneID) REFERENCES PrimaryStone(primaryStoneID)
);

DROP TABLE IF EXISTS ProcessedSide;

CREATE TABLE ProcessedSide (
  sideID INT NOT NULL AUTO_INCREMENT,
  stoneID INT NOT NULL,
  hight FLOAT NOT NULL,
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
    ('granit','Swedish Brown','Bjärlöv');
   /* ('Brännhult'),
    ('Bårarp'),
    ('Duvhult'),
    ('Ekeröd'),
    ('Flivik'),
    ('Gylsboda'),
    ('Hjortsjö'),
    ('Hägghult'),
    ('Iddefjord'),
    ('Kulla'),
    ('Vånga');*/