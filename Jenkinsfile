pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
               git branch: 'main', url: 'https://github.com/AmirH0/simple-docker-project.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t simple-docker-project:latest ./app'
            }
        }
        // stage('Deploy') {
        //     steps {
        //         sh 'docker compose up -d --build'
        //     }
        // }

        
    }

    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}

    