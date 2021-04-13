---
layout: default
author: Jenny
title: Dockerhub Stuff
blurb: Here's how to push stuff to dockerhub.

---

CTRL+SHIFT+C to copy a container or image id
CTRL+SHIFT+V to paste

https://github.com/learn-devops-fast/rock-paper-scissors
https://hub.docker.com/u/cameronmcnz



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
docker logout


</pre>
