![WhatsApp Image 2025-09-13 at 16 39 10_8f6a49e5](https://github.com/user-attachments/assets/1ed7dc00-a151-4c20-b5b7
![WhatsApp Image 2025-09-13 at 16 40 18_24d12c6d](https://github.com/user-attachments/assets/1b7b7087-4a76-457b-bf99-c81b91e3167e)
-5da41228bc2e)
![WhatsApp Image 2025-09-13 at 16 44 08_f7491d96](https://github.com/user-attachments/assets/3234372d-88ca-4f5d-8a65-dec187a43225)
![WhatsApp Image 2025-09-13 at 16 44 29_c4496c32](https://github.com/user-attachments/assets/47e34a2c-c12f-49d9-9e78-25269cb658bf)



The following screenshots show the working of the Student CRUD REST API developed using Express + Mongoose and tested in Postman:

Create (POST /api/students)

Added a new student record with fields name, age, and major.

API responded with 201 Created and returned the saved student object with _id.

Read (GET /api/students)

Retrieved all students stored in the MongoDB collection.

API responded with 200 OK and returned an array of student objects.

Update (PUT /api/students/:id)

Updated an existing student’s details using their unique _id.

API responded with 200 OK and returned the updated student object.

Delete (DELETE /api/students/:id)

Deleted a student record from the database using _id.

API responded with 200 OK and returned a success message.
