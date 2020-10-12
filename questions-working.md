
<script>
var questions = [
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
	  	  	{id:11, query:"Which of the following violates the UiPath variable naming convention?",  "answer":"/2020/10/10/variable-names.html", "difficulty": "7",
			options:[
			{text:"H1Tag", correct:true, selected:false}, 
			{text:"HWonTag", correct:false, selected:false},
			{text:"hWonTag", correct:false, selected:false},
			{text:"1hTag", correct:true, selected:false}
			],
      "objectives":[
         "3.1", "3.2","3.3"
      ]},
	  	  	{id:12, query:"Which of the following is a valid UiPath variable name?",  "answer":"/2020/10/10/variable-naming-conventions.html", "difficulty": "7",
			options:[
			{text:"$1000000", correct:false, selected:false}, 
			{text:"1000000$", correct:false, selected:false},
			{text:"1milliondollars", correct:false, selected:false},
			{text:"One1MillionDollars", correct:true, selected:false}
			],
      "objectives":[
         "3.1", "3.2","3.3"
      ]},
	  	  	{id:13, query:"The variable UIPATH_ASSOCIATE_EXAM is said to follow what naming convention?",  "answer":"/2020/10/10/screaming-snake-case.html", "difficulty": "3",
			options:[
			{text:"camel case", correct:false, selected:false}, 
			{text:"snake case", correct:false, selected:false},
			{text:"screaming snake case", correct:true, selected:false},
			{text:"kebab case", correct:false, selected:false}
			],
      "objectives":[
         "3.1", "3.2","3.3"
      ]},
	  	  	{id:14, query:"Which of the following variables is named using kebab-case?",  "answer":"test-answer.md", "difficulty": "3",
			options:[
			{text:"WhatIsKebabCase", correct:false, selected:false}, 
			{text:"what-is-kebab-case", correct:true, selected:false},
			{text:"whatIsKebabCase", correct:false, selected:false},
			{text:"what_is_kebab_case", correct:false, selected:false}
			],
      "objectives":[
         "3.1", "3.2","3.3"
      ]},
	  	  	{id:15, query:"Which of the following would be an example of a camel case naming convention?",  "answer":"/2020/10/10/camelcase-naming-convention.html", "difficulty": "4",
			options:[
			{text:"uipathNamingConventions", correct:true, selected:false}, 
			{text:"UiPath-Naming-Conventions", correct:false, selected:false},
			{text:"UIPATH_NAMING_CONVENTIONS", correct:false, selected:false},
			{text:"UiPathNamingConventions", correct:true, selected:false}
			],
      "objectives":[
         "3.1", "3.2","3.3"
      ]},


	  
	];
	
	
	
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("lastname", "Smith");
  localStorage.setItem("questions", JSON.stringify(questions));
  
  
  // Retrieve
  document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  var questions2 = localStorage.getItem("questions");
  //questions2 = JSON.parse(questions2);
  console.log(questions2);
  

  document.getElementById("quiz").innerHTML = (questions)[0].query;
  //document.getElementById("quiz").innerHTML = questions[0].id;
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
</script>
Just saving the exam questions.

