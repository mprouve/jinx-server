# **Jynx Server** 💬 🗺️ ✨

## **TABLE OF CONTENTS**

- ✅&nbsp;&nbsp;[Requirements](#requirements)
  - [Node v18](#node-v18)
  - [Environment Variables](#environment-variables)
- 🔡&nbsp;&nbsp;[Scripts](#scripts)
  - 💻&nbsp;&nbsp;[Starting the App](#starting-the-app)

## **REQUIREMENTS**

- ### **Node v18**

  This project uses Node v18.

  NVM is a great tool for managing / switching between node versions on your device. you can use `nvm use <version_number>` to switch to a particular version or `nvm use` to extract the version number from the `.nvmrc` file.

- ### **Environment Variables**

  You will need the respective environment variables for each environment you'd like to run or else the app wont start. Create a `.env` file at the root of the project.

## **SCRIPTS**

- ### **Starting the App**

  #### First and foremost install all required packages by running `npm i` or by running `yarn install`.

  #### **Note:** The most reliable method is using `yarn install`.

  - `yarn start:app:local` <span style="color:lightgreen">&nbsp;&nbsp;(USE AS DEFAULT)</span>

    Starts the app in <span style="color:cyan">local</span> environment

  - `yarn start:app:dev`

    Starts the app in <span style="color:cyan">dev</span> environment

  - `yarn start:app:staging`

    Starts the app in <span style="color:cyan">staging</span> environment

  - `yarn start:app:prod`

    Starts the app in <span style="color:cyan">prod</span> environment
