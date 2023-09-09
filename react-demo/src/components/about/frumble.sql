--a
CREATE TABLE mrHappy(
    name varchar(99),
    discount INTEGER,
    month varchar(99),
    price INTEGER
);
--b

--group by the month getting the max disc on the month | month determines disc
SELECT MAX(allDisc) FROM (
    SELECT COUNT(distinct discount) AS allDisc FROM mrHappy
        GROUP BY month
);

-- group by the name of the product getting max price on the product | name determines price
SELECT MAX(ellprice) FROM (
    SELECT count(distinct price) AS ellprice FROM mrHappy
        GROUP BY name
);
--c

PRAGMA foreign_keys=ON;

CREATE TABLE AllProducts (
	name varchar(99),
    price INTEGER,
    PRIMARY KEY(name)
);

CREATE TABLE AllMonths (
	month char(99),
    discount INTEGER,
    product(month),
    PRIMARY KEY(month)
);

CREATE TABLE Lists (
	product varchar(99),
    month varchar(99),
    PRIMARY KEY (product,month),
    FOREIGN KEY (product) references Products(name),
    FOREIGN KEY (month) references Months(month)
);

--d
INSERT INTO AllProducts
    SELECT distinct name, price
        FROM mrHappy;

INSERT INTO AllMonths
    SELECT distinct month, discount
        FROM mrHappy;

INSERT INTO Lists
    SELECT name as product, month 
        FROM mrHappy;
