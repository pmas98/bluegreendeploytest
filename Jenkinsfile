pipeline {
    agent any

    tools {
        NodeJS 'node' // Install Node.js tool named 'node'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/pmas98/bluegreendeploytest.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
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
}
