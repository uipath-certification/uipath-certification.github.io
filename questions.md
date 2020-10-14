
<script>
var questions = [


	 {id:99, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0","3.0"
      ]},
	
	
	
	{id:1, query:"Which of the following describes the most ideal type of activity to automate with UiPath?", "answer":"test-answer.md",
			options:[
			{text:"Multistep process with many decision points with structured data", correct:false, selected:false}, 
			{text:"Perform Analysis on data and provide", correct:true, selected:false},
			{text:"Varied tasks that rely heavily on user input", correct:false, selected:false},
			{text:"Rule-based process with structured data", correct:false, selected:false}
			],
      "objectives":[
         "1.1",
         "2.2"
      ]},
	  
	  	 
	  
	  
	{id:2, query:"A client receives a spreadsheet containing orders. The orders must be input into an internal web-based order system.  Which is the best activity to use?", "answer":"test-answer.md",
			options:[
			{text:"Sequence", correct:true, selected:false}, 
			{text:"Flowchart", correct:false, selected:false},
			{text:"Learning Machine", correct:false, selected:false},
			{text:"Transactional Process", correct:false, selected:false}
			],
      "objectives":[
         "1.1",
         "2.2"
      ]},
	{id:3, query:"Which Activity requires the least amount of parameters?", 
			options:[
			{text:"SMTP", correct:false, selected:false}, 
			{text:"Outlook", correct:true, selected:false},
			{text:"POP3", correct:false, selected:false},
			{text:"Mail", correct:false, selected:false}
			],
      "objectives":[
         "1.1",
         "2.2"
      ]},			
	{id:4, query:"What happens if you try to save a table using Excel Write Range activity to a file that does not exist?", "answer":"test-answer.md",
			options:[
			{text:"Throws a “File not found” error", correct:false, selected:false}, 
			{text:"Workflow will wait until the file appears and times out if it doesn’t", correct:false, selected:false},
			{text:"Activity will not run and continue the sequence", correct:false, selected:false},
			{text:"Creates the file and saves the table", correct:true, selected:false}
			],
      "objectives":[
         "1.1",
         "2.2"
      ]},	
	{id:5, query:"When using an Excel Application Scope activity, which activity should be used to sort a table directly in an .xlsx file?",  "answer":"test-answer.md",
			options:[
			{text:"Sequence", correct:false, selected:false}, 
			{text:"Flowchart", correct:false, selected:false},
			{text:"Learning Machine", correct:false, selected:false},
			{text:"Transactional Process", correct:true, selected:false}
			],
      "objectives":[
         "1.1",
         "2.2"
      ]},	
	  	{id:6, query:"6When using an Excel Application Scope activity, which activity should be used to sort a table directly in an .xlsx file?",  "answer":"test-answer.md",
			options:[
			{text:"Sequence", correct:false, selected:false}, 
			{text:"Flowchart", correct:false, selected:false},
			{text:"Learning Machine", correct:false, selected:false},
			{text:"Transactional Process", correct:true, selected:false}
			],
      "objectives":[
         "1.1",
         "2.2"
      ]},
	  	{id:7, query:"7 When using an Excel Application Scope activity, which activity should be used to sort a table directly in an .xlsx file?",  "answer":"test-answer.md",
			options:[
			{text:"Sequence", correct:false, selected:false}, 
			{text:"Flowchart", correct:false, selected:false},
			{text:"Learning Machine", correct:false, selected:false},
			{text:"Transactional Process", correct:true, selected:false}
			],
      "objectives":[
         "1.1",
         "2.2"
      ]},
	  	{id:8, query:" 8 When using an Excel Application Scope activity, which activity should be used to sort a table directly in an .xlsx file?",  "answer":"test-answer.md",
			options:[
			{text:"Sequence", correct:false, selected:false}, 
			{text:"Flowchart", correct:false, selected:false},
			{text:"Learning Machine", correct:false, selected:false},
			{text:"Transactional Process", correct:true, selected:false}
			],
      "objectives":[
         "1.1",
         "2.2"
      ]},
	  	{id:9, query:"9 When using an Excel Application Scope activity, which activity should be used to sort a table directly in an .xlsx file?",  "answer":"test-answer.md",
			options:[
			{text:"Sequence", correct:false, selected:false}, 
			{text:"Flowchart", correct:false, selected:false},
			{text:"Learning Machine", correct:false, selected:false},
			{text:"Transactional Process", correct:true, selected:false}
			],
      "objectives":[
         "3.1", "3.2","3.3"
      ]},
	  	{id:10, query:"10 When using an Excel Application Scope activity, which activity should be used to sort a table directly in an .xlsx file?",  "answer":"test-answer.md",
			options:[
			{text:"Sequence", correct:false, selected:false}, 
			{text:"Flowchart", correct:false, selected:false},
			{text:"Learning Machine", correct:false, selected:false},
			{text:"Transactional Process", correct:true, selected:false}
			],
      "objectives":[
         "3.1", "3.2","3.3"
      ]},

	  {id:11, query:"Which of the following is a valid UiPath variable name?",  "answer":"/2020/10/10/variable-naming-conventions.html", "difficulty": "7",
			options:[
			{text:"$1000000", correct:false, selected:false}, 
			{text:"1000000$", correct:false, selected:false},
			{text:"1milliondollars", correct:false, selected:false},
			{text:"One1MillionDollars", correct:true, selected:false}
			],
      "objectives":[
         "3.1", "3.2","3.3"
      ]},
	  	  	{id:12, query:"The variable UIPATH_ASSOCIATE_EXAM is said to follow what naming convention?",  "answer":"/2020/10/10/screaming-snake-case.html", "difficulty": "3",
			options:[
			{text:"camel case", correct:false, selected:false}, 
			{text:"snake case", correct:false, selected:false},
			{text:"screaming snake case", correct:true, selected:false},
			{text:"kebab case", correct:false, selected:false}
			],
      "objectives":[
         "3.1", "3.2","3.3"
      ]},
	  	  	{id:13, query:"Which of the following variables is named using kebab case?",  "answer":"/2020/10/10/kebab-case-convention.html", "difficulty": "3",
			options:[
			{text:"WhatIsKebabCase", correct:false, selected:false}, 
			{text:"what-is-kebab-case", correct:true, selected:false},
			{text:"whatIsKebabCase", correct:false, selected:false},
			{text:"what_is_kebab_case", correct:false, selected:false}
			],
      "objectives":[
         "3.1", "3.2","3.3"
      ]},
	  
	   {id:14, query:"Which of the following is an example of the Pascal case naming convention?",  "answer":"/2020/10/10/pascal-case-naming-convention.html", "difficulty": "2",
			options:[
			{text:"Pascal-Case", correct:false, selected:false}, 
			{text:"pascalCase", correct:false, selected:false},
			{text:"PascalCase", correct:true, selected:false},
			{text:"Pascal_case", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.1"
      ]},	

	  {id:15, query:"Which of the following four is an example of a camel case naming convention?",  "answer":"/2020/10/10/camelcase-naming-convention.html", "difficulty": "4",
			options:[
			{text:"uipathNamingConventions", correct:true, selected:false}, 
			{text:"UiPath-Naming-Conventions", correct:false, selected:false},
			{text:"UIPATH_NAMING_CONVENTIONS", correct:false, selected:false},
			{text:"UiPathNamingConventions", correct:true, selected:false}
			],
      "objectives":[
         "3.1", "3.2","3.3"
      ]},	  
	  
	  
	  
	  {id:16, query:"Which of the following violates the UiPath variable naming convention?",  "answer":"/2020/10/10/variable-names.html", "difficulty": "7",
			options:[
			{text:"H1Tag", correct:true, selected:false}, 
			{text:"HWonTag", correct:false, selected:false},
			{text:"hWonTag", correct:false, selected:false},
			{text:"1hTag", correct:true, selected:false}
			],
      "objectives":[
         "3.1", "3.2","3.3"
      ]},	  

	  
	  {id:17, query:"You must pass exam data as an argument, but the data will be used both inside and oustide of the current workflow project. What should the variable be named?",  "answer":"/2020/11/11/input-output-argument-names.html", "difficulty": "5",
			options:[
			{text:"inOutExam", correct:false, selected:false}, 
			{text:"in_out_exam", correct:false, selected:false},
			{text:"io-Exam", correct:false, selected:false},
			{text:"io_Exam", correct:true, selected:false}
			],
      "objectives":[
         "3.0", "3.0","3.0"
      ]},
	  
	   {id:18, query:"The data being passed in as an argument can only be used within the current project. What should the variable be named so as not to trigger the UiPath Studio analyzer?",  "answer":"/2020/10/11/in-argument-naming-convention.html", "difficulty": "7",
			options:[
			{text:"in-field", correct:false, selected:false}, 
			{text:"inField", correct:false, selected:false},
			{text:"in_field", correct:true, selected:false},
			{text:"InField", correct:false, selected:false}
			],
      "objectives":[
         "3.1", "3.2","3.4"
      ]},	  
	  
	  
	   {id:19, query:"Which of the following is true about case sensitive variable names in UiPath",  "answer":"/2020/10/10/variables-case-sensitive-uipath.html", "difficulty": "7",
			options:[
			{text:"UiPath method names are case sensitive", correct:false, selected:false}, 
			{text:"UiPath variable names are case sensitive", correct:false, selected:false},
			{text:"UiPath method names are not case sensitive", correct:true, selected:false},
			{text:"UiPath variable names are not case sensitive", correct:true, selected:false}
			],
      "objectives":[
         "3.1", "3.2", "3.0"
      ]},	  
	  
	  
	   {id:20, query:"A field that describes a name must be passed outside of a given project. What should it be named?",  "answer":"/2020/10/10/uipath-argument-naming-convention.html", "difficulty": "7",
			options:[
			{text:"out_name", correct:true, selected:false}, 
			{text:"pass_name", correct:false, selected:false},
			{text:"name", correct:false, selected:false},
			{text:"getName", correct:false, selected:false}
			],
      "objectives":[
         "3.1", "3.2", "3.0"
      ]},	  
	  
	   {id:21, query:"A UiPath transition activity is associated with which type of project?",  "/2020/10/11/state-machine.html":"answer", "difficulty": "8",
			options:[
			{text:"Sequence", correct:false, selected:false}, 
			{text:"Flow Chart", correct:false, selected:false},
			{text:"State Machine", correct:true, selected:false},
			{text:"Process Chart", correct:false, selected:false}
			],
      "objectives":[
         "5.0", "5.1"
      ]},
	  
	   {id:22, query:"A complex activity to be automated has many subroutines to be executed depending on the result of evaluating various logical conditions. What is the best approach to architecting this RPA activity?",  "answer":"/2020/10/11/sequence-flowchart-combined.html", "difficulty": "6",
			options:[
			{text:"Use a single workflow project", correct:false, selected:false}, 
			{text:"Use multiple workflows projects", correct:false, selected:false},
			{text:"Use a single sequence project which references multiple workflow projects", correct:false, selected:false},
			{text:"Use a single workflow project that references mutliple sequence projects", correct:true, selected:false}
			],
      "objectives":[
         "5.0", "5.1"
      ]},
	  
	   {id:23, query:"Which type of project is best for linear activities involving multiple activities such as OCR and PDF data extraction?",  "answer":"/2020/10/11/linear-sequence-projects.html", "difficulty": "6",
			options:[
			{text:"Sequence", correct:true, selected:false}, 
			{text:"Flow Chart", correct:false, selected:false},
			{text:"State Machine", correct:false, selected:false},
			{text:"Global Exception Handler", correct:false, selected:false}
			],
      "objectives":[
         "5.0", "5.1"
      ]},
	  

	  
	   {id:24, query:"A task to be automated has multiple decision points with unique UiPath activities to be performed based on the outcome of various conditions. What type of project should be used in this situation?",  "answer":"/2020/10/11/flowchart-project-definition.html", "difficulty": "6",
			options:[
			{text:"Sequence", correct:false, selected:false}, 
			{text:"Flow Chart", correct:true, selected:false},
			{text:"State Machine", correct:false, selected:false},
			{text:"This task cannot be automated", correct:false, selected:false}
			],
      "objectives":[
         "3.1", "3.2","3.0"
      ]},
	  
	  
	   {id:25, query:"Which type of project is most likely to be used and reused in other projects?",  "answer":"/2020/10/10/sequence-projects.html", "difficulty": "5",
			options:[
			{text:"Sequence", correct:true, selected:false}, 
			{text:"Flow Chart", correct:false, selected:false},
			{text:"State Machine", correct:false, selected:false},
			{text:"Global Exception Handler", correct:false, selected:false}
			],
      "objectives":[
         "5.0", "5.1"
      ]},
	  

	  
	  {id:26, query:"A expense report submission process, in which the first step requires the user to log into the reporting system, must attach scanned image receipts and PDF files as part of the expense. This activity lends itself best to which of the following implementations:",  "answer":"/2020/11/11/unattended-robots-when-to-use.html", "difficulty": "6",
			options:[
			{text:"A process that uses a single unattended robot", correct:false, selected:false}, 
			{text:"A process that uses a single attended robot", correct:true, selected:false},
			{text:"A process that uses both a single attended robot and a single unattended robot", correct:false, selected:false},
			{text:"This process does not lend itself to automation", correct:false, selected:false}
			],
      "objectives":[
         "1.0", "1.2",
      ]},
	  
	  	   {id:27, query:"In contrast with attended robots, unattended robots are best used with:",  "answer":"/2020/11/11/unattended-robots-use-case.html", "difficulty": "6",
			options:[
			{text:"simple, one-off tasks", correct:false, selected:false}, 
			{text:"complex, one-off tasks", correct:false, selected:false},
			{text:"simple, repetative tasks", correct:false, selected:false},
			{text:"complex, repetative tasks", correct:true, selected:false}
			],
      "objectives":[
         "1.0", "1.2",
      ]},
	  
	  	   {id:28, query:"Which of the following statements are true?",  "answer":"/2020/11/11/uipath-robot-security-isoloation.html", "difficulty": "6",
			options:[
			{text:"Attended automations cannot guarantee security isolation between the robot and the user", correct:true, selected:false}, 
			{text:"Unattended automations cannot guarantee security isolation between the robot and the user", correct:false, selected:false},
			{text:"Attended automations always require a human present", correct:true, selected:false},
			{text:"Unattended automations always require a human present", correct:false, selected:false}
			],
      "objectives":[
         "1.0", "1.2",
      ]},
	  
	  	   {id:29, query:"A robot that is tied to a specific machine and not allowed to run on any machines other than the one it is tied to in UiPath Orchestrator is known as:",  "answer":"/2020/11/11/standard-robots-unattended-uipath.html", "difficulty": "8",
			options:[
			{text:"An unattended robot", correct:false, selected:false}, 
			{text:"A standard robot", correct:true, selected:false},
			{text:"A sticky robot", correct:false, selected:false},
			{text:"A floating robot", correct:false, selected:false}
			],
      "objectives":[
         "1.0", "1.2",
      ]},
	  
	  {id:30, query:"A robot that can be used by mutiple users and run on multiple workstations without being tied to a specific machine is known as a(n):",  "answer":"/2020/11/11/floating-robots-unattended.html", "difficulty": "8",
			options:[
			{text:"attended robot", correct:false, selected:false}, 
			{text:"unattended robot", correct:false, selected:false},
			{text:"floating robot", correct:true, selected:false},
			{text:"standard robot", correct:false, selected:false}
			],
      "objectives":[
           "1.0", "1.2",
      ]},
	  
	  {id:31, query:"Attended robots are best used with:",  "answer":"/2020/11/11/attend-robot-use-cases.html", "difficulty": "5",
			options:[
			{text:"small, continuous automations", correct:false, selected:false}, 
			{text:"small, fragmented automations", correct:true, selected:false},
			{text:"large, fragmented automations", correct:false, selected:false},
			{text:"large, continuous automations", correct:false, selected:false}
			],
      "objectives":[
         "1.0", "1.2",
      ]},
	  
	  
	  {id:32, query:"Which of the following statements are true about UiPath Studio Community Edition (CE)?",  "answer":"/2020/11/11/uipath-studio-updates.html", "difficulty": "5",
			options:[
			{text:"UiPath Studio CE is limited to a single attended robot but an unlimited number of unattended robots", correct:false, selected:false}, 
			{text:"UiPath Studio CE is limited to a single unattended robot but an unlimited number of attended robots", correct:false, selected:false},
			{text:"UiPath Studio CE cannot be installed in a top security environment with in Internet access", correct:true, selected:false},
			{text:"UiPath Studio CE updates cannot be turned off", correct:true, selected:false}
			],
      "objectives":[
         "1.0", "1.4",
      ]},


	  {id:33, query:"The UiPath Enterprise Server:",  "answer":"/2020/11/11/uipath-enterprise-server-saas.html", "difficulty": "5",
			options:[
			{text:"Is accessed through the cloud", correct:false, selected:false}, 
			{text:"Is installed on a computer by the client", correct:true, selected:false},
			{text:"Is not compatible with UiPath Studio Community Edition", correct:false, selected:false},
			{text:"Is not compatible with UiPath Studio Enterprise trial editions", correct:true, selected:false}
			],
      "objectives":[
         "1.0", "1.4",
      ]},



	  {id:34, query:"What is the standard duration of a UiPath Studio Community Edition trial?",  "answer":"/2020/11/11/uipath-studio-trail-license.html", "difficulty": "5",
			options:[
			{text:"30 days", correct:false, selected:false}, 
			{text:"60 days", correct:false, selected:false},
			{text:"90 days", correct:false, selected:false},
			{text:"Unlimited", correct:true, selected:false}
			],
      "objectives":[
         "1.0", "1.4",
      ]},


	  {id:35, query:"Which of the following is true about programs written in UiPath Stuido Community Edition?",  "answer":"/2020/11/11/uipath-studio-programs.html", "difficulty": "6",
			options:[
			{text:"They cannot use libraries created by UiPath Stuido Enterprise Edition", correct:false, selected:false}, 
			{text:"Programs created in UiPath Stuido Community Edition expire if the 60 day trial is not extended", correct:false, selected:false},
			{text:"Programs created in UiPath Studio Community Edition cannot pass arguments between projects", correct:false, selected:false},
			{text:"Programs creating in UiPath Studio Community Edition are no different than programs created in the Enterprise Edition", correct:true, selected:false}
			],
      "objectives":[
         "1.0", "1.4",
      ]},

	  {id:36, query:"Which of the following is true about UiPath Studio?",  "answer":"/2020/11/11/uipath-studio-enterprise-vs-community.html", "difficulty": "7",
			options:[
			{text:"The Community Edition always updates if a new stable release is available", correct:true, selected:false}, 
			{text:"The Community Edition always updates if a new preview release is available", correct:true, selected:false},
			{text:"The Enterprise Edition always updates if a new stable release is available", correct:false, selected:false},
			{text:"The Enterprise Edition always updates if a new preview release is available", correct:false, selected:false}
			],
      "objectives":[
         "1.0", "1.4",
      ]},

	  {id:37, query:"What is the standard duration of a UiPath Studio Enterprise Edition trial?",  "answer":"/2020/11/11/UiPath-Enterprise-trial.html", "difficulty": "4",
			options:[
			{text:"30 days", correct:false, selected:false}, 
			{text:"60 days", correct:true, selected:false},
			{text:"90 days", correct:false, selected:false},
			{text:"Unlimited", correct:false, selected:false}
			],
      "objectives":[
         "1.0", "1.4",
      ]},

	  {id:38, query:"Which of the following is true about UiPath Stuido Community Edition (CE)?",  "answer":"/2020/11/11/Studio-Community-Orchestrator.html", "difficulty": "7",
			options:[
			{text:"UiPath Studio CE can only connect to UiPath Orchestrator CE", correct:true, selected:false}, 
			{text:"UiPath Studio CE can connect to both UiPath Orchestrator CE and Enterprise", correct:false, selected:false},
			{text:"UiPath Studio CE does not have access to AI Computer Vision", correct:false, selected:false},
			{text:"UiPath Studio CE does have access to AI Computer Vision", correct:true, selected:false}
			],
      "objectives":[
         "1.0", "1.4",
      ]},

	  {id:39, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},

	  {id:30, query:"query",  "answer":"answer", "difficulty": "5",
			options:[
			{text:"aaaaa", correct:false, selected:false}, 
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false},
			{text:"aaaaa", correct:false, selected:false}
			],
      "objectives":[
         "3.0", "3.0"
      ]},	  

	  
	];
	
	
	
if (typeof(Storage) !== "undefined") {
  // Store
  //localStorage.setItem("lastname", "Smith");
  localStorage.setItem("questions", JSON.stringify(questions));
  
  
  // Retrieve
  //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  //var questions2 = localStorage.getItem("questions");
  //questions2 = JSON.parse(questions2);
  //console.log(questions2);
  

  //document.getElementById("quiz").innerHTML = (questions)[0].query;
  //document.getElementById("quiz").innerHTML = questions[0].id;
} else {
  //document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
</script>
Just saving the exam questions.

