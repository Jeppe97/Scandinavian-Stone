/*User table, access is if its a user or an admin*/
CREATE TABLE User (
    UserID INT AUTO_INCREMENT,
    UserName VARCHAR(20) NOT NULL,
    Password VARCHAR(30) NOT NULL,
    Access BOOLEAN,
    PRIMARY KEY(UserID)
);


/*Primary, comment for tha quality */
CREATE TABLE Stone (
    ProductId INT AUTO_INCREMENT,
    Location INT NOT NULL,
    Comments VARCHAR(50),
    Type VARCHAR(50),/*?? egen table för vilken sort det är? så vi kan koppla det till specifika stnbrott */
    PRIMARY KEY(ProductId)
);

CREATE TABLE Size (
    Depth INT NOT NULL,
    Width INT NOT NULL,
    Height INT NOT NULL,
    ProductId INT NOT NULL,
    FOREIGN KEY (ProductId) REFERENCES Stone(ProductId)
);

CREATE TABLE SecondaryMethod (
    MethodId INT AUTO_INCREMENT,
    Drilling INT NOT NULL,
    Sawing INT NOT NULL,
    Blasting INT NOT NULL,
    ProductId INT NOT NULL,
    FOREIGN KEY (ProductId) REFERENCES Stone(ProductId)
);

CREATE TABLE ProcessedStone(
    NewProductId INT NOT NULL,
    ProductId INT NOT NULL,
    Comments VARCHAR(50),
    Size INT NOT NULL,
    TimesDivided INT NOT NULL,
    ProductId INT NOT NULL,
    PRIMARY KEY (NewProductId),
    FOREIGN KEY (ProductId) REFERENCES Stone(ProductId)
);

CREATE TABLE PrimaryMethod (
    Sawing INT NOT NULL,
    Sprängning INT NOT NULL,
    Drilling INT NOT NULL,
    Amount INT NOT NULL,
    ProductId INT NOT NULL,
    FOREIGN KEY (ProductId) REFERENCES Stone(ProductId)
);