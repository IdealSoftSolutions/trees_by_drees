
# Deployment Guide for GoDaddy

This document provides a step-by-step guide for deploying both the **Angular frontend** and **Node.js backend** to GoDaddy hosting. The application will be served with Angular's production build and a Node.js Express server handling API requests.

## Prerequisites

Before deploying, ensure you have the following:

- A GoDaddy hosting account with cPanel access.
- A domain name configured on GoDaddy.
- SSH access to your GoDaddy server (optional but recommended for backend setup).
- Node.js, npm, and Angular CLI installed on your local machine.
  
## Step 1: Build the Angular Frontend

1. **Build the Angular app for production:**
   - Open a terminal/command prompt and navigate to your Angular project directory.
   - Run the following command to build the project:
     ```bash
     npm run build --prod
     ```
   - This will generate the `dist/trees_by_drees/` directory containing all the static files required for the production version of your Angular app.

## Step 2: Prepare the Node.js Backend

1. Ensure that your backend (`server/` directory) contains the necessary files:
   - `app.js`: The main server file for handling API routes and serving Angular static files.
   - `package.json` and `package-lock.json`: Dependencies for your backend.
   - Any other server-side code or modules needed.

## Step 3: Zip the Files for Upload

1. **Zip the following files**:
   - The `dist/trees_by_drees/` folder (Angular production build).
   - The `server/` folder (Node.js backend).
   - The `package.json` and `package-lock.json` files for the backend.

   On your Windows laptop, right-click on the folders and select **Send to** → **Compressed (zipped) folder**. You can name it `app.zip`.

## Step 4: Upload the Zip File to GoDaddy

1. **Log in to GoDaddy cPanel**:
   - Go to **cPanel** for your domain in the GoDaddy control panel.
   
2. **Upload the Zip file**:
   - Open **File Manager** in cPanel.
   - Navigate to the **public_html** directory for the Angular app (or a subdirectory, if needed).
   - Upload the `app.zip` file.

3. **Extract the Zip file**:
   - Once uploaded, select the `app.zip` file in **File Manager** and click **Extract** to unpack the files.

## Step 5: Move Files to the Correct Directories

1. **Move the Angular Files**:
   - Ensure the contents of the `dist/trees_by_drees/` folder are in the correct directory (typically `public_html/`).
   - Your static Angular files (HTML, CSS, JS) should now be accessible from your domain.

2. **Move the Backend Files**:
   - Upload the `server/` folder (backend files) outside of `public_html/` (e.g., to a directory like `backend/`).
   - Ensure all your server files (like `app.js` and any modules) are in the `server/` folder.

## Step 6: Install Node.js Dependencies

1. **SSH Access** (if available):
   - Access your GoDaddy server via SSH (or use the terminal in cPanel if SSH is not available).
   - Navigate to the `backend/` directory where you uploaded the `server/` folder:
     ```bash
     cd backend
     ```

2. **Install the dependencies** for your Node.js app:
   ```bash
   npm install
   ```

## Step 7: Configure the Node.js App in cPanel

1. **Create a Node.js application**:
   - In cPanel, go to the **Node.js App** under the **Software** section.
   - **Document Root**: Set the root to the `backend/` directory where your `app.js` file is located.
   - **App Entry Point**: Set the entry point to `app.js`.
   - **Node.js Version**: Choose a Node.js version compatible with your app.
   - Click **Create Application** to set up your Node.js environment.

## Step 8: Configure Reverse Proxy (Optional)

1. If you want to avoid exposing the backend on a different port (e.g., `3000`), you can configure a **reverse proxy** in Apache to forward API requests to the Node.js backend.
   
2. **Edit the `.htaccess` file** in the `public_html` directory to forward requests to your backend:
   ```apache
   RewriteEngine On
   RewriteRule ^api/(.*)$ http://localhost:3000/api/$1 [P]
   ```
   This forwards requests to `/api/` to `http://localhost:3000/api/`.

## Step 9: Start the Node.js Backend

1. From the **cPanel Node.js app section** or via SSH, **start the backend**:
   ```bash
   npm start
   ```
   - Your backend will now be running and should be accessible at `http://yourdomain.com/api/...`.

## Step 10: Test the Application

1. **Verify the Frontend**:
   - Open your browser and go to `http://yourdomain.com`.
   - The Angular app should load, and client-side routing should work (e.g., `/about`, `/contact`).

2. **Verify the API**:
   - Test the backend API by making requests like:
     ```bash
     http://yourdomain.com/api/some-endpoint
     ```

3. **Debugging**:
   - Check the Node.js app logs for any errors or issues during deployment.
   - Ensure that the CORS configuration on the backend allows the frontend to make API calls:
     ```js
     const cors = require('cors');
     app.use(cors());
     ```

## Conclusion

You have now successfully deployed your **Angular frontend** and **Node.js backend** to GoDaddy. Your Angular app should serve static files from `public_html`, and your Node.js backend should handle API requests on a separate port or via a reverse proxy.
