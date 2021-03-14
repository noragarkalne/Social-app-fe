import {observable, action} from 'mobx';

interface User  {
 name : string,
 surname: string,
 age: string,
 birthday: string
}

// export class UserStore {
//  @observable user : User

//  public set user(value: User){
//   this.user = value
// }
// }