import React, {useEffect} from 'react';
import {
  Box,
  generateUtilityClasses, Theme, Typography,
} from '@mui/material';
import DateInputField from "../../components/DateInputField";
import InputField from "../../components/InputField";
import FileUploader, { FileUploadProps } from "../../components/FileUploader";
import {useFormContext} from "react-hook-form";
import {PersonIdResponse} from "../../api/interfaces/userInterfaces";
import Alert from "../../components/Alert";
import SelectField from '../../components/SelectField';

const classes = generateUtilityClasses('PersonalInfo', [
  'root',
  'input',
  'spinner',
  'formControl',
  "mainHeader",
  "subHeader",
  "wrap",
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    [`& .MuiFormHelperText-root`]: {
      margin: '3px 0 0 0',
      color: 'rgb(174, 46, 46)',
      width: '100%',
      textAlign: 'start',
    },
    [`& .MuiFormLabel-root`]: {
      color: '#3E3E3E',
    },
  },
  [`& .${classes.subHeader}`]: {
    fontSize: "16px",
    textAlign: "start",
    marginBottom: "10px",
    li: {
      marginBottom: "8px",
    }
  },
  [`& .${classes.formControl}`]: {
    marginBottom: '16px',
  },
  [`& .${classes.wrap}`]: {
    padding: '20px',
  },
  [`& .${classes.input}`]: {
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    letterSpacing: '0.00938em',
    color: 'rgb(50, 50, 50)',
    boxSizing: 'border-box',
    display: 'inline-flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    borderRadius: '2px',
    paddingRight: 0,
    height: 'auto',
    maxHeight: '48px',
    lineHeight: '1.4375em',
    padding: '12.5px 0 12.5px 8px',
  },
  [`&.${classes.spinner}`]: {
    margin: "0 auto",
    maxWidth: "600px",
    padding: "60px 20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  [`& .${classes.mainHeader}`]: {
    fontSize: "24px",
    fontWeight: 700,
    textAlign: "start",
    marginBottom: "20px",
    color: theme.palette.primary.main,
  },
});

