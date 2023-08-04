import {useState} from "react";
import i18n from "i18next";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/languageSlice";
const ChangeLang = () => {
    const dispatch = useDispatch()
    const [selectlanguage, setLanguageData] = useState("")
    const langChange = (e) => {
        setLanguageData(e.target.value)
        console.log("language select",e.target.value)
        dispatch(setLanguage(e.target.value))
        i18n.changeLanguage(e.target.value)
      };
return (
    <div>
      <select
        onChange={langChange}
        name="lang"
        value={selectlanguage.lang}
      >
        <option value="selectlanguage">
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

