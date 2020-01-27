pipeline {
    agent {
        docker {
            image 'cypress/base' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm run cy:install'
            }
        }
        stage('Test - Jest') { 
            steps {
                sh 'npm run test' 
            }
        }
        stage('Test - Cypress') { 
            steps {
                sh 'npm run cy:run'
            }
        }
    }
}