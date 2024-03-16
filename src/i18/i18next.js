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
          modify: "Modify User Information",
          save: "Save",
          statusS: "User information saved",
          statusF: "Information save process failed",
          "Email must not be empty": "Email must not be empty",
          "Password must not be empty": "Password must not be empty",
          "Passwords do not match": "Passwords do not match",
          "username needs to be not empty": "username needs to be not empty",
          "userPhone needs to be not empty": "userPhone needs to be not empty",
          "birthday year need to be a number":
            "birthday year need to be a number",
          "Already have an account!": "Already have an account!",
          "Don't have an account!": "Don't have an account!",
          "Password must be at least 8 characters long and include uppercase and lowercase letters, numbers, and special characters":
            "Password must be at least 8 characters long and include uppercase and lowercase letters, numbers, and special characters",
        },
        validation: {
          email: "Email",
          password: "Password",
          confirmPassword: "Confirm password",
          Username: "Username",
          Phone: "Phone",
          BirthdayYear: "Birthday Year",
        },
        home: {
          YourNotes: "Your notes",
        },
      },
      ar: {
        translation: {
          Signup: "إنشاء حساب",
          btnSignup: "إكمال إنشاء حساب",
          CompleteSignup: "إكمال إنشاء حساب",
          Login: "تسجيل الدخول",
          Back: "للخلف",
          modify: "تعديل بيانات الحساب",
          save: "حفظ التعديلات",
          statusS: "تمت العملية بنجاح",
          statusF: "عملية الحفظ فشلت",
          "Email must not be empty": "البريد الإلكتروني يجب ألا يكون فارغا",
          "Password must not be empty": "الرقم السري يجب ألا يكون فارغا",
          "Passwords do not match": "الرقم السري غير متطابق",
          "username needs to be not empty": "إسم الحساب يجب ألا يكون فارغا",
          "birthday year need to be a number": "سنة الميلاد يجب ألا تكون فارغة",
          "userPhone needs to be not empty": "رقم الهاتف يجب ألا يكون فارغا",
          "Already have an account!": "!تمتلك حساب بالفعل",
          "Don't have an account!": "!تمتلك حساب بالفعل",
          "Password must be at least 8 characters long and include uppercase and lowercase letters, numbers, and special characters":
            "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتتضمن أحرفًا كبيرة وصغيرة وأرقامًا وأحرفًا خاصة",
        },
        validation: {
          email: "الحساب",
          password: "الرقم السري",
          confirmPassword: "تأكيد الرقم السري",
          Username: "إسم المستخدم",
          Phone: "رقم الهاتف",
          BirthdayYear: "سنة الميلاد",
        },
        home: {
          YourNotes: "ملاحظاتك",
        },
      },
    },
  });
