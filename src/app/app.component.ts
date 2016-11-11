import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  div;
  first:boolean=true;
  body;
   constructor(){

  }
  setEmail(email){
  		this.first=false;
		var head= document.getElementsByTagName('head')[0];
		var script= document.createElement('script');
		script.type= 'text/javascript';
		script.src= 'https://apis.google.com/js/platform.js';
		head.appendChild(script);
		this.body= document.getElementsByTagName('body')[0];
		this.div= document.createElement('div');
		this.div.innerHTML='<g:hangout render="createhangout" invites="[{ id : \''+email+'\', invite_type : \'EMAIL\' }]"> </g:hangout>';
		this.body.appendChild(this.div);
  }
}
