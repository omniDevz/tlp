import { UserProps } from '../services/interface';

const storage = {
  removeValuesJTW() {
    localStorage.removeItem('@TLP:user');
    localStorage.removeItem('@TLP:token');
    localStorage.removeItem('@TLP:dateExpires');
  },
  setValuesJTW(user: UserProps) {
    localStorage.setItem('@TLP:user', JSON.stringify(user));
    localStorage.setItem('@TLP:token', user.token);
    localStorage.setItem('@TLP:dateExpires', user.dateExpires);
  },
  getUserJTW() {
    return localStorage.getItem('@TLP:user');
  },
  getTokenJTW() {
    return localStorage.getItem('@TLP:token');
  },
  getDateExpirationJTW() {
    return new Date(localStorage.getItem('@TLP:dateExpires') || '');
  },
  hasValuesJTW() {
    return storage.getUserJTW() && storage.getTokenJTW();
  },
};

export default storage;
