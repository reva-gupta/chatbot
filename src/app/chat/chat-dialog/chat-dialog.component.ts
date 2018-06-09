import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  questionNum = 0;	// keep count of question, used for IF condition.
  count=0;
  question = 'What is your name?';
  amt1;
  amt2;
  amt3;
  amt4; 
				  // first question
  output = document.getElementById('output'); // store id="output" in output variable
constructor() { }

  ngOnInit() {
  }
  bot() { 
    var input = (<HTMLInputElement>document.getElementById("input")).value;
    console.log(input);
    alert("Hello!  "+input);
    var output = document.getElementById('output');
    this.question = '<h1>Enter 1st bill?</h1>';	
    var output = document.getElementById('output');			
     output.innerHTML = this.question;   
    (<HTMLInputElement>document.getElementById("input")).value = "";   		// clear text box
}
 bot1() { 
  this.question = '<h1>Enter 2nd bill?</h1>';	
  var output = document.getElementById('output');			
   output.innerHTML = this.question;
   this.amt1 = (<HTMLInputElement>document.getElementById("input")).value;
   this.amt1=parseInt(this.amt1,10);
  console.log(this.amt1);
  //output.innerHTML = '<h1>1 st bill ' + amt1 + '</h1>';// output response
  (<HTMLInputElement>document.getElementById("input")).value = "";   		// clear text box
  }   
   bot2() { 
    this.question = '<h1>Enter 3rd bill?</h1>';	
    var output = document.getElementById('output');			
     output.innerHTML = this.question;
     this.amt2 = (<HTMLInputElement>document.getElementById("input")).value;
     this.amt2=parseInt(this.amt2,10);
    console.log(this.amt2);
    //output.innerHTML = '<h1>1 st bill ' + amt2 + '</h1>';// output response
    (<HTMLInputElement>document.getElementById("input")).value = "";   		// clear text box
    } 
    bot3() { 
      this.question = '<h1>Do you want to know the best plan?</h1>';	
      var output = document.getElementById('output');			
       output.innerHTML = this.question;
       this.amt3 = (<HTMLInputElement>document.getElementById("input")).value;
       this.amt3=parseInt(this.amt3,10);
      console.log(this.amt3);
     // output.innerHTML = '<h1>1 st bill ' + amt3 + '</h1>';// output response
      (<HTMLInputElement>document.getElementById("input")).value = "";   		// clear text box
      } 
      avg()
      {      this.amt4=(this.amt1+this.amt2+this.amt3)/3.0;
        var output = document.getElementById('output');	
        output.innerHTML = '<h1>Average bill amount is ' + this.amt4 + '</h1>';
          (<HTMLInputElement>document.getElementById("input")).value = "";
      }
  
  checkkey(event)
  { switch (this.count)
      {case 0: 
    console.log("bot");  this.bot();  this.count++;  break;
    case 1: 
    console.log("bot1");  this.bot1();  this.count++;  break;
    case 2: 
    console.log("bot2");  this.bot2();  this.count++;  break;
    case 3: 
    console.log("bot3");  this.bot3();  this.count++;  break;
    case 4: 
    console.log("avg");  this.avg();  this.count++;  break;
      }
    }
   
  
}
