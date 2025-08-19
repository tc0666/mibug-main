import React, { useEffect, useState } from 'react';
import { Box, Button, Theme, Typography, Switch, Divider } from '@mui/material';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';
import clsx from 'clsx';
import logo from "../icons/logo.svg";

const COOKIE_CONSENT_KEY = 'cookieConsent';

enum CookieOption {
  Settings = 'Settings',
  Essential = 'Essential',
  Performance = 'Performance',
  Marketing = 'Marketing',
  Functionality = 'Functionality',
}

enum CookieConsentStatus {
  Accepted = 'accepted',
  OnlyEssential = 'onlyEssential',
}

interface CookieConsentProps {
  className?: string;
}

interface SwitchStates {
  [key: string]: boolean;
}

interface Content {
  title: string;
  description: string;
}

const content: Record<CookieOption, Content> = {
  [CookieOption.Settings]: {
    title: 'Einstellungen Privatsphäre',
    description: `Mit diesen Cookies ist die Website in der Lage, erweiterte Funktionalität und Personalisierung bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten verwenden. Wenn Sie diese Cookies nicht zulassen, funktionieren einige oder alle dieser Dienste möglicherweise nicht einwandfrei.`,
  },
  [CookieOption.Essential]: {
    title: 'Essentiell (damit alles funktioniert)',
    description:
      `
Diese Cookies sind für die grundlegenden Funktionen der Webseite unbedingt erforderlich und können in Ihren Systemen nicht deaktiviert werden.
<br /><br />
Wir binden die Schriftarten Google Fonts des Anbieters Google Ireland Limited, Google Building Gordon House, Barrow St 4 Dublin, Irland ("Google") ein. Google Fonts ermöglicht uns Texte und Schriftarten korrekt anzuzeigen und so die Ausgestaltung der Website nutzerfreundlicher zu machen. Dabei wird insbesondere die IP-Adresse des Nutzers an Google übermittelt. Die Verarbeitung dieser Daten durch Google kann auch außerhalb der EU, namentlich in den USA erfolgen.
`

  },
  [CookieOption.Performance]: {
    title: 'Performance (um die Webseite zu optimieren)',
    description: `Diese Cookies erheben Daten über das Nutzungsverhalten der Websitebesucher. Hiermit können wir die Performance unserer Website messen und verbessern.`,
  },
  [CookieOption.Marketing]: {
    title: 'Marketing (Werbung, die zu Ihnen passt)',
    description: `Diese Cookies werden von uns und unseren Werbepartnern verwendet, um personalisierte Werbung anzuzeigen. Wenn Sie diese Cookies nicht zulassen, werden Sie weniger gezielte Werbung erleben. Ihre Einwilligung zum Einsatz der Marketing-Cookies umfasst auch die Anzeige von personalisierten Marketinginhalten auf Plattformen Dritter, z.B. in Form der Übermittlung von verschlüsselten Vor-und Nachnamen sowie E-Mail-Adressen (unter Einsatz eines Hash-Verfahrens) im Rahmen der Facebook Custom Audiences, Facebook Advanced Matching, Google Customer Match, Google Enhanced Conversion und/oder TikTok Automatic Advanced Matching. Dies dient allein der Marketinganzeigenoptimierung. Diese umfasst ggf. auch die Datenübermittlung in Länder außerhalb der EU. Nähere Information finden Sie in unseren Datenschutzhinweisen.`,
  },
  [CookieOption.Functionality]: {
    title: 'Funktionalität',
    description: `Mit diesen Cookies ist die Website in der Lage, erweiterte Funktionalität und Personalisierung bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten verwenden. Wenn Sie diese Cookies nicht zulassen, funktionieren einige oder alle dieser Dienste möglicherweise nicht einwandfrei.`,
  },
};

