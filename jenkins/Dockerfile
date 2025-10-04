FROM jenkins/jenkins:lts

USER root

# پاک کردن cache قبلی و آماده‌سازی apt
RUN rm -rf /var/lib/apt/lists/* && apt-get clean

# آپدیت و نصب ابزارهای پایه
RUN apt-get update && apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    software-properties-common

# اضافه کردن GPG key رسمی Docker و repo آن
RUN mkdir -p /etc/apt/keyrings && \
    curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list

# نصب Docker CLI و Compose Plugin
RUN apt-get update && apt-get install -y docker-ce-cli docker-compose-plugin

USER jenkins
