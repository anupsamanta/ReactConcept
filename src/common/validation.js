export default class Helper {
    static isEmailValid(email) {
       let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       return reg.test(email) == 0;
  }
  static isMobileValid(mobNo) {
   if((mobNo.length == 10) && /^\d+$/.test(mobNo))
   return true;
   else false;
}
}