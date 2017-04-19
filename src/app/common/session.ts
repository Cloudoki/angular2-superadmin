// TODO: add /import User model
import { User } from '../models/user';

export class Session {
	public version:number = 1;
	public authenticationtoken:string = null;

  user: Object = {};

	constructor(private authService:any) {}

	loadEssentialData(callback:Function)
	{

    this.user = {
      "id":1,
      "fullname":"Koen Betsens",
      "firstname":"Koen",
      "lastname":"Betsens",
      "email":"koen@betsens.be",
      "avatar":"https:\/\/pbs.twimg.com\/profile_images\/460710408500695041\/eZGWaSPZ.png",
      "accounts":[
        {"id":1,
        "name":"Cloudoki"
        }
      ]
    };

		/*this.User = new User();

		this.User.once("activated", function () {
			callback();
		}.bind(this));

		this.User.fetch({error: this.authError.bind(this)});*/
	}

	// Error on API, for example
	authError() {
		this.logout();
	}

	logout() {

		this.authService.logout();

		this.authenticationtoken = null;
		localStorage.removeItem('token');
	}
}
