---
layout: docker-test
author: Cameron
title: Kubernetes Quiz
blurb: Here is a tougher Kubernetes quiz for you.
canonical: https://www.rpacertified.com/2021/04/12/kubernetes-quiz.html
---

<script>
var exam = null;
var questionNumber = 0;

window.addEventListener('load', function () {

 var questionBank = localStorage.getItem("questions");
 //console.log("The size is: " + questionBank.length);
 questionBank = JSON.parse(questionBank);
 questionBank = questionBank.slice(71,86);
 
 try {
  exam = new Exam(questionBank);
  //console.log("Exam created without parsing the exam!");
 }
 catch(err) {
   console.log("Error creating exam! " + err.message);
 }

 displayQuestion(questionNumber);
 initializeQuestionJumper();
 
});
</script>

<hr/>

<div class="row">
	
    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card  w-100">
            <div class="card-header">
            Rock-Paper-Kubernetes
            </div>

            <div class="card-body">
<!-- **************************** -->       

<!-- ************* Add EMBED url here. It must include 'embed' in the URL!!! ****************** -->	
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/r1RNlZ-4bFE"></iframe>
<!-- ******************************* -->	

<!-- **************************** -->   
            
            
            </div>
        </div>
    </div>
	
	<div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 d-flex align-items-stretch">
        <div class="card w-100">
            <div class="card-header">
            Rock-Paper-Docker
            </div>

            <div class="card-body">
	Docker stuff<a href="http://www.twitter.com/cameronmcnz">@cameronmcnz</a>.	    
	    
<div class="embed-responsive embed-responsive-16by9">
	
<!-- ************* Add EMBED url here. It must include 'embed' in the URL!!! ****************** -->	
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/vkZ6aXjHFCU"></iframe>
<!-- ******************************* -->	
</div>

#UiPath #UiPathCertified #RPACertified #RPA #RPACertification #UiPathTutorial
            </div>
        </div>
    </div>
	
</div>

´´´

  sudo -i
  minikube start vm-driver = none
  minikube status
  kubectl version
  kubectl cluster-info
  minikube dashboard

  sudo -i
  kubectl get nodes
  kubectl create deployment rps-4-bah –-image=cameronmcnz/tswift
  kubectl describe pod rps-4-bah-####
  kubectl get pods
  kubectl expose deployment rps-4-bah –-type=NodePort --port=8080
  kubectl service rps-4-bah --url=true
  kubectl scale –-replicas=3 deployment/rps-4-bah
  
´´´
