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
          Logout: "Logout",
          Back: "Back",
          modify: "Modify User Information",
          save: "Save",
          statusS: "User information saved",
          statusF: "Information save process failed",
          homePage: "Back to home page",
          createTodo: "Create a new todo...",
          All: "All",
          Active: "Active",
          Completed: "Completed",
          ClearCompleted: "Clear Completed",
          itemsleft: "items left",
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
          "Complete online javascirt course":
            "Complete online javascirt course",
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
          Logout: "تسجيل الخروج",
          Back: "للخلف",
          modify: "تعديل بيانات الحساب",
          save: "حفظ التعديلات",
          statusS: "تمت العملية بنجاح",
          statusF: "عملية الحفظ فشلت",
          hi: "مرحبا",
          homePage: "العودة للصفحة الرئيسية",
          createTodo: "إنشاء ملاحظة جديدة...",
          All: "الكل",
          Active: "متبقي",
          Completed: "منتهي",
          ClearCompleted: "مسح ماتم إنهائه",
          itemsleft: "عناصر متبقية",
          "Email must not be empty": "البريد الإلكتروني يجب ألا يكون فارغا",
          "Password must not be empty": "الرقم السري يجب ألا يكون فارغا",
          "Passwords do not match": "الرقم السري غير متطابق",
          "username needs to be not empty": "إسم الحساب يجب ألا يكون فارغا",
          "birthday year need to be a number": "سنة الميلاد يجب ألا تكون فارغة",
          "userPhone needs to be not empty": "رقم الهاتف يجب ألا يكون فارغا",
          "Already have an account!": "!تمتلك حساب بالفعل",
          "Don't have an account!": "!ليس لديك حساب",
          "Password must be at least 8 characters long and include uppercase and lowercase letters, numbers, and special characters":
            "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتتضمن أحرفًا كبيرة وصغيرة وأرقامًا وأحرفًا خاصة",
          "Complete online javascirt course": "إنهاء كورس جافا سكريبت",
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
