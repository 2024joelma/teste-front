import { Component } from '@angular/core';
import {  FormBuilder,FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catalogo-produtos';

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nomeitem: [''],
      unidade: [''],
      quantidade: [''],
      preço: [''],
      produtoperecivel: [''],
      datavalidade: [''],
      datafabricação: [''],
    });
  }
}
