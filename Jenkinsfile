pipeline {
    agent {
        docker {
            image 'node:20.11.1-alpine3.19' 
            args '-p 3000:3000' 
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/pmas98/bluegreendeploytest.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                    sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t bluegreendeploy .'
                }
            }
        }
    }
