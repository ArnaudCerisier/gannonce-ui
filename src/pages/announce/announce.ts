import {Component, OnInit} from "@angular/core";
import {AccountService} from "../../services/account-service";
import {LoginService} from "../../services/login-service";
import {KeyPairService} from "../../services/keypair-service";
import {ActivatedRoute} from "@angular/router";
import {AnnounceService} from "../../services/announce-service";

@Component({
  selector: 'announce',
  template: require('../../app/topbar.html') + require('./announce.html')
})
export class AnnouncePage implements OnInit {

  title:string = "Consulter une annonce"

  constructor(
    private route: ActivatedRoute,
    public loginService:LoginService,
    public keypairService: KeyPairService,
    public accountService:AccountService,
    public announceService:AnnounceService) {

    if (this.route.snapshot.data.creation) {
      this.announceService.beginCreation(loginService.pub)
    }
  }

  ngOnInit() {
    this.keypairService.key = {
    }
    this.route.params.subscribe(params => {
      if (params['uuid']) {
        return this.announceService.getAnnounce(params['uuid'])
      }
    });
  }
}
