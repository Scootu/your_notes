import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: "true",
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: {
        translation: {
          Signup: "Signup",
          CompleteSignup: "Complete Signup",
          btnSignup: "Complete signup",
          Login: "Login",
          Back: "Back",

          "Email must not be empty": "Email must not be empty",
          "Password must not be empty": "Password must not be empty",
          "Passwords do not match": "Passwords do not match",
          "username needs to be not empty": "username needs to be not empty",
          "userPhone needs to be not empty": "userPhone needs to be not empty",
          "birthday year need to be a number":
            "birthday year need to be a number",
          "Already have an account!": "Already have an account!",
          "Don't have an account!": "Don't have an account!",
        },
        validation: {
          email: "Email",
          password: "Password",
          confirmPassword: "Confirm password",
          Username: "Username",
          Phone: "Phone",
          BirthdayYear: "Birthday Year",
        },
      },
      ar: {
        translation: {
          Signup: "إنشاء حساب",
          btnSignup: "إكمال إنشاء حساب",
          CompleteSignup: "إكمال إنشاء حساب",
          Login: "تسجيل الدخول",
          Back: "للخلف",
          "Email must not be empty": "البريد الإلكتروني يجب ألا يكون فارغا",
          "Password must not be empty": "الرقم السري يجب ألا يكون فارغا",
          "Passwords do not match": "الرقم السري غير متطابق",
          "username needs to be not empty": "إسم الحساب يجب ألا يكون فارغا",
          "birthday year need to be a number": "سنة الميلاد يجب ألا تكون فارغة",
          "userPhone needs to be not empty": "رقم الهاتف يجب ألا يكون فارغا",
          "Already have an account!": "!تمتلك حساب بالفعل",
          "Don't have an account!": "!تمتلك حساب بالفعل",
        },
        validation: {
          email: "الحساب",
          password: "الرقم السري",
          confirmPassword: "تأكيد الرقم السري",
          Username: "إسم المستخدم",
          Phone: "رقم الهاتف",
          BirthdayYear: "سنة الميلاد",
        },
      },
    },
  });
