import {observable, action, computed} from 'mobx';

export default class UserStore {
  @observable firstName = 'First Name';
  @observable lastName = 'Last Name';
  @observable email = 'Your email';
  @observable phone = 'Your phone';

  @action data(data) {
    console.log(data);
    if (data.firstName) {
      this.firstName = data.firstName;
    }
    if (data.lastName) {
      console.log(data.lastName);
      this.lastName = data.lastName;
    }
    if (data.email) {
      this.email = data.email;
    }
    if (data.phone) {
      this.phone = data.phone;
    }
  }

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
