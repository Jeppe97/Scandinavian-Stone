DROP TABLE IF EXISTS test;

CREATE TABLE test (
    UserName VARCHAR(30),
    Password VARCHAR(35)
);

INSERT INTO test (UserName, Password) VALUES
    ('Kulla', 'stone1234'),
    ('Bjarlov', 'stone1'),
    ('Lonnsboda', 'sten');
SELECT * FROM test;