CREATE TABLE User
(
  UserName VARCHAR(20) NOT NULL,
  Password VARCHAR(30) NOT NULL,
  Access VARCHAR(10) NOT NULL,
  UserID INT NOT NULL,
  PRIMARY KEY (UserID)
);

CREATE TABLE Stone
(
  ProductId INT NOT NULL,
  Location INT NOT NULL,
  Comments INT,
  Type INT NOT NULL,
  Size INT NOT NULL,
  PRIMARY KEY (ProductId)
);

CREATE TABLE SecondaryMethod
(
  Kilning INT NOT NULL,
  Sågning INT NOT NULL,
  ProductId INT NOT NULL,
  FOREIGN KEY (ProductId) REFERENCES Stone(ProductId)
);

CREATE TABLE ProcessedStone
(
  NewProductId INT NOT NULL,
  ProductId INT NOT NULL,
  Comments VARCHAR( 20),
  Size INT NOT NULL,
  ProductId INT NOT NULL,
  PRIMARY KEY (NewProductId),
  FOREIGN KEY (ProductId) REFERENCES Stone(ProductId)
);

CREATE TABLE Size
(
  Depth INT NOT NULL,
  Width INT NOT NULL,
  Height INT NOT NULL,
  Weight INT NOT NULL
);

CREATE TABLE PrimaryMethod
(
  Sågning INT NOT NULL,
  Sprängning INT NOT NULL,
  Amount INT NOT NULL,
  ProductId INT NOT NULL,
  FOREIGN KEY (ProductId) REFERENCES Stone(ProductId)
);