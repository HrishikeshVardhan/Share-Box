# ShareBox

ShareBox is a simple and secure file-sharing application that allows users to upload files and generate shareable links for others to download the files. It provides a convenient and efficient way to share files without the need for user sign-in or complex setups. ShareBox ensures the privacy and security of shared files through encryption and access control.

## Features

- Easy file sharing: ShareBox makes it effortless to share files. Users can upload files and generate unique links to share with recipients.
- Secure file transfer: All files shared through ShareBox are encrypted during transit, ensuring the privacy and security of the data.
- ShareBox provides a clean and intuitive user interface that adapts to different devices, making it easy to use on desktops, tablets, and smartphones.


## Technologies Used

- Node.js
- Express.js
- MongoDB
- React
- Multer

## Run locally

To use ShareBox locally or deploy it to your own server, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/HrishikeshVardhan/Share-Box.git

   ```

2. Navigate to the project directory:
    ```bash
    cd Share-Box
    ```

3. Open the database file in the Server folder. 
4.Use your mongodb username password and your database name and fill those blanks.
5. Install dependencies for server:

   ```bash
   cd server
   npm install
   ```

6. Start your development  server

   ```bash
   npm start
   ```

7. Go to root directory

   ```bash
   cd ..
   ```

8. Install dependencies for React client-side

   ```bash
   cd client
   npm install
   ```

9. Start your Share-Box app

   ```bash
   npm run dev
   ```

10. Your ShareBox app is now live at https://localhost:3000/

## Usage

1. Open ShareBox in your web browser.
2. Upload the file you want to share by clicking on the "Upload" button.
3. Once the upload is complete, you will receive a unique link that you can share with others.
4. Recipients can access the shared file by visiting the link and downloading the file directly.

Please note that ShareBox does not require user sign-in. It provides a seamless file-sharing experience without the need for user accounts or authentication.


   





## Contributing

Contributions are always welcome!
If you find any bugs or have suggestions for improvements, please open an `issue` or submit a `pull request`.
