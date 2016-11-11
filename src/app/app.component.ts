import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  email="503r.vijay@gmail.com";
   constructor(){
		var head= document.getElementsByTagName('head')[0];
		var script= document.createElement('script');
		script.type= 'text/javascript';
		script.src= 'https://apis.google.com/js/platform.js';
		head.appendChild(script);
		var body= document.getElementsByTagName('body')[0];
		var div= document.createElement('div');
		div.id="hangout";
		div.innerHTML='<g:hangout render="createhangout" invites="[{ id : \''+this.email+'\', invite_type : \'EMAIL\' }]"> </g:hangout>';
		body.appendChild(div);

  }
}
