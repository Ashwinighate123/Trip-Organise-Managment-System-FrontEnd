sql query
-----------

BOOKING
---------

 CREATE TABLE booking(
      id NUMBER PRIMARY KEY,
      name VARCHAR2(255),
      Birthdate VARCHAR2(255),
      address VARCHAR2(255),
      email VARCHAR2(255),
      phone_number VARCHAR2(20),
     alternate_number VARCHAR2(20),
     aadharcard_no VARCHAR2(20),
     pancard_no VARCHAR2(20),
     destination VARCHAR2(20),
     hotelcategory VARCHAR2(20),
     noofdays VARCHAR2(20),
     monthoftravel VARCHAR2(20),
     triptype VARCHAR2(20),
     adults INTEGER,
     children INTEGER,
     startdate VARCHAR2(20),
     enddate VARCHAR2(20),
     departure_location VARCHAR2(20),
     typeofpackage VARCHAR2(20),
     timecall VARCHAR2(20),
     touryouwant VARCHAR2(20),
     additionalrequriment VARCHAR2(20)
   );

insert into booking values(1,'ashwini','23-04-2001','Shegaon','ashwini@gmail.com','923010500','9638222412','869542317','789456','Gao','5 star','15','March','Solo',20,12,'21-05-2023','1-06-2024','Shegaon','1','2.00','solo','none');

CONTACT
---------

 CREATE TABLE Contact (
      id NUMBER PRIMARY KEY ,
      email_address VARCHAR2(255),
      phone_number VARCHAR2(20),
    how_can_we_help VARCHAR2(20)
   );


 INSERT INTO Contact VALUES (1,'ashwinighate28@gmail.com', 6578978703,'none');



FEEDBACK
---------

 create table feedback(
    ID int primary key,
    NAME varchar2(25),
    EMAIL_ADDRESS  VARCHAR2(50),
    PHONE_NUMBER varchar(90),
    COMET varchar2(90)
    );


 insert into feedback values(1,'ashwini','ashwini@gmail.com','9992348652','good');



REGISTRATION
--------------
 CREATE TABLE registration (
      id NUMBER PRIMARY KEY ,
      name VARCHAR2(255),
      Birthdate VARCHAR2(255),
      email VARCHAR2(255),
      phone_number VARCHAR2(20),
      address VARCHAR2(255),
      alternate_number VARCHAR2(20),
   password varchar(50)
  );

 INSERT INTO registration VALUES (1,'ashwini',02-03-2003,'tejaswinimasne28@gmail.com', 6578978703,'Shegaon',9987654321,1234);



LOGIN
-----


 CREATE TABLE Login (
     user_Id NUMBER PRIMARY KEY,
      email VARCHAR2(255),
      password VARCHAR2(255)
   );


INSERT INTO Login values(1,'ashwini@gmail.com',1234);
