DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    UserID INT NOT NULL AUTO_INCREMENT,
    UserName VARCHAR(20) NOT NULL,
    Password VARCHAR(30) NOT NULL,
    Access BOOLEAN,
    PRIMARY KEY(UserID)
);

DROP TABLE IF EXISTS Quarry;

CREATE TABLE Quarry (
  QuarryID INT AUTO_INCREMENT,
  UserID INT NOT NULL,
  StoneType VARCHAR(20),
  QuarryName VARCHAR(20),
  PRIMARY KEY (QuarryID),
  FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

DROP TABLE IF EXISTS Stone;

create table Stone (
    StoneID INT NOT NULL AUTO_INCREMENT,
    QuarryID INT NOT NULL,
    Width FLOAT NOT NULL,
    Length FLOAT NOT NULL,
    Depth FLOAT NOT NULL,
    Location INT,
    nrOfPRocessedSides INT,
    PRIMARY KEY (StoneID),
    FOREIGN KEY (QuarryID) REFERENCES Quarry(QuarryID)
);
