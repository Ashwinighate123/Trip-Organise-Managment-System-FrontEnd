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

TO RUN THE PROJECT COMMAND 
-----
>npm install -g typescript
>npm install -g @angular/CLI
>ng new ProjectName
>cd>ProjectName
> ng serve

Run the Program 
http//localhost/4300

![project1](https://github.com/user-attachments/assets/bb7767bd-ca31-40ed-b45b-395c090800fd)

![2](https://github.com/user-attachments/assets/439c61c4-4c53-47ac-9fff-bdd46ae5d966)


Information
-----
The Trip Organize Management System is designed to help users plan and manage their trips easily. It provides a user-friendly interface and includes key features such as Home, About, Feedback, Login, Logout, Booking, Places to Go, and Things to Do. Here’s an explanation of the project:

KEY FEATURE
-----

Registration & Login:
-----

Users must first register by providing their email, password, and username. Proper validation is applied to ensure the accuracy of the data.
After registration, users can log in. If someone tries to log in without registering, they will be prompted to register first.
Once logged in, the home page welcomes the user by displaying "Welcome [username]" and adds a Logout button to the navigation bar.

![1](https://github.com/user-attachments/assets/4dad7659-1b2d-4c36-ac08-fccc13e93c16)
![2](https://github.com/user-attachments/assets/81521680-269a-435a-aa5c-64f2d5a8f93c)

![3](https://github.com/user-attachments/assets/f7008816-c33f-422d-8cf9-b25bf2d25569)


Home Page:
-----

The home page provides all the necessary information related to the system, with navigation options for various sections like "Places to Go" and "Things to Do."
There is also a Contact page for users to get in touch, and a Feedback form to provide reviews or suggestions.


Places to Go:
-----
Users can explore various travel packages under this section, such as Solo Trip and Business Trip.
Clicking on any package displays a list of destinations, with detailed information about each location, including accommodation, food options, and more.
Things to Do:

This section displays activities like Birthday Parties and Maternity Shoots. Clicking on an activity provides detailed information about the services offered.

![4](https://github.com/user-attachments/assets/dcece2f5-68be-44bc-b8b9-0083e5675e21)

![5](https://github.com/user-attachments/assets/ceace41d-bb5b-42ba-bd7a-513ed789620e)



Booking:
-----
If users are interested in a package or activity, they can fill out a booking form at the bottom of the page.
The booking component allows users to view, edit, and manage their bookings.

![6](https://github.com/user-attachments/assets/8b6d46c2-9346-4058-a02e-2693c7f08cfe)

![7](https://github.com/user-attachments/assets/36bec770-83de-489c-b4a5-8b16a5da3435)


![8](https://github.com/user-attachments/assets/b6c47dc7-4385-4117-8e79-52329e9563e7)

![9](https://github.com/user-attachments/assets/42c84c95-06a0-4f0c-9d1e-4eccc2966513)


Technology Stack:
-----

Front-End:
-----
The front end is developed using Angular, a comprehensive framework that makes it easy to divide the system into various components for a structured design.

Back-End:
-----
The back end is built using Spring Boot, which handles the logic and connects the front end with the database. CRUD operations (Create, Read, Update, Delete) are performed using REST APIs.

Database:
-----
MySQL is used to store user information, booking details, travel packages, and activity data.

Back-End Architecture are in another github link
-----
https://github.com/Ashwinighate123/Trip-Organise-Managment-System.git
