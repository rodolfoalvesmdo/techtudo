import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  email = "rodolfoalvesmdo@gmail.com"
  senha = "123456"

  constructor(private sqlite: SQLite, platform: Platform) { 
    platform.ready().then(() => this.createDB());
  }

  protected getDB() {
    return this.sqlite.create({
      name: 'tech_tudo.db',
      location: 'default'
    });
  } //fim getDB

  private createDB() {
    this.getDB().then((db: SQLiteObject) => {
      db.executeSql("CREATE TABLE IF NOT EXISTS usuarios ( \
          id INTEGER PRIMARY KEY AUTOINCREMENT, \
          email TEXT, \
          senha TEXT, \
        )", []);       
      
      db.executeSql("INSERT INTO usuarios (email, senha) VALUES (?, ?)", [this.email, this.senha]);

    });

  } //fim createDB

  

}
