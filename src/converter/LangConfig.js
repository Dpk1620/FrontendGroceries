import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
    lng: "en",
    resources: {
        hi: {
            translation: {
                Home: "होम",
                Menu: "मेन्यू",
                Contact: "कॉन्टैक",
                About: "About",
                Groceries:"ग्रोसेरी",
                HomeTitle1:"अपना आज बनाएं,करें",
                HomeTitle2: "आपकी ज़रूरतें सिर्फ एक ही स्थान पर ।",
                HomeSubtitle: "अब आपको बारिश के बारे में चिंता करने की ज़रूरत नहीं होगी ग्रोसेरीमऑइन पर ऑनलाइन किराने की खरीदारी आसान हो गई है, सर्वोत्तम कीमतों पर उत्पादों की विस्तृत श्रृंखला। कतार छोड़ें और ग्रोसेरीमऑइन.com पर उपलब्ध उत्पादों की विस्तृत श्रृंखला से ऑर्डर करें। मोबाइल ऐप डाउनलोड करें. एकाधिक भुगतान विकल्प. ऑनलाइन साइन अप करें."      }
        },
        en: {
            translation: {
                Home: "Home",
                Menu: "Menu",
                Contact: "Contact",
                About: "About",
                Groceries:"Groceries",
                HomeTitle1:"Make your Today, Use your",
                HomeTitle2: "Your needs in just one place.",
                HomeSubtitle: "“You won't need to worry about the rain anymore” Online grocery shopping made easy at groceriesmine, wide range of products at best prices. Skip the queue and order from the wide range of products available at groceriesmine.com. Download Mobile App. Multiple Payment Options. Sign Up Online."
            }
        },
        tm: {
            translation: {
                Home: "வீடு",
                Menu: "பட்டியல்",
                Contact: "Contact",
                About: "About",
                Groceries:"Groceries",
                HomeTitle1:"Make your Today, Use your",

                HomeTitle2: "Your needs in just one place .",
                HomeSubtitle: ".“You won't need to worry about the rain anymore” Online grocery shopping made easy at groceriesmine, wide range of products at best prices. Skip the queue and order from the wide range of products available at groceriesmine.com. Download Mobile App. Multiple Payment Options. Sign Up Online."
            }
        },
        sp: {
            translation: {
                Home: "hogar",
                Menu: "Menú",
                Contact: "Contacto",
                About: "Acerca de",
                Groceries:"Groceries",
                HomeTitle1:"Make your Today, Use your",

                HomeTitle: "",
                HomeSubtitle: "Your needs in just one place.“You won't need to worry about the rain anymore” Online grocery shopping made easy at groceriesmine, wide range of products at best prices. Skip the queue and order from the wide range of products available at groceriesmine.com. Download Mobile App. Multiple Payment Options. Sign Up Online."
            }
        },
        tl: {
            translation: {
                Home: "ఇల్లు",
                Menu: "మెను",
                Contact: "Contact",
                About: "About",
                Groceries:"Groceries",
                HomeTitle: "",
                HomeTitle1:"Make your Today, Use your",
                HomeSubtitle: "Your needs in just one place.“You won't need to worry about the rain anymore” Online grocery shopping made easy at groceriesmine, wide range of products at best prices. Skip the queue and order from the wide range of products available at groceriesmine.com. Download Mobile App. Multiple Payment Options. Sign Up Online."
            }
        }
    },
    keySeparator: false,
    interpolation: { escapeValue: false }
});

export default i18n;
