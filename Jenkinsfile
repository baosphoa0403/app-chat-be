pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                echo 'Init Hello World 1234'
//                  sh 'git clone https://github.com/baosphoa0403/app-chat-be.git'
            }
        }
        stage('Build And Push Image') {
                    steps {
                       // This step should not normally be used in your script. Consult the inline help for details.
                       withDockerRegistry(credentialsId: 'giabao0403', url: 'https://index.docker.io/v1/') {
                           // some block
                           sh 'docker build -t giabao0403/app-chat-be:latest'
                           sh 'docker push giabao0403/app-chat-be:latest'
                       }
                   }
        }
    }
}