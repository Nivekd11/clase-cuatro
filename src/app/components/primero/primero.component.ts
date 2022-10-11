import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit {

  public form!: FormGroup

  constructor(/*public formGroup: FormGroup,public formControl: FormControl*/) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl("",[Validators.required]),
      name: new FormControl("",[Validators.maxLength(10),Validators.minLength(5),Validators.required]),
      password: new FormControl("",Validators.required),
      telefono: new FormControl("",[Validators.pattern("^[0-9]*$"),Validators.required])
    });
  }

  onSubmit(){
    this.form.markAsDirty()
    this.form.markAllAsTouched()
    this.markAllAsDirty()

    console.log("bien")
    console.log(this.form)
    console.log(this.form.get("name")?.value)
    console.log(this.form.get("email")?.value)
    console.log(this.form.get("password")?.value)

    

    if(this.form.invalid){
      //
      return
    }

    /* Enviar datos al servidor*/
  
  }

  markAllAsDirty(){
    this.form.get('name')?.markAsDirty()
    this.form.get('password')?.markAsDirty()
    this.form.get('email')?.markAsDirty()
    this.form.get('telefono')?.markAsDirty()
  }

}
