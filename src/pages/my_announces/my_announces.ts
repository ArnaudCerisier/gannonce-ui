import {Component} from "@angular/core";
import {LoginService} from "../../services/login-service";
import {AnnounceService} from "../../services/announce-service";

@Component({
  selector: 'my_announces',
  template: require('../../app/topbar.html') + require('./my_announces.html')
})
export class MyAnnouncesPage {

  announces:any = []
  title:string = "Mes annonces"

  constructor(
    public loginService:LoginService,
    public announceService:AnnounceService) {

    this.announceService.myAnnounces(loginService.pub)
      .then(res => this.announces = res.announces)
  }
}
