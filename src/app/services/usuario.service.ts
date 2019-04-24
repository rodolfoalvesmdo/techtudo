import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BancoService } from './banco.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BancoService {

  public logar(email: string, senha: string): Promise<any> {
    return this.getDB().then((db: SQLiteObject) => {
        return db.executeSql("SELECT email FROM usuarios WHERE email = ? AND senha = ?", [email, senha]).then(resultado => { 
          return (resultado.rows.length > 0);
        });
    });
  }

  public buscarUsuarios(): Promise<any> {
    return this.getDB().then((db: SQLiteObject) => {
      return db.executeSql("SELECT * FROM usuarios", []).then(resultado => {
        let retornar = [];
        if (resultado.rows.length > 0) {
          for(let i = 0; i < resultado.rows.length; i++) {
            retornar.push(resultado.rows.item(i));
          }
        }
        return retornar;
      })
    });
  }
  
}
