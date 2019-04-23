import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private sqlite: SQLite) { 
    this.sqlite.create({
      name: 'tech_tudo.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql("CREATE TABLE IF NOT EXISTS usuarios ( \
          id INTEGER PRIMARY KEY AUTOINCREMENT, \
          login TEXT, \
          senha TEXT, \
        )", []);

        db.executeSql("INSERT INTO usuarios (login, senha) VALUES (?, ?)", ["rodolfo@techtudo.com.br", "123456"]);
    });

  }

  public logar(login: string, senha: string): Promise<any> {
    return this.sqlite.create({
      name: 'tech_tudo.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      return db.executeSql("SELECT login FROM usuarios WHERE login = ? AND senha = ?", [login, senha]).then(resultado => {
        return (resultado.rows.length > 0);
      })
    })
  }


}
