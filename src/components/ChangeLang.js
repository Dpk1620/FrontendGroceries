import {useState} from "react";
import i18n from "i18next";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/languageSlice";
const ChangeLang = () => {
    const dispatch = useDispatch()
    const [selectlanguage, setLanguageData] = useState("")
    const langChange = (e) => {
      console.log("language select",e.target.value,selectlanguage)
        setLanguageData(e.target.value)
        dispatch(setLanguage(selectlanguage))
        i18n.changeLanguage(selectlanguage)
      };
return (
    <div>
      <select
        onChange={langChange}
        name="lang"
        value={selectlanguage}
      >
        <option value="select">
          select language
        </option>
        <option value="en">
          English
        </option>
        <option value="hi">
          Hindi
        </option>
        <option value="tm">
          Tamil(தமிழ்)
        </option>
        <option value="tl">
          Telugu(తెలుగు)
        </option>
        <option value="sp">
          Spanish(española)
        </option>
      </select>
      {/* <p className="textToChange">{t("Hi")}</p>
      <p className="textToChange">{t("Actions")}</p> */}
    </div>
  );
}

export default ChangeLang;

