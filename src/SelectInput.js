export default function Selectoption({ country, handleChange, index, label }) {
  function setCountry(e) {
    const countries = [...country];
    countries[index] = e.target.value;
    handleChange((value) => countries);
  }
  return (
    <div style={{ display: "flex", gap: "0.5rem", position: "relative" }}>
      <div
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          position: "absolute",
          transform: "translateY(-26px)",
        }}
      >
        {label}
      </div>
      <select
        className="form-select"
        value={country[index]}
        onChange={(e) => setCountry(e)}
      >
        <option value={"AFN"}>Afghanistan</option>
        <option value={"ALL"}>Albania</option>
        <option value={"DZD"}>Algeria</option>
        <option value={"AOA"}>Angola</option>
        <option value={"ARS"}>Argentina</option>
        <option value={"AMD"}>Armenia</option>
        <option value={"AWG"}>Aruba</option>
        <option value={"AUD"}>Australia</option>
        <option value={"AZN"}>Azerbaijan</option>
        <option value={"BSD"}>Bahamas</option>
        <option value={"BHD"}>Bahrain</option>
        <option value={"BDT"}>Bangladesh</option>
        <option value={"BBD"}>Barbados</option>
        <option value={"BYN"}>Belarus</option>
        <option value={"BZD"}>Belize</option>
        <option value={"BMD"}>Bermuda</option>
        <option value={"BTN"}>Bhutan</option>
        <option value={"BOB"}>Bolivia</option>
        <option value={"BAM"}>Bosnia and Herzegovina</option>
        <option value={"BWP"}>Botswana</option>
        <option value={"BRL"}>Brazil</option>
        <option value={"BND"}>Brunei</option>
        <option value={"BGN"}>Bulgaria</option>
        <option value={"BIF"}>Burundi</option>
        <option value={"KHR"}>Cambodia</option>
        <option value={"CAD"}>Canada</option>
        <option value={"CVE"}>Cape Verde</option>
        <option value={"KYD"}>Cayman Islands</option>
        <option value={"XAF"}>CEMAC</option>
        <option value={"XOF"}>CFA</option>
        <option value={"CLP"}>Chile</option>
        <option value={"CNY"}>China</option>
        <option value={"XPF"}>Collectivités d'Outre-Mer</option>
        <option value={"COP"}>Colombia</option>
        <option value={"KMF"}>Comoros</option>
        <option value={"CRC"}>Costa Rica</option>
        <option value={"HRK"}>Croatia</option>
        <option value={"CUP"}>Cuba</option>
        <option value={"CZK"}>Czech Republic</option>
        <option value={"CDF"}>Democratic Republic of the Congo</option>
        <option value={"DKK"}>Denmark</option>
        <option value={"DJF"}>Djibouti</option>
        <option value={"DOP"}>Dominican Republic</option>
        <option value={"EGP"}>Egypt</option>
        <option value={"ERN"}>Eritrea</option>
        <option value={"SZL"}>Eswatini</option>
        <option value={"ETB"}>Ethiopia</option>
        <option value={"EUR"}>European Union</option>
        <option value={"FKP"}>Falkland Islands</option>
        <option value={"FOK"}>Faroe Islands</option>
        <option value={"FJD"}>Fiji</option>
        <option value={"GMD"}>Gambia</option>
        <option value={"GEL"}>Georgia</option>
        <option value={"GHS"}>Ghana</option>
        <option value={"GIP"}>Gibraltar</option>
        <option value={"GTQ"}>Guatemala</option>
        <option value={"GGP"}>Guernsey</option>
        <option value={"GNF"}>Guinea</option>
        <option value={"GYD"}>Guyana</option>
        <option value={"HTG"}>Haiti</option>
        <option value={"HNL"}>Honduras</option>
        <option value={"HKD"}>Hong Kong</option>
        <option value={"HUF"}>Hungary</option>
        <option value={"ISK"}>Iceland</option>
        <option value={"INR"}>India</option>
        <option value={"IDR"}>Indonesia</option>
        <option value={"XDR"}>International Monetary Fund</option>
        <option value={"IRR"}>Iran</option>
        <option value={"IQD"}>Iraq</option>
        <option value={"IMP"}>Isle of Man</option>
        <option value={"ILS"}>Israel</option>
        <option value={"JMD"}>Jamaica</option>
        <option value={"JPY"}>Japan</option>
        <option value={"JEP"}>Jersey</option>
        <option value={"JOD"}>Jordan</option>
        <option value={"KZT"}>Kazakhstan</option>
        <option value={"KES"}>Kenya</option>
        <option value={"KID"}>Kiribati</option>
        <option value={"KWD"}>Kuwait</option>
        <option value={"KGS"}>Kyrgyzstan</option>
        <option value={"LAK"}>Laos</option>
        <option value={"LBP"}>Lebanon</option>
        <option value={"LSL"}>Lesotho</option>
        <option value={"LRD"}>Liberia</option>
        <option value={"LYD"}>Libya</option>
        <option value={"MOP"}>Macau</option>
        <option value={"MGA"}>Madagascar</option>
        <option value={"MWK"}>Malawi</option>
        <option value={"MYR"}>Malaysia</option>
        <option value={"MVR"}>Maldives</option>
        <option value={"MRU"}>Mauritania</option>
        <option value={"MUR"}>Mauritius</option>
        <option value={"MXN"}>Mexico</option>
        <option value={"MDL"}>Moldova</option>
        <option value={"MNT"}>Mongolia</option>
        <option value={"MAD"}>Morocco</option>
        <option value={"MZN"}>Mozambique</option>
        <option value={"MMK"}>Myanmar</option>
        <option value={"NAD"}>Namibia</option>
        <option value={"NPR"}>Nepal</option>
        <option value={"ANG"}>Netherlands Antilles</option>
        <option value={"NZD"}>New Zealand</option>
        <option value={"NIO"}>Nicaragua</option>
        <option value={"NGN"}>Nigeria</option>
        <option value={"MKD"}>North Macedonia</option>
        <option value={"NOK"}>Norway</option>
        <option value={"OMR"}>Oman</option>
        <option value={"XCD"}>Organisation of Eastern Caribbean States</option>
        <option value={"PKR"}>Pakistan</option>
        <option value={"PAB"}>Panama</option>
        <option value={"PGK"}>Papua New Guinea</option>
        <option value={"PYG"}>Paraguay</option>
        <option value={"PEN"}>Peru</option>
        <option value={"PHP"}>Philippines</option>
        <option value={"PLN"}>Poland</option>
        <option value={"QAR"}>Qatar</option>
        <option value={"RON"}>Romania</option>
        <option value={"RUB"}>Russia</option>
        <option value={"RWF"}>Rwanda</option>
        <option value={"SHP"}>Saint Helena</option>
        <option value={"WST"}>Samoa</option>
        <option value={"STN"}>São Tomé and Príncipe</option>
        <option value={"SAR"}>Saudi Arabia</option>
        <option value={"RSD"}>Serbia</option>
        <option value={"SCR"}>Seychelles</option>
        <option value={"SLE"}>Sierra Leone</option>
        <option value={"SGD"}>Singapore</option>
        <option value={"SBD"}>Solomon Islands</option>
        <option value={"SOS"}>Somalia</option>
        <option value={"ZAR"}>South Africa</option>
        <option value={"KRW"}>South Korea</option>
        <option value={"SSP"}>South Sudan</option>
        <option value={"LKR"}>Sri Lanka</option>
        <option value={"SDG"}>Sudan</option>
        <option value={"SRD"}>Suriname</option>
        <option value={"SEK"}>Sweden</option>
        <option value={"CHF"}>Switzerland</option>
        <option value={"SYP"}>Syria</option>
        <option value={"TWD"}>Taiwan</option>
        <option value={"TJS"}>Tajikistan</option>
        <option value={"TZS"}>Tanzania</option>
        <option value={"THB"}>Thailand</option>
        <option value={"TOP"}>Tonga</option>
        <option value={"TTD"}>Trinidad and Tobago</option>
        <option value={"TND"}>Tunisia</option>
        <option value={"TRY"}>Turkey</option>
        <option value={"TMT"}>Turkmenistan</option>
        <option value={"TVD"}>Tuvalu</option>
        <option value={"UGX"}>Uganda</option>
        <option value={"UAH"}>Ukraine</option>
        <option value={"AED"}>United Arab Emirates</option>
        <option value={"GBP"}>United Kingdom</option>
        <option value={"USD"}>United States</option>
        <option value={"UYU"}>Uruguay</option>
        <option value={"UZS"}>Uzbekistan</option>
        <option value={"VUV"}>Vanuatu</option>
        <option value={"VES"}>Venezuela</option>
        <option value={"VND"}>Vietnam</option>
        <option value={"YER"}>Yemen</option>
        <option value={"ZMW"}>Zambia</option>
        <option value={"ZWL"}>Zimbabwe</option>
      </select>
    </div>
  );
}