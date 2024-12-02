pipeline {
    agent any
    stages {
        stage('Construir Imagem Docker') {
            steps {
                script {
                    def appName = 'apimicro'
                    def imageTag = "${appName}"

                    // Construir a imagem Docker
                   bat "docker build -t ${imageTag} ."
                }
            }
        }

        stage('Fazer Deploy') {
            steps {
                script {
                    def appName = 'apimicro'
                    def imageTag = "${appName}"
                    bat  "docker stop ${appName} || true"
                    bat  "docker rm ${appName} || true"
                    // Executar o novo container
                    bat "docker run -d --name ${appName} -p 3010:3010 ${imageTag}"
                }
            }
        }
    }
    post {
        success {
            echo 'Deploy realizado com sucesso!'
        }
        failure {
            echo 'Houve um erro durante o deploy.'
        }
    }
}
