import { Dialog, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, FluentProvider, Textarea, makeStyles, Text, tokens, Switch, BrandVariants, createLightTheme, shorthands, Divider, Radio, RadioGroup, createDarkTheme, Theme } from '@fluentui/react-components';
import {
    SearchRegular,
    AddRegular,
    SettingsRegular,
    TextFontSizeRegular,
    DarkThemeRegular,
    DismissFilled,
    ArrowUploadFilled,
    LocalLanguageRegular
} from '@fluentui/react-icons';
import axios from 'axios';
import React from 'react';
import { useTranslation } from 'react-i18next';

// type DrawerType = Required<DrawerProps>['type'];

const brandRamp: BrandVariants = {
    10: '#020206',
    20: '#141526',
    30: '#1D2245',
    40: '#242C5F',
    50: '#2A377A',
    60: '#37448B',
    70: '#485194',
    80: '#595E9D',
    90: '#686CA6',
    100: '#787AAF',
    110: '#8788B8',
    120: '#9797C1',
    130: '#A6A6CB',
    140: '#B5B5D4',
    150: '#C5C5DD',
    160: '#D5D4E6'
};

const lightTheme = createLightTheme(brandRamp);
const darkTheme = createDarkTheme(brandRamp);
const useStyles = makeStyles({
    drawer: {
        transitionDuration: '0ms'
    },


    root: {
        //  display: 'flex',
        // flexDirection: 'column',
        marginTop: tokens.spacingVerticalS,
        marginBottom: tokens.spacingVerticalXL,
        marginLeft: tokens.spacingHorizontalS,
        marginRight: tokens.spacingHorizontalS,
        //  justifyContent: 'center',

    },
    root2: {
        // display: 'flex',
        //  flexDirection: 'column',
        marginTop: '4em',
        //   marginBottom: tokens.spacingVerticalXL,
        marginLeft: tokens.spacingHorizontalS,
        marginRight: tokens.spacingHorizontalS,
        paddingLeft: tokens.spacingHorizontalNone,
        paddingRight: tokens.spacingHorizontalNone,
        paddingTop: tokens.spacingHorizontalNone,
        paddingBottom: tokens.spacingHorizontalNone,
        justifyContent: 'center',

    },
    title: {
        // display: 'flex',
        //  flexDirection: 'row',
        //  flexWrap: 'nowrap',
        //  justifyContent: 'space-between',
        // width:'30%',
        // marginTop: tokens.spacingVerticalS,
        // marginBottom: tokens.spacingVerticalXL,
        // marginLeft: tokens.spacingHorizontalNone,
        // marginRight: tokens.spacingHorizontalNone,
        // paddingLeft: tokens.spacingHorizontalNone,
        // paddingRightRight: tokens.spacingHorizontalNone,
        //  justifyContent: 'center',

    },
    page: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        //  flexGrow: 1,
        // ...shorthands.overflow('hidden'),
        height: '100vh',
    },
    page2: {
        display: 'flex',
        //    flexWrap: 'wrap',
        // flexDirection: 'row',
        // justifyContent: 'stretch',
        //    flexGrow: 1,

        // ...shorthands.overflow('hidden'),
        // height: '100vh',
    },
    dialog: {
        display: 'flex',

        flexDirection: 'column',

    },
    textarea: {
        display: 'flex',
        //5rem 7rem 9rem

        // height: '7rem',
        marginLeft: tokens.spacingHorizontalXS,
        marginRight: tokens.spacingHorizontalXS,
        marginTop: tokens.spacingVerticalXS,
        marginBottom: tokens.spacingVerticalXXS,
        // margins: tokens.spacingHorizontalXXL,
        // height: '5rem',
        // marginRight: tokens.spacingHorizontalL,
        // '::after': {
        //     ...shorthands.borderBottom(tokens.strokeWidthThick, 'solid', tokens.colorNeutralBackground1),
        //     clipPath: `inset(calc(100% - ${tokens.strokeWidthThick}) 0 0 0)`
        // },
        // ':focus-within:active::after': {
        //     borderBottomColor: tokens.colorNeutralBackground1,
        // }
    },
    textareaadd: {
        display: 'flex',
        //  height: '7rem',
        marginLeft: tokens.spacingHorizontalXS,
        marginRight: tokens.spacingHorizontalXS,
        marginTop: tokens.spacingVerticalXS,
        marginBottom: tokens.spacingVerticalXXS,

    },
    textareatop: {
        // margins: tokens.spacingHorizontalXXL,
    },
    content: {
        display: 'flex',
        //  marginTop: 'auto',
        // alignSelf: 'end',
        //  flexGrow: 1,
        //   marginTop: tokens.spacingHorizontalNone,
        marginBottom: tokens.spacingVerticalNone,
        paddingLeft: tokens.spacingHorizontalXL,
        paddingRight: tokens.spacingHorizontalXL,
        // paddingTop: tokens.spacingVerticalM,
        // paddingBottom: tokens.spacingVerticalM,
        justifyContent: 'space-between',
        //   alignItems: 'flex-start',
        // columnGap: tokens.spacingHorizontalXL,
        backgroundColor: tokens.colorPaletteCornflowerForeground2,
        color: tokens.colorNeutralForegroundInverted
    },
    icon24: {
        fontSize: '18px',
        paddingLeft: tokens.spacingHorizontalM,
        paddingRight: tokens.spacingHorizontalM,
        paddingTop: tokens.spacingHorizontalMNudge,
        paddingBottom: tokens.spacingHorizontalMNudge,
    },
    icon28: {
        fontSize: '18px',
        paddingLeft: tokens.spacingHorizontalM,
        paddingTop: tokens.spacingHorizontalXS,
        paddingBottom: tokens.spacingHorizontalXS
    },
    caption: {
        marginRight: tokens.spacingHorizontalL,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    instructions: {
        marginTop: tokens.spacingVerticalS,
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.gap(tokens.spacingVerticalS),
        // justifyContent: 'flex-end'
    },
    dividertop: {
        marginTop: tokens.spacingVerticalXXL,
        marginBottom: tokens.spacingVerticalS
    },
    dividerbottom: {
        marginTop: tokens.spacingVerticalS,
        marginBottom: tokens.spacingVerticalXXL
    },
    switch: {
        marginBottom: tokens.spacingVerticalS,

    },


});



