DROP TABLE IF EXISTS A;

CREATE TABLE A (
    UserName VARCHAR(30),
    Password VARCHAR(35)
);

INSERT INTO A (UserName, Password) VALUES
    ('Kulla', 'stone1234'),
    ('Bjarlov', 'stone1'),
    ('Lonnsboda', 'sten');
SELECT * FROM A;