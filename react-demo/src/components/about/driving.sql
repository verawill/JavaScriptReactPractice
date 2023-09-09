/*
B. To be specific the line "FOREIGN KEY (insuranceN) REFERENCES InsuranceCo(name)"
and the attribute maxLiability in the vehicle make table statement represented as an INTEGER.
we can do this because its only a one way relationship so an entire table doesnt have to be created
we only need to reference insures in the vehicle make table statement to ensure a vehicle can be linked to
at most one InsuranceCO


C. Drives has its own Make table statement while operates doesn't. We learned that
one to many statements can be represented with the foreign key and refrences. 
Drives because its a many to many we still have to do refrences but it needs its own seperate table

*/
PRAGMA foreign_keys=ON;

CREATE TABLE InsuranceCo (
	name varchar(100),
    phone varchar(24),

    PRIMARY KEY(name)
);



CREATE TABLE Person (
	ssn INT ,
    name varchar(50),

    PRIMARY KEY(ssn)
);

CREATE TABLE Driver (
	ssn INT,
    driverID INT,

    PRIMARY KEY(ssn),
    FOREIGN KEY (ssn) REFERENCES Person(ssn)
);

CREATE TABLE Vehicle (
    year INT,
	licensePlate varchar(32),
    ownerSNN INT,
    maxLiability INTEGER,
    insuranceN varchar(90),
    
    PRIMARY KEY(licensePlate),
    FOREIGN KEY (ownerSNN) REFERENCES Person(ssn),
    FOREIGN KEY (insuranceN) REFERENCES InsuranceCo(name)
);



CREATE TABLE Drives (
    ownerSsn INT,
    licensePlate varchar(99),
    
    PRIMARY KEY (licensePlate,ssn),
    FOREIGN KEY (ownerSsn) REFERENCES NonProfessionalDriver(ssn),
    --Some people dont have license plates like criminals -_o_-
    FOREIGN KEY (licensePlate) REFERENCES CAR(licensePlate)
);

CREATE TABLE ProfessionalDriver (
    ssn INT,
    medicalHistory varchar(99),

    PRIMARY KEY(ssn),
    FOREIGN KEY (ssn) REFERENCES Driver(ssn)
);

CREATE TABLE  NonProfessionalDriver (
    ssn INT,

    PRIMARY KEY (ssn),
    FOREIGN KEY (ssn) REFERENCES Driver(ssn)
);

CREATE TABLE TRUCK (
    licenseP varchar(99),
    capacity INT,
    per_ssn INT,

    PRIMARY KEY(licensePlate),
    FOREIGN KEY (per_ssn) REFERENCES ProfessionalDriver(ssn),
    FOREIGN KEY (licenseP) REFERENCES Vehicle(licensePlate)
    
);

CREATE TABLE CAR (
    licenseP varchar(99),
    make varchar(99),

    PRIMARY KEY(licenseP),
    FOREIGN KEY (licenseP) REFERENCES Vehicle(licensePlate)
);


