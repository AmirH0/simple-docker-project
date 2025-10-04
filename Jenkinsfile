pipeline {
    agent any

    environment {
        APP_NAME = "simple-docker-project"
        IMAGE_TAG = "latest"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/AmirH0/simple-docker-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${APP_NAME}:${IMAGE_TAG} ./app"
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                sh "docker compose up -d --build"
            }
        }
    }

    post {
        success { echo "Pipeline completed successfully!" }
        failure { echo "Pipeline failed." }
    }
}
