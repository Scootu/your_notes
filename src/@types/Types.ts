export default interface ErrorAction {
  username?: string;
  userPhone?: string;
  birthdayYear?: string;
}
export interface ErrorValidationForm {
  userEmail?: string;
  userPassword?: string;
  username?: string;
  userPhone?: string;
  birthdayYear?: string;
  status?: "succeed" | "failed";
}
