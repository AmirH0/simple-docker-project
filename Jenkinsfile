pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/AmirH0/simple-docker-project.git'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t simple-docker-project:latest ./app'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose -f docker-compose.yml up -d --build app'
            }
        }
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
