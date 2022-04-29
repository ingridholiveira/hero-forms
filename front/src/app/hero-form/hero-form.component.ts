import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
            /*
            id: number,
    public name: string,
    public power: string,
    public accepted: boolean,
    public email: string,
    public alterEgo?: string,
    public birthDate?: string
            */

  model = new Hero(18, 'Dr IQ', this.powers[0], true, 'test@test.com', 'Chuck Overstreet', '10/10/2010');

  submitted = false;

  onSubmit() { this.submitted = true; }


  newHero() {
    this.model = new Hero(42, '', '', false,'', '', '');
  }



  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////

}