const countries = [
  {label:"Deutschland",value:"DE",mostSelected:!0},
  {label:"Polen",value:"PL",mostSelected:!0},
  {label:"Rum\xe4nien",value:"RO",mostSelected:!0},
  {label:"T\xfcrkei",value:"TR",mostSelected:!0},
  {label:"------",value:"",disabled:true},
  {label:"Afghanistan",value:"AF"},{label:"\xc4gypten",value:"EG"},{label:"Albanien",value:"AL"},{label:"Algerien",value:"DZ"},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Antigua und Barbuda",value:"AG"},{label:"\xc4quatorialguinea",value:"GQ"},{label:"Argentinien",value:"AR"},{label:"Armenien",value:"AM"},{label:"Aserbaidschan",value:"AZ"},{label:"\xc4thiopien",value:"ET"},{label:"Australien",value:"AU"},{label:"Bahamas",value:"BS"},{label:"Bahrain",value:"BH"},{label:"Bangladesch",value:"BD"},{label:"Barbados",value:"BB"},{label:"Belarus (vormals Wei\xdfrussland)",value:"BY"},{label:"Belgien",value:"BE"},{label:"Belize",value:"BZ"},{label:"Benin",value:"BJ"},{label:"Bhutan",value:"BT"},{label:"Bolivien",value:"BO"},{label:"Bosnien und Herzegowina",value:"BA"},{label:"Botsuana",value:"BW"},{label:"Brasilien",value:"BR"},{label:"Brunei Darussalam",value:"BN"},{label:"Bulgarien",value:"BG"},{label:"Burkina Faso",value:"BF"},{label:"Burundi",value:"BI"},{label:"Chile",value:"CL"},{label:"China",value:"CN"},{label:"Costa Rica",value:"CR"},{label:"C\xf4te d'Ivoire (vormals Elfenbeink\xfcste)",value:"CI"},{label:"D\xe4nemark",value:"DK"},
  {label:"Dominica",value:"DM"},{label:"Dominikanische Republik",value:"DO"},{label:"Dschibuti",value:"DJ"},{label:"Ecuador",value:"EC"},{label:"El Salvador",value:"SV"},{label:"Eritrea",value:"ER"},{label:"Estland",value:"EE"},{label:"Fidschi",value:"FJ"},{label:"Finnland",value:"FI"},{label:"Frankreich",value:"FR"},{label:"Gabun",value:"GA"},{label:"Gambia",value:"GM"},{label:"Georgien",value:"GE"},{label:"Ghana",value:"GH"},{label:"Grenada",value:"GD"},{label:"Griechenland",value:"GR"},{label:"Gro\xdfbritannien und Nordirland",value:"GB"},{label:"Guatemala",value:"GT"},{label:"Guinea",value:"GN"},{label:"Guinea-Bissau",value:"GW"},{label:"Guyana",value:"GY"},{label:"Haiti",value:"HT"},{label:"Honduras",value:"HN"},{label:"Indien",value:"IN"},{label:"Indonesien",value:"ID"},{label:"Irak",value:"IQ"},{label:"Iran",value:"IR"},{label:"Irland",value:"IE"},{label:"Island",value:"IS"},{label:"Israel",value:"IL"},{label:"Italien",value:"IT"},{label:"Jamaika",value:"JM"},{label:"Japan",value:"JP"},{label:"Jemen",value:"YE"},{label:"Jordanien",value:"JO"},{label:"Kambodscha",value:"KH"},{label:"Kamerun",value:"CM"},{label:"Kanada",value:"CA"},{label:"Kap Verde",value:"CV"},{label:"Kasachstan",value:"KZ"},{label:"Katar",value:"QA"},{label:"Kenia",value:"KE"},{label:"Kirgisistan",value:"KG"},{label:"Kiribati",value:"KI"},{label:"Kolumbien",value:"CO"},{label:"Komoren",value:"KM"},{label:"Kongo (Demokratische Republik)",value:"CD"},{label:"Kongo (Republik)",value:"CG"},{label:"Korea (Nord, Dem. Volksrepublik)",value:"KP"},{label:"Korea (S\xfcd, Republik)",value:"KR"},{label:"Kosovo",value:"XK"},{label:"Kroatien",value:"HR"},{label:"Kuba",value:"CU"},{label:"Kuwait",value:"KW"},{label:"Laos",value:"LA"},{label:"Lesotho",value:"LS"},{label:"Lettland",value:"LV"},{label:"Libanon",value:"LB"},{label:"Liberia",value:"LR"},{label:"Libyen",value:"LY"},{label:"Liechtenstein",value:"LI"},{label:"Litauen",value:"LT"},{label:"Luxemburg",value:"LU"},{label:"Madagaskar",value:"MG"},{label:"Malawi",value:"MW"},{label:"Malaysia",value:"MY"},{label:"Malediven",value:"MV"},{label:"Mali",value:"ML"},{label:"Malta",value:"MT"},{label:"Marokko",value:"MA"},{label:"Marshallinseln",value:"MH"},{label:"Mauretanien",value:"MR"},{label:"Mauritius",value:"MU"},{label:"Mazedonien",value:"MK"},{label:"Mexiko",value:"MX"},{label:"Mikronesien",value:"FM"},{label:"Moldau, Republik",value:"MD"},{label:"Monaco",value:"MC"},{label:"Mongolei",value:"MN"},{label:"Montenegro",value:"ME"},{label:"Mosambik",value:"MZ"},{label:"Myanmar (vormals Birma)",value:"MM"},{label:"Namibia",value:"NA"},{label:"Nauru",value:"NR"},{label:"Nepal",value:"NP"},{label:"Neuseeland",value:"NZ"},{label:"Nicaragua",value:"NI"},{label:"Niederlande",value:"NL"},{label:"Niger",value:"NE"},{label:"Nigeria",value:"NG"},{label:"Norwegen",value:"NO"},{label:"Oman",value:"OM"},{label:"\xd6sterreich",value:"AT"},{label:"Osttimor",value:"TL"},{label:"Pakistan",value:"PK"},{label:"Palau (vormals Belau)",value:"PW"},{label:"Panama",value:"PA"},{label:"Papua-Neuguinea",value:"PG"},{label:"Paraguay",value:"PY"},{label:"Peru",value:"PE"},{label:"Philippinen",value:"PH"},
  {label:"Portugal",value:"PT"},{label:"Ruanda",value:"RW"},
  {label:"Russische F\xf6deration",value:"RU"},{label:"Sahara, Demokratische Arabische Republik",value:"EH"},{label:"Salomonen",value:"SB"},{label:"Sambia",value:"ZM"},{label:"Samoa",value:"WS"},{label:"San Marino",value:"SM"},{label:"S\xe3o Tom\xe9 und Pr\xedncipe",value:"ST"},{label:"Saudi-Arabien",value:"SA"},{label:"Schweden",value:"SE"},{label:"Schweiz",value:"CH"},{label:"Senegal",value:"SN"},{label:"Serbien",value:"RS"},{label:"Seychellen",value:"SC"},{label:"Sierra Leone",value:"SL"},{label:"Simbabwe",value:"ZW"},{label:"Singapur",value:"SG"},{label:"Slowakei",value:"SK"},{label:"Slowenien",value:"SI"},{label:"Somalia",value:"SO"},{label:"Spanien",value:"ES"},{label:"Sri Lanka",value:"LK"},{label:"St. Kitts und Nevis",value:"KN"},{label:"St. Lucia",value:"LC"},{label:"St. Vincent und die Grenadinen",value:"VC"},{label:"S\xfcdafrika",value:"ZA"},{label:"Sudan",value:"SD"},{label:"Suriname",value:"SR"},{label:"Swasiland",value:"SZ"},{label:"Syrien",value:"SY"},{label:"Tadschikistan",value:"TJ"},{label:"Taiwan",value:"TW"},{label:"Tansania",value:"TZ"},{label:"Thailand",value:"TH"},{label:"Togo",value:"TG"},{label:"Tonga",value:"TO"},{label:"Trinidad und Tobago",value:"TT"},{label:"Tschad",value:"TD"},{label:"Tschechische Republik",value:"CZ"},{label:"Tunesien",value:"TN"},
  {label:"Turkmenistan",value:"TM"},{label:"Tuvalu",value:"TV"},{label:"Uganda",value:"UG"},{label:"Ukraine",value:"UA"},{label:"Ungarn",value:"HU"},{label:"Uruguay",value:"UY"},{label:"USA",value:"US"},{label:"Usbekistan",value:"UZ"},{label:"Vanuatu",value:"VU"},{label:"Vatikanstadt",value:"VA"},{label:"Venezuela",value:"VE"},{label:"Vereinigte Arabische Emirate",value:"AE"},{label:"Vietnam",value:"VN"},{label:"Zentralafrikanische Republik",value:"CF"},{label:"Zypern",value:"CY"}
];

