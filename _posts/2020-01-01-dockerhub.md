---
layout: default
author: Jenny
title: Dockerhub Stuff
blurb: Here's how to push stuff to dockerhub.
canonical: https://www.rpacertified.com/2020/01/01/dockerhub.html
---
# Docker Example

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/r1RNlZ-4bFE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>

<br/>
## Link to Kubernetes Quiz

<a href="https://www.rpacertified.com/2021/04/12/kubernetes-quiz.html">https://www.rpacertified.com/2021/04/12/kubernetes-quiz.html</a>

<hr/>

## Lab 3: Name that tune

<b>I can perform Lab three in as few as six commands:</b>

  sudo -i

  minikube start vm-driver = none
  
  kubectl create deployment rps-4-bah –-image=cameronmcnz/tswift
  
  kubectl expose deployment rps-4-bah –-type=NodePort --port=8080
  
  kubectl service rps-4-bah --url=true
  
  kubectl scale –-replicas=3 deployment/rps-4-bah
  
  
<img src="https://static.spin.com/files/2017/08/TaylorCombo-1504115097-2500x1000.jpg" class="img-fluid"/>


### Kubernetes Commands 

  sudo -i

  minikube start vm-driver = none
  
  minikube status
  
  kubectl version
  
  kubectl cluster-info
  
  minikube dashboard

## In a second terminal as dashboard stays alive

  sudo -i
  
  kubectl get nodes
  
  kubectl create deployment rps-4-bah –-image=cameronmcnz/tswift
  
  kubectl describe pod rps-4-bah-####
  
  kubectl get pods
  
  kubectl expose deployment rps-4-bah –-type=NodePort --port=8080
  
  kubectl service rps-4-bah --url=true
  
  kubectl scale –-replicas=3 deployment/rps-4-bah
  


## Some hints:
CTRL+SHIFT+C to copy a container or image id
CTRL+SHIFT+V to paste

## Useful Links:

https://github.com/learn-devops-fast/rock-paper-scissors

https://hub.docker.com/u/cameronmcnz




## Commands to run in your VM!


### Run the image on http://localhost:8066

sudo -i
### docker pull cameronmcnz/cross-spock-lizard

docker run -p 8066:8080 -t cameronmcnz/cross-spock-lizard

### Get the container id and open the OS

docker ps

docker exec –it aabbccddeefff00 /bin/ash

touch echo “Ridley Bent” >> imarockstar.txt

ls

exit

### Create a new image

docker commit aabbccddeefff00 ridley:v1.0

docker images

docker run -p 8099:8080 –t ridley:v1.0

### Get the image id and tag it

docker images

docker tag <imageid> cameronmcnz/ridley:latest
  
  
### Push the image to dockerhub  

docker login 

### cameronmcnz
### autoBAHn.

docker push cameronmcnz/ridley:latest

docker logout


https://kubernetes.io/docs/concepts/architecture/cloud-controller/

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/vkZ6aXjHFCU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
</div>