const PageSet = () => {
    const { t, i18n } = useTranslation();

    const [text200, setText200] = React.useState<300 | 100 | 200 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | undefined>(200);
    const [text300, setText300] = React.useState<300 | 100 | 200 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | undefined>(300);
    const [text500, setText500] = React.useState<300 | 100 | 200 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | undefined>(500);

    const [area, setArea] = React.useState<'medium' | 'large' | 'small' | undefined>('medium');

    const styles = useStyles();

    const [open, setOpen] = React.useState<'search' | 'add' | 'settings' | 'text' | 'theme' | 'language' | undefined>();

    const [access, setAccess] = React.useState(true);
    const onAccess = React.useCallback((ev: { currentTarget: { checked: boolean | ((prevState: boolean) => boolean); }; }) => { setAccess(ev.currentTarget.checked); }, [setAccess]
    );

    const [verbose, setVerbose] = React.useState(true);
    const onVerbose = React.useCallback((ev: { currentTarget: { checked: boolean | ((prevState: boolean) => boolean); }; }) => { setVerbose(ev.currentTarget.checked); }, [setVerbose]
    );

    const [theme, setTheme] = React.useState(true);
    const onTheme = React.useCallback((ev: { currentTarget: { checked: boolean | ((prevState: boolean) => boolean); }; }) => { setTheme(ev.currentTarget.checked); setStyle(ev.currentTarget.checked ? lightTheme : darkTheme) }, [setTheme]
    );

    const [style, setStyle] = React.useState<Theme>(lightTheme);

    const [instructions, setInstructions] = React.useState(true);
    const onInstructions = React.useCallback((ev: { currentTarget: { checked: boolean | ((prevState: boolean) => boolean); }; }) => { setInstructions(ev.currentTarget.checked); }, [setInstructions]
    );

    const [text, setText] = React.useState('medium');


    const [criteria, setCriteria] = React.useState('');
    const [tags, setTags] = React.useState('');

    const [language, setLanguage] = React.useState(true);
    const onLanguage = React.useCallback((ev: { currentTarget: { checked: boolean | ((prevState: boolean) => boolean); }; }) => { setLanguage(ev.currentTarget.checked); }, [setLanguage]
    );
    React.useEffect(() => {
        language ? i18n.changeLanguage('en') : i18n.changeLanguage('es');
    }, [language]);

    const cloudTheme = async () => {
       // const res =theme? 'light':'dark'
        await axios.post(`api/theme`, { theme: theme? 'light':'dark', oid: "12345..." });


    };

    return (
        <FluentProvider theme={style}>
            <div className={styles.page} >





                <div className={styles.content} >
                    <Dialog modalType='non-modal' open={open === 'search'} onOpenChange={(_, data) => setOpen(data.open ? 'search' : undefined)} >
                        <DialogTrigger disableButtonEnhancement >
                            <SearchRegular className={styles.icon24} />

                        </DialogTrigger>
                        <DialogSurface className={styles.root2} >
                            <DialogBody className={styles.root}>

                                <DialogTitle className={styles.title}
                                    action={
                                        <>
                                            <DialogTrigger disableButtonEnhancement action='close'>
                                                <ArrowUploadFilled className={styles.icon28} />
                                            </DialogTrigger>

                                            <DialogTrigger disableButtonEnhancement action='close'>
                                                <DismissFilled className={styles.icon28} />
                                            </DialogTrigger>
                                        </>
                                    }
                                >
                                    <Text size={text500}>{t('search.title1')}</Text>
                                </DialogTitle>
                                <DialogContent>
                                    <Textarea
                                        appearance='outline'
                                        size={area}
                                        resize='vertical'
                                        className={styles.textarea}
                                        value={criteria}
                                        onChange={(_, data) => { setCriteria(data.value); }}
                                    />

                                    <Text size={text200} className={styles.caption} >{t('search.caption1')}</Text>

                                    {instructions && <div className={styles.instructions}>
                                        <Divider appearance='brand' className={styles.dividertop} />
                                        {/* <Text size={400} >INSTRUCTIONS</Text> */}

                                        <Text size={text300}>{t('search.text1')}</Text>
                                        <Text size={text300}>{t('search.text2')}</Text>
                                        <Text size={text300}>{t('search.text3')}</Text>

                                        <Divider appearance='brand' className={styles.dividerbottom} />

                                    </div>
                                    }
                                </DialogContent>

                            </DialogBody>
                        </DialogSurface>
                    </Dialog>


                    <Dialog modalType='non-modal' open={open === 'add'} onOpenChange={(_, data) => setOpen(data.open ? 'add' : undefined)} >
                        <DialogTrigger disableButtonEnhancement >
                            <AddRegular className={styles.icon24} />
                        </DialogTrigger>
                        <DialogSurface className={styles.root2} >
                            <DialogBody className={styles.root}>
                                <DialogTitle className={styles.title}
                                    action={
                                        <>
                                            <DialogTrigger disableButtonEnhancement action='close'>
                                                <ArrowUploadFilled className={styles.icon28} />
                                            </DialogTrigger>

                                            <DialogTrigger disableButtonEnhancement action='close'>
                                                <DismissFilled className={styles.icon28} />
                                            </DialogTrigger>
                                        </>
                                    }
                                >
                                    <Text size={text500}>{t('add.title1')}</Text>
                                </DialogTitle>
                                <DialogContent className={styles.dialog}>
                                    <Switch
                                        className={styles.switch}
                                        checked={access}
                                        onChange={onAccess}
                                        label={access ? t('add.label1') : t('add.label2')}
                                    />
                                    <Textarea
                                        appearance='outline'
                                        size={area}
                                        resize='vertical'
                                        className={styles.textareaadd}
                                        value={tags}
                                        onChange={(_, data) => { setTags(data.value); }}
                                    />

                                    <Text size={text200} className={styles.caption} >{t('add.caption1')}</Text>

                                    {instructions && <div className={styles.instructions}>
                                        <Divider appearance='brand' className={styles.dividertop} />
                                        {/* ignore no selected... */}

                                        <Text size={text300}>{t('add.text1')}</Text>
                                        <Text size={text300}>{t('add.text2')}</Text>
                                        <Text size={text300}>{t('add.text3')}</Text>

                                        <Divider appearance='brand' className={styles.dividerbottom} />

                                    </div>
                                    }
                                </DialogContent>

                            </DialogBody>
                        </DialogSurface>
                    </Dialog>

                    <Dialog modalType='non-modal' open={open === 'settings'} onOpenChange={(_, data) => setOpen(data.open ? 'settings' : undefined)} >
                        <DialogTrigger disableButtonEnhancement >
                            <SettingsRegular className={styles.icon24} />
                        </DialogTrigger>
                        <DialogSurface className={styles.root2} >
                            <DialogBody className={styles.root}>
                                <DialogTitle className={styles.title}
                                    action={
                                        <>
                                            <DialogTrigger disableButtonEnhancement action='close'>
                                                <ArrowUploadFilled className={styles.icon28} />
                                            </DialogTrigger>

                                            <DialogTrigger disableButtonEnhancement action='close'>
                                                <DismissFilled className={styles.icon28} />
                                            </DialogTrigger>
                                        </>
                                    }
                                >
                                    <Text size={text500}>{t('settings.title1')}</Text>
                                </DialogTitle>
                                <DialogContent className={styles.dialog}>
                                    <Switch
                                        className={styles.switch}
                                        checked={verbose}
                                        onChange={onVerbose}
                                        label={verbose ? t('settings.label1') : t('settings.label2')}
                                    />
                                    <Switch
                                        className={styles.switch}
                                        checked={instructions}
                                        onChange={onInstructions}
                                        label={instructions ? t('settings.label3') : t('settings.label4')}
                                    />
                                    {instructions && <div className={styles.instructions}>
                                        <Divider appearance='brand' className={styles.dividertop} />
                                        <Text size={text300}>{t('settings.text1')}</Text>
                                        <Text size={text300}>{t('settings.text2')}</Text>
                                        <Text size={text300}>{t('settings.text3')}</Text>
                                        <Divider appearance='brand' className={styles.dividerbottom} />
                                    </div>
                                    }
                                </DialogContent>
                            </DialogBody>
                        </DialogSurface>
                    </Dialog>

                    <Dialog modalType='non-modal' open={open === 'text'} onOpenChange={(_, data) => setOpen(data.open ? 'text' : undefined)} >
                        <DialogTrigger disableButtonEnhancement >
                            <TextFontSizeRegular className={styles.icon24} />
                        </DialogTrigger>
                        <DialogSurface className={styles.root2} >
                            <DialogBody className={styles.root}>
                                <DialogTitle className={styles.title}
                                    action={
                                        <>
                                            <DialogTrigger disableButtonEnhancement action='close'>
                                                <ArrowUploadFilled className={styles.icon28} />
                                            </DialogTrigger>

                                            <DialogTrigger disableButtonEnhancement action='close'>
                                                <DismissFilled className={styles.icon28} />
                                            </DialogTrigger>
                                        </>
                                    }
                                >
                                    <Text size={text500}>{t('text.title1')}</Text>
                                </DialogTitle>
                                <DialogContent className={styles.dialog}>
                                    <RadioGroup value={text} onChange={(_, data) => {
                                        setText(data.value);
                                        if (data.value === 'small') { setText200(100); setText300(200); setText500(400); setArea('small') }
                                        else if (data.value === 'large') { setText200(300); setText300(400); setText500(600); setArea('large') }
                                        else { setText200(200); setText300(300); setText500(500), setArea('medium') }
                                    }

                                    } required>
                                        <Radio value='small' label={t('text.label1')} />
                                        <Radio value='medium' label={t('text.label2')} />
                                        <Radio value='large' label={t('text.label3')} />
                                    </RadioGroup>



                                    {instructions && <div className={styles.instructions}>
                                        <Divider appearance='brand' className={styles.dividertop} />
                                        {/* ignore no selected... */}

                                        <Text size={text300}>{t('text.text1')}</Text>
                                        <Text size={text300}>{t('text.text2')}</Text>

                                        <Divider appearance='brand' className={styles.dividerbottom} />

                                    </div>
                                    }
                                </DialogContent>
                            </DialogBody>
                        </DialogSurface>
                    </Dialog>

                    <Dialog modalType='non-modal' open={open === 'theme'} onOpenChange={(_, data) => setOpen(data.open ? 'theme' : undefined)} >
                        <DialogTrigger disableButtonEnhancement >
                            <DarkThemeRegular className={styles.icon24} />
                        </DialogTrigger>
                        <DialogSurface className={styles.root2} >
                            <DialogBody className={styles.root}>
                                <DialogTitle className={styles.title}
                                    action={
                                        <>
                                            <DialogTrigger disableButtonEnhancement action='close'>
                                                <ArrowUploadFilled className={styles.icon28} onClick={cloudTheme} />
                                            </DialogTrigger>

                                            <DialogTrigger disableButtonEnhancement action='close'>
                                                <DismissFilled className={styles.icon28} />
                                            </DialogTrigger>
                                        </>
                                    }
                                >
                                    <Text size={text500}>{t('theme.title1')}</Text>
                                </DialogTitle>
                                <DialogContent className={styles.dialog}>
                                    <Switch
                                        className={styles.switch}
                                        checked={theme}
                                        onChange={onTheme}
                                        label={theme ? t('theme.label1') : t('theme.label2')}
                                    />
                                    <Text italic size={text300}>{t('theme.caption1')}</Text>

                                    {instructions && <div className={styles.instructions}>
                                        <Divider appearance='brand' className={styles.dividertop} />
                                        {/* ignore no selected... */}

                                        <Text size={text300}>{t('theme.text1')}</Text>
                                        <Text size={text300}>{t('theme.text2')}</Text>
                                        <Text size={text300}>{t('theme.text3')}</Text>

                                        <Divider appearance='brand' className={styles.dividerbottom} />

                                    </div>
                                    }

                                </DialogContent>
                            </DialogBody>
                        </DialogSurface>
                    </Dialog>

                    <Dialog modalType='non-modal' open={open === 'language'} onOpenChange={(_, data) => setOpen(data.open ? 'language' : undefined)} >
                        <DialogTrigger disableButtonEnhancement >
                            <LocalLanguageRegular className={styles.icon24} />
                        </DialogTrigger>
                        <DialogSurface className={styles.root2} >
                            <DialogBody className={styles.root}>
                                <DialogTitle className={styles.title}
                                    action={
                                        <>
                                            <DialogTrigger disableButtonEnhancement action='close'>
                                                <ArrowUploadFilled className={styles.icon28} />
                                            </DialogTrigger>

                                            <DialogTrigger disableButtonEnhancement action='close'>
                                                <DismissFilled className={styles.icon28} />
                                            </DialogTrigger>
                                        </>
                                    }
                                >
                                    <Text size={text500}>{t('language.title1')}</Text>
                                </DialogTitle>
                                <DialogContent className={styles.dialog}>
                                    <Switch
                                        className={styles.switch}
                                        checked={language}
                                        onChange={onLanguage}
                                        label={language ? t('language.label1') : t('language.label2')}
                                    />

                                    {instructions && <div className={styles.instructions}>
                                        <Divider appearance='brand' className={styles.dividertop} />
                                        {/* ignore no selected... */}


                                        <Text size={text300}>{t('language.text1')}</Text>
                                        <Text size={text300}>{t('language.text2')}</Text>

                                        <Divider appearance='brand' className={styles.dividerbottom} />

                                    </div>
                                    }

                                </DialogContent>
                            </DialogBody>
                        </DialogSurface>
                    </Dialog>

                </div>
            </div>


        </FluentProvider >)


}
// import { BrandVariants, createLightTheme, createDarkTheme } from '@fluentui/react-components';

// const customBrandRamp: BrandVariants = {
//     10: '#020206',
//     20: '#141526',
//     30: '#1D2245',
//     40: '#242C5F',
//     50: '#2A377A',
//     60: '#37448B',
//     70: '#485194',
//     80: '#595E9D',
//     90: '#686CA6',
//     100: '#787AAF',
//     110: '#8788B8',
//     120: '#9797C1',
//     130: '#A6A6CB',
//     140: '#B5B5D4',
//     150: '#C5C5DD',
//     160: '#D5D4E6'
// };

// export const customLightTheme = createLightTheme(customBrandRamp);
// export const customDarkTheme = createDarkTheme(customBrandRamp);

export default PageSet