const classes = {
  ...generateUtilityClasses('CookieConsent', [
    'root',
    'title',
    'titleHeader',
    'description',
    'content',
    'options',
    'option',
    'activeOption',
    'label',
    'buttons',
    'button',
    'cookieWrap',
    'header',
    'logo',
  ]),
};

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    width: 630,
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: 10,
    transform: 'translate(-50%, -50%)',
    transition: theme.transitions.create(['opacity', 'transform'], {
      duration: theme.transitions.duration.complex,
    }),
    opacity: 0,
    boxSizing: 'border-box',
    '&.visible': {
      opacity: 1,
    },
    [theme.breakpoints.down(650)]: {
      width: 'calc(100vw - 32px)',
      maxWidth: 630,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: 8,
      padding: '16px',
      height: 'auto',
      maxHeight: '90vh',
      overflowY: 'auto',
      overflowX: 'hidden',
      boxSizing: 'border-box',
    },
  },
  [`& .${classes.header}`]: {
    marginBottom: 0,
    paddingLeft: '30px',
  },
  [`& .${classes.logo}`]: {
    padding: '12px 24px',
    [theme.breakpoints.down(650)]: {
      padding: '0 16px 8px 16px',
      img: { maxWidth: '160px', height: 'auto' },
    },
  },
  [`& .${classes.cookieWrap}`]: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: '40px',
    marginBottom: '30px',
    [theme.breakpoints.down(650)]: {
      flexDirection: 'column',
      paddingRight: 0,
      padding: 0,
      margin: 0,
      gap: '12px',
    },
  },
  [`& .${classes.description}`]: {
    marginBottom: '10px',
    display: 'flex',
    flex: 1.3,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.5s ease',
    [theme.breakpoints.down(650)]: {
      flex: 'unset',
      width: '100%',
      alignItems: 'stretch',
    },
  },
  [`& .${classes.titleHeader}`]: {
    justifyContent: 'space-between',
    display: 'flex',
    width: '100%',
  },
  [`& .${classes.title}`]: {
    fontSize: '16px',
    fontWeight: 400,
    width: '90%',
    color: '#121212',
    alignItems: 'center',
    marginBottom: '16px',
    [theme.breakpoints.down(650)]: {
      width: '100%',
      fontSize: '15px',
    },
  },
  [`& .${classes.content}`]: {
    fontSize: '12px',
    color: '#121212',
    marginBottom: '20px',
    lineHeight: '20px',
    flex: 1.5,
    transition: 'all 0.3s ease',
    [theme.breakpoints.down(650)]: {
      paddingRight: 0,
    },
  },
  [`& .${classes.options}`]: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    [theme.breakpoints.down(650)]: {
      marginBottom: '4px',
    },
  },
  [`& .${classes.option}`]: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    maxHeight: '40px',
    backgroundColor: '#F0F0F0',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '223px',
    borderBottom: '1px solid #dbdbdb',
    '&:last-child': {
      borderBottom: 'none',
    },
    [`& .${classes.label}`]: {
      color: '#121212',
      textAlign: 'center',
      display: 'block',
      width: '100%',
      padding: '0 30px',
    },
    [theme.breakpoints.down(650)]: {
      maxWidth: '100%',
      maxHeight: 'unset',
      padding: '12px 8px',
      [`& .${classes.label}`]: {
        textAlign: 'left',
        padding: '0 12px',
      },
    },
  },
  [`& .${classes.activeOption}`]: {
    backgroundColor: '#08B578',
    width: '100%',
    [`& .${classes.label}`]: {
      color: '#ffffff',
      textAlign: 'center',
      display: 'block',
    },
  },
  [`& .${classes.label}`]: {
    fontSize: '12px',
  },
  [`& .${classes.buttons}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
    marginTop: '16px',
    [theme.breakpoints.down(650)]: {
      flexDirection: 'column',
      gap: '10px',
      padding: '0 0 8px 0',
      alignItems: 'stretch',
      margin: '0 16px',
    },
  },
  [`& .${classes.button}`]: {
    padding: '6px 10px',
    borderRadius: '2px',
    fontSize: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '200px',
    textTransform: 'capitalize',
    '&:nth-of-type(1)': {
      border: 'none',
      backgroundColor: '#949494',
      color: '#fff',
    },
    '&:nth-of-type(2)': {
      backgroundColor: 'transparent',
      color: '#08B578',
    },
    '&:nth-of-type(3)': {
      backgroundColor: '#08B578',
      color: '#ffffff',
      border: 'none',
      '&:hover': {
        backgroundColor: '#1aa34a',
      },
    },
    [theme.breakpoints.down(650)]: {
      width: '100%',
    },
  },
});

const CookieConsent = ({ className }: CookieConsentProps) => {
  const [activeOption, setActiveOption] = useState<CookieOption>(CookieOption.Essential);
  const [switchStates, setSwitchStates] = useState<SwitchStates>({
    [CookieOption.Settings]: false,
    [CookieOption.Essential]: true,
    [CookieOption.Performance]: false,
    [CookieOption.Marketing]: false,
    [CookieOption.Functionality]: false,
  });
  const [isConsentGiven, setIsConsentGiven] = useState<boolean>(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent') as CookieConsentStatus ?? null;
    if (!consent) {
      setIsConsentGiven(false);
    }
  }, []);

  const handleConfirmSelection = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, CookieConsentStatus.Accepted);
    setIsConsentGiven(true);
  };

  const handleOnlyEssentials = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, CookieConsentStatus.OnlyEssential);
    setIsConsentGiven(true);
  };

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, CookieConsentStatus.Accepted);
    setIsConsentGiven(true);
  };

  const handleSwitchChange = (option: CookieOption) => {
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [option]: !prevStates[option],
    }));
  };

  return !isConsentGiven ? (
    <Box className={clsx(classes.root, !isConsentGiven && 'visible', className)} sx={styles}>
      <Box className={classes.logo}>
        <img src={logo} alt="logo"/>
      </Box>
      <Box className={classes.cookieWrap}>
        <Box className={classes.options}>
          {Object.keys(content).map((key) => {
            const option = key as CookieOption;
            return (
              <Box
                key={option}
                className={clsx(classes.option, { [classes.activeOption]: activeOption === option })}
                onClick={() => setActiveOption(option)}
              >
                <Typography className={classes.label}>{content[option].title}</Typography>
              </Box>
            );
          })}
        </Box>
        <Box className={classes.description}>
          <Box className={classes.titleHeader}>
            <Typography className={classes.title}>
              {content[activeOption].title}
            </Typography>
            <Switch
              size="small"
              checked={switchStates[activeOption]}
              onChange={() => handleSwitchChange(activeOption)}
            />
          </Box>
          <Typography className={classes.content} dangerouslySetInnerHTML={{ __html: content[activeOption].description }} />
        </Box>
      </Box>
      <Box>
        <Divider />
        <Box className={classes.buttons}>
          <Button onClick={handleOnlyEssentials} className={classes.button}>Meine Auswahl bestätigen</Button>
          <Button onClick={handleConfirmSelection} className={classes.button}>Nur essentielle Cookies</Button>
          <Button onClick={handleAcceptAll} className={classes.button}>Akzeptieren und fortfahren</Button>
        </Box>
      </Box>
    </Box>
  ) : null;
};

export default CookieConsent;
