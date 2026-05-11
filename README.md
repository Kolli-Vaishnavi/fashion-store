sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key
echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt update
sudo apt install jenkins

mvn archetype:generate -DgroupId=coll.cmrit -DartifactId=my_app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
cd my_app
mvn package
java -cp target/my_app-1.0-SNAPSHOT.jar coll.cmrit.App

git config --global user.email "kova23cs@cmrit.ac.in"
git config --global user.name "Kolli-Vaishnavi"

git init
git add .
git commit -m "Initial commit"

ls -al ~/.ssh
ssh-keygen -t ed25519 -C "kova23cs@cmrit.ac.in"
cat ~/.ssh/id_ed25519.pub

git remote add origin git@github.com:Kolli-Vaishnavi/my_app.git

git push origin master

http://localhost:8080
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

pipeline {
 agent any
 stages {

  stage('Checkout') {
   steps {
    git branch: 'main',
    url: 'https://github.com/Kolli-Vaishnavi/my_app.git'
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
