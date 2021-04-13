---
layout: default
author: Jenny
title: Dockerhub Stuff
blurb: Here's how to push stuff to dockerhub.

---



https://github.com/learn-devops-fast/rock-paper-scissors
![image](https://user-images.githubusercontent.com/72342420/114593811-85295400-9c5a-11eb-9369-204ebcb6bd18.png)
https://hub.docker.com/u/cameronmcnz
![image](https://user-images.githubusercontent.com/72342420/114593837-8ce8f880-9c5a-11eb-81c3-7cc5697eaebe.png)


<pre>

### Run the image on http://localhost:8066
sudo -i
sudo docker run -p 8066:8080 -t cameronmcnz\spock-lizard-cameron

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
docker login –username=cameronmcnzdocker push cameronmcnz/ridley:latest


</pre>
