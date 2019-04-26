import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

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
    this.getDB().then((db:SQLiteObject) => {
      db.executeSql("CREATE TABLE IF NOT EXISTS usuarios(\
          id INTEGER PRIMARY KEY AUTOINCREMENT,\
          email TEXT,\
          senha TEXT\
        )", []);       
      
    });
    
  } //fim createDB
  

}