const PersonalInfo = ({ data: person }: { data?: PersonIdResponse }) => {
  const { setValue, watch, reset } = useFormContext();

  const fileUploadProp: FileUploadProps = {
    accept: 'image/*, .pdf, .doc, .docx',
    maxFiles: 2,
    maxSize: 2097152, // 2 MB
    uploadedFiles: person?.files ?? [],
    onChange: (event) => {
      if (event.target.files) {
        const filesArray = Array.from(event.target.files);
        setValue('files', filesArray, { shouldValidate: true, shouldDirty: true });
      }
    },
    onDrop: (event) => {
      const filesArray = Array.from(event.dataTransfer.files);
      setValue('files', filesArray, { shouldValidate: true, shouldDirty: true });
    },
  };

  const handleChange = (name: string, value: string) => {
    setValue(name, value, { shouldValidate: true, shouldDirty: true });
  };

  useEffect(() => {
    if (person) {
      reset({
        birthplace: person.birthplace || '',
        birthday: person.birthday || '',
        nationality: person.nationality || '',
        files: person.files || [],
      });
    }
  }, [person, reset]);

  const birthplace = watch('birthplace') || '';
  const birthday = watch('birthday') || '';
  const nationality = watch('nationality') || '';

  return (
    <Box className={classes.root} sx={styles}>
      <Typography variant="h4" className={classes.mainHeader}>
        Antrag in Bearbeitung
      </Typography>
      <Typography className={classes.subHeader}>
        Sie sind nur noch wenige Schritte von Ihrem Wunschdarlehen entfernt.
      </Typography>
      <Typography className={classes.subHeader}>
        Bitte führen Sie die folgenden Schritte aus:
      </Typography>

      <Typography className={classes.subHeader}>
        1. Vervollständigen Sie Ihre persönlichen Daten:
        <ul>
          <li>
            Geburtsdatum
          </li>
          <li>
            Geburtsort
          </li>
          <li>
            Staatsangehörigkeit
          </li>
        </ul>
      </Typography>

      <DateInputField
        name="birthday"
        label="Geburtsdatum"
        requiredMessage="Geburtsdatum erforderlich"
        views={['year', 'month', 'day']}
        format="DD.MM.YYYY"
        onChange={(newValue) => handleChange('birthday', newValue)}
        value={birthday}
      />
      <InputField
        name="birthplace"
        label="Geburtsort"
        placeholder="z.B. Musterstadt"
        type="text"
        requiredMessage="Geburtsort erforderlich"
        onChange={(newValue) => handleChange('birthplace', newValue)}
        value={birthplace}
      />
      <SelectField
        name="nationality"
        label="Staatsangehörigkeit"
        options={countries}
        onChange={(newValue) => handleChange('nationality', newValue)}
        value={nationality}
      />
      <Typography className={classes.subHeader}>
        2. Laden Sie folgende Dokumente hoch:
        <ul>
          <li>
            Gehaltsnachweise der letzten drei Monate
          </li>
          <li>
            Aktuellen Kontoauszug
          </li>
        </ul>
      </Typography>
      {!person?.files?.length ? (
        <Alert
          title="Einkommensnachweise hochladen"
          description="Um die Antragsbearbeitung zu beschleunigen, laden Sie Ihre Gehaltsnachweise der letzten drei Monate sowie einen aktuellen Kontoauszug hoch. Fotografieren oder scannen Sie die Dokumente und laden Sie sie hier hoch."
        />
      ): null}
      <FileUploader {...fileUploadProp} />
    </Box>
  );
};

export default PersonalInfo;
