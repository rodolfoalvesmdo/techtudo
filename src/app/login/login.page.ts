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
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  auth() {
    if (
      this.formulario.valid &&
      this.formulario.get("email").value == "rodolfo@techtudo.com.br" &&
      this.formulario.get("senha").value == "123456"
    ) {
      AuthGuard.podeAcessar = true;
      this.formulario.reset();
      this.router.navigateByUrl('categorias');      
    } else {
      this.msg = "Login ou senha incorreto!";
    }
  }

  async logar() {
    let logou = await this.usuarioService.logar(this.formulario.get('email').value, this.formulario.get('senha').value);

    if(logou) {
      AuthGuard.podeAcessar = true;
      this.formulario.reset();
      this.router.navigateByUrl('categorias');
    } else {
      this.msg = "Login ou senha incorreto!";
    }
  }
}
