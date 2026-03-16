mvn archetype:generate ...
cd my_app
mvn package
java -cp target/my_app-1.0-SNAPSHOT.jar coll.cmrit.App

git config --global user.email "email"
git config --global user.name "Student"

git init
git add .
git commit -m "Initial commit"

ls -al ~/.ssh
ssh-keygen -t ed25519 -C "email"
cat ~/.ssh/id_ed25519.pub

git remote add origin <repo>
git config --global push.autoSetupRemote true
git push origin main

http://localhost:8080
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

pipeline {
 agent any
 stages {

  stage('Checkout') {
   steps {
    git branch: 'main',
    url: 'https://github.com/username/repository.git'
   }
  }

  stage('Build') {
   steps {
    sh 'mvn clean package'
   }
  }

  stage('Test') {
   steps {
    sh 'mvn test'
   }
  }

 }
}
# Fashion Store Website

## Overview
A responsive fashion e-commerce frontend built using HTML, CSS, and JavaScript.
This project focuses on UI/UX design, responsiveness, accessibility, and client-side logic.

## Features
- Product listing
- Add to cart functionality
- Wishlist support
- Responsive layout (mobile & desktop)
- Keyboard-accessible navigation

## Tech Stack
- HTML
- CSS
- JavaScript

## How to Run
Open `index.html` in any modern browser or use Live Server.

## Notes
This is a frontend-only prototype. Product data is mocked using JavaScript.
