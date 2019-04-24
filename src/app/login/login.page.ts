import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthGuard } from '../guards/auth.guard';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  msg = "";
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ["rodolfoalvesmdo@gmail.com ", [Validators.required, Validators.email]],
      senha: ["123456", [Validators.required, Validators.minLength(6)]]
    });
  }

  async efetuarLogin() {
    let logou = await this.usuarioService.logar(this.formulario.get('email').value, this.formulario.get('senha').value);

    if(logou) {
      AuthGuard.podeAcessar = true;
      this.formulario.reset();
      this.router.navigateByUrl('categorias');
    } else {
      this.msg = "Login ou senha incorreto!";
    }
  }

  // async efetuarLogin() {
  //   let logou = await this.usuarioService.logar(this.formulario.get('email').value, this.formulario.get('senha').value);

  //   if(logou) {

  //     this.usuarioService.buscarUsuarios().then(resultados => {
  //       resultados.forEach(usuario => {
  //         if(usuario.email == this.formulario.get('email').value && usuario.senha == this.formulario.get('senha').value) {
  //           this.id = usuario.id;
  //         }
  //       });
  //     });

  //     AuthGuard.podeAcessar = true;
  //     this.formulario.reset();
  //     this.router.navigateByUrl('categorias');
      
  //   } else {
  //     this.msg = "Login ou senha incorreto!";
  //   }
  // }
}
