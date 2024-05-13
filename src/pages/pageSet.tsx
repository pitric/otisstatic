import { Dialog, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, FluentProvider, Textarea, makeStyles, Text, tokens, Switch, BrandVariants, createLightTheme, shorthands, Divider, Radio, RadioGroup, createDarkTheme, Tooltip, Input, Accordion, AccordionHeader, AccordionItem, AccordionPanel, Toast, ToastTitle, useToastController, Toaster } from '@fluentui/react-components';
import {
    SearchRegular,
    AddRegular,
    SendRegular,
    SettingsRegular,
    DismissFilled,
    ArrowUploadFilled,
    ArrowSwapRegular,
    RenameRegular
} from '@fluentui/react-icons';
// import axios from 'axios';
import React from 'react';
import { useTranslation } from 'react-i18next';

// type DrawerType = Required<DrawerProps>['type'];

//   ----------------------------------------------------------------reducer...
enum ActionType {
    Instructions = 'instructions',
    Tooltips = 'tooltips',
    Access = 'access',
    Verbose = 'verbose',
    Insert = 'insert',
    Theme = 'theme',
    Ribbon = 'ribbon',
    Language = 'language',
    Open = 'open',
    CriteriaPiece = 'criteriaPiece',
    CriteriaContact = 'criteriaContact',
    TagsPiece = 'tagsPiece',
    TagsContact = 'tagsContact',
    Text = 'text',
    Text200 = 'text200',
    Text300 = 'text300',
    Text400 = 'text400',
    Text500 = 'text500',
    Area = 'area',
    OrderPiece = 'orderPiece',
    OrderContact = 'orderContact'
}

type AppState = {
    instructions: boolean;
    tooltips: boolean;
    access: boolean;
    verbose: boolean;
    insert: boolean;
    theme: boolean;
    ribbon: boolean;
    language: boolean;
    open: 'searchpiece' | 'searchcontact' | 'addpiece' | 'addcontact' | 'sendpiece' | 'renamecontact' | 'settings' | undefined,
    criteriaPiece: string;
    criteriaContact: string;
    tagsPiece: string;
    tagsContact: string;
    text: string;
    text200: 300 | 100 | 200 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | undefined;
    text300: 300 | 100 | 200 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | undefined;
    text400: 300 | 100 | 200 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | undefined;
    text500: 300 | 100 | 200 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | undefined;
    area: 'medium' | 'large' | 'small' | undefined;
    orderPiece: 'ascending' | 'descending' | 'newest' | 'oldest';
    orderContact: 'ascending' | 'descending' | 'newest' | 'oldest';

};

type Action =
    | { type: ActionType.Instructions; payload: boolean }
    | { type: ActionType.Tooltips; payload: boolean }
    | { type: ActionType.Access; payload: boolean }
    | { type: ActionType.Verbose; payload: boolean }
    | { type: ActionType.Insert; payload: boolean }
    | { type: ActionType.Theme; payload: boolean }
    | { type: ActionType.Ribbon; payload: boolean }
    | { type: ActionType.Language; payload: boolean }
    | { type: ActionType.Open; payload: 'searchpiece' | 'searchcontact' | 'addpiece' | 'addcontact' | 'sendpiece' | 'renamecontact' | 'settings' | undefined }
    | { type: ActionType.CriteriaPiece; payload: string }
    | { type: ActionType.CriteriaContact; payload: string }
    | { type: ActionType.TagsPiece; payload: string }
    | { type: ActionType.TagsContact; payload: string }
    | { type: ActionType.Text; payload: string }

    | { type: ActionType.Text200; payload: 300 | 100 | 200 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | undefined }
    | { type: ActionType.Text300; payload: 300 | 100 | 200 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | undefined }
    | { type: ActionType.Text400; payload: 300 | 100 | 200 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | undefined }
    | { type: ActionType.Text500; payload: 300 | 100 | 200 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | undefined }
    | { type: ActionType.Area; payload: 'medium' | 'large' | 'small' | undefined }
    | { type: ActionType.OrderPiece; payload: 'ascending' | 'descending' | 'newest' | 'oldest' }
    | { type: ActionType.OrderContact; payload: 'ascending' | 'descending' | 'newest' | 'oldest' };

const initialState: AppState = {
    instructions: true,
    tooltips: true,
    access: true,
    verbose: true,
    insert: true,
    theme: true,
    ribbon: true,
    language: true,
    open: undefined,
    criteriaPiece: '',
    criteriaContact: '',
    tagsPiece: '',
    tagsContact: '',
    text: 'medium',
    text200: 200,
    text300: 300,
    text400: 400,
    text500: 500,
    area: 'medium',
    orderPiece: 'newest',
    orderContact: 'newest'

};

const reducer: React.Reducer<AppState, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.Instructions:
            return { ...state, instructions: action.payload };
        case ActionType.Tooltips:
            return { ...state, tooltips: action.payload };
        case ActionType.Access:
            return { ...state, access: action.payload };
        case ActionType.Verbose:
            return { ...state, verbose: action.payload };
        case ActionType.Insert:
            return { ...state, insert: action.payload };
        case ActionType.Theme:
            return { ...state, theme: action.payload };
        case ActionType.Ribbon:
            return { ...state, ribbon: action.payload };
        case ActionType.Language:
            return { ...state, language: action.payload };
        case ActionType.Open:
            return { ...state, open: action.payload };
        case ActionType.CriteriaPiece:
            return { ...state, criteriaPiece: action.payload };
        case ActionType.CriteriaContact:
            return { ...state, criteriaContact: action.payload };
        case ActionType.TagsPiece:
            return { ...state, tagsPiece: action.payload };
        case ActionType.TagsContact:
            return { ...state, tagsContact: action.payload };
        case ActionType.Text:
            if (action.payload === 'small') return { ...state, text200: 100, text300: 200, text400: 300, text500: 400, area: 'small', text: action.payload }
            else if (action.payload === 'medium') return { ...state, text200: 200, text300: 300, text400: 400, text500: 500, area: 'medium', text: action.payload }
            else if (action.payload === 'large') return { ...state, text200: 300, text300: 400, text400: 500, text500: 600, area: 'large', text: action.payload }
            else return { ...state };
        case ActionType.Text200:
            return { ...state, text200: action.payload };
        case ActionType.Text300:
            return { ...state, text300: action.payload };
        case ActionType.Text400:
            return { ...state, text400: action.payload };
        case ActionType.Text500:
            return { ...state, text500: action.payload };
        case ActionType.Area:
            return { ...state, area: action.payload };
        case ActionType.OrderPiece:
            return { ...state, orderPiece: action.payload };
        case ActionType.OrderContact:
            return { ...state, orderContact: action.payload };
        default:
            return { ...state };
    }
};

//    ----------------------------------------------------------------

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
        //  flexDirection: 'column ',
        marginTop: '3.5em',
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
    ribbon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },

    settings: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    pieces: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: tokens.spacingHorizontalS,
        paddingLeft: tokens.spacingHorizontalS,
        justifyContent: 'space-between',

    },

    contacts: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: tokens.spacingHorizontalS,
        paddingLeft: tokens.spacingHorizontalS,
        justifyContent: 'space-between',

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

    inputadd: {
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
        //  paddingLeft: tokens.spacingHorizontalXL,
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
    captiontextarea: {
        marginRight: tokens.spacingHorizontalL,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    captioninput: {
        marginRight: tokens.spacingHorizontalL,
        marginBottom: tokens.spacingVerticalL,
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

    name: {
        marginLeft: tokens.spacingHorizontalXS,
        marginRight: tokens.spacingHorizontalXS,
        marginTop: tokens.spacingVerticalXS,
        marginBottom: tokens.spacingVerticalXS,
    },


});



const PageSet = () => {
    const { t, i18n } = useTranslation();

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const styles = useStyles();

    React.useEffect(() => {
        state.language ? i18n.changeLanguage('en') : i18n.changeLanguage('es');
    }, [state.language]);

    const switchLanguage = <Switch
        className={styles.switch}
        checked={state.language}
        onChange={() => dispatch({ type: ActionType.Language, payload: !state.language })}
        label={state.language ? t('language.label1') : t('language.label2')} />;
    const switchInstructions = <Switch
        className={styles.switch}
        checked={state.instructions}
        onChange={() => dispatch({ type: ActionType.Instructions, payload: !state.instructions })}
        label={state.instructions ? t('settings.label3') : t('settings.label4')} />;
    const switchTooltip = <Switch
        className={styles.switch}
        checked={state.tooltips}
        onChange={() => dispatch({ type: ActionType.Tooltips, payload: !state.tooltips })}
        label={state.tooltips ? t('settings.label5') : t('settings.label6')} />;
    const switchSearch = <Switch
        className={styles.switch}
        checked={state.verbose}
        onChange={() => dispatch({ type: ActionType.Verbose, payload: !state.verbose })}
        label={state.verbose ? t('settings.label1') : t('settings.label2')} />;
    const switchInsert = <Switch
        className={styles.switch}
        checked={state.insert}
        onChange={() => dispatch({ type: ActionType.Insert, payload: !state.insert })}
        label={state.insert ? t('settings.label7') : t('settings.label8')} />;
    const switchTheme = <Switch
        className={styles.switch}
        checked={state.theme}
        onChange={() => { dispatch({ type: ActionType.Theme, payload: !state.theme }) }}
        label={state.theme ? t('theme.label1') : t('theme.label2')} />;
    const radioText = <RadioGroup value={state.text} onChange={(_: any, data: { value: React.SetStateAction<any>; }) => {
        dispatch({ type: ActionType.Text, payload: data.value })
    }} required>
        <Radio value='small' label={t('text.label1')} />
        <Radio value='medium' label={t('text.label2')} />
        <Radio value='large' label={t('text.label3')} />
    </RadioGroup>;
    const settingsUpload = <DialogTrigger disableButtonEnhancement action='close'>
        <ArrowUploadFilled className={styles.icon28} />
    </DialogTrigger>;
    const settingsDismiss = <DialogTrigger disableButtonEnhancement action='close'>
        <DismissFilled className={styles.icon28} />
    </DialogTrigger>;

    const { dispatchToast } = useToastController('toaster');
    const notify = () =>
        dispatchToast(
            <Toast>
                <ToastTitle>Options configured in Toaster</ToastTitle>
            </Toast>,
            { intent: 'success' }
        );


    return (
        <FluentProvider theme={state.theme ? lightTheme : darkTheme}>
            <div className={styles.page} >

                <div className={styles.content} >
                    <div className={styles.ribbon}>
                        {state.tooltips ? <Tooltip
                            content={t('tip.text1')}
                            relationship='description'
                            withArrow
                        >
                            <ArrowSwapRegular className={styles.icon24} onClick={() => dispatch({ type: ActionType.Ribbon, payload: !state.ribbon })} />
                        </Tooltip> :
                            <ArrowSwapRegular className={styles.icon24} onClick={() => dispatch({ type: ActionType.Ribbon, payload: !state.ribbon })} />
                        }

                        <Text font='base' weight='medium' size={state.text400}>{state.ribbon ? t('ribbon.label1') : t('ribbon.label2')}</Text>
                    </div>

                    {/* // -----------------------------------------------pieces... */}

                    {state.ribbon && <>

                        {/* <Dialog modalType='non-modal' open={open === 'searchpiece'} onOpenChange={(_, data) => setOpen(data.open ? 'searchpiece' : undefined)} > */}

                        <Dialog modalType='non-modal' open={state.open === 'searchpiece'} onOpenChange={(_, data) => dispatch({ type: ActionType.Open, payload: data.open ? 'searchpiece' : undefined })} >

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
                                        <Text size={state.text500}>{t('search.title1')}</Text>
                                    </DialogTitle>
                                    <DialogContent>
                                        <Textarea
                                            appearance='outline'
                                            size={state.area}
                                            resize='vertical'
                                            className={styles.textarea}
                                            value={state.criteriaPiece}
                                            onChange={(_, data) => { dispatch({ type: ActionType.CriteriaPiece, payload: data.value }) }}
                                        />

                                        <Text size={state.text200} className={styles.captiontextarea} >{t('search.caption1')}</Text>

                                        <RadioGroup value={state.orderPiece} onChange={(_: any, data: { value: React.SetStateAction<any>; }) => {
                                            dispatch({ type: ActionType.OrderPiece, payload: data.value })
                                        }} required>

                                            <div className='styles.settings'>

                                                <Radio value='newest' label={t('send.label3')} />
                                                <Radio value='oldest' label={t('send.label4')} />
                                            </div>
                                            <div className='styles.settings'>

                                                <Radio value='ascending' label={t('send.label1')} />
                                                <Radio value='descending' label={t('send.label2')} />
                                            </div>

                                        </RadioGroup>



                                        <div className='styles.settings'>

                                            {switchSearch}
                                            {switchInsert}

                                        </div>
                                        {state.instructions && <div className={styles.instructions}>
                                            <Divider appearance='brand' className={styles.dividertop} />
                                            <Text size={state.text300}>{t('search.text1')}</Text>
                                            <Text size={state.text300}>{t('search.text2')}</Text>
                                            <Text size={state.text300}>{t('search.text3')}</Text>
                                            <Divider appearance='brand' className={styles.dividerbottom} />
                                        </div>
                                        }
                                    </DialogContent>
                                </DialogBody>
                            </DialogSurface>
                        </Dialog>




                        {/* <Dialog modalType='non-modal' open={open === 'addpiece'} onOpenChange={(_, data) => setOpen(data.open ? 'addpiece' : undefined)} > */}
                        <Dialog modalType='non-modal' open={state.open === 'addpiece'} onOpenChange={(_, data) => dispatch({ type: ActionType.Open, payload: data.open ? 'addpiece' : undefined })} >

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
                                        <Text size={state.text500}>{t('add.title1')}</Text>
                                    </DialogTitle>
                                    <DialogContent className={styles.dialog}>
                                        <Input appearance='outline' className={styles.inputadd} />
                                        <Text size={state.text200} className={styles.captioninput} >{t('add.caption3')}</Text>
                                        <Textarea
                                            appearance='outline'
                                            size={state.area}
                                            resize='vertical'
                                            className={styles.textareaadd}
                                            value={state.tagsPiece}
                                            onChange={(_, data) => { dispatch({ type: ActionType.TagsPiece, payload: data.value }) }}
                                        />

                                        <Text size={state.text200} className={styles.captiontextarea} >{t('add.caption1')}</Text>

                                        <Switch
                                            className={styles.switch}
                                            checked={state.access}
                                            onChange={() => dispatch({ type: ActionType.Access, payload: !state.access })}
                                            label={state.access ? t('add.label1') : t('add.label2')}
                                        />

                                        {state.instructions && <div className={styles.instructions}>
                                            <Divider appearance='brand' className={styles.dividertop} />
                                            {/* ignore no selected... */}

                                            <Text size={state.text300}>{t('add.text1')}</Text>
                                            <Text size={state.text300}>{t('add.text2')}</Text>
                                            <Text size={state.text300}>{t('add.text3')}</Text>

                                            <Divider appearance='brand' className={styles.dividerbottom} />

                                        </div>
                                        }
                                    </DialogContent>

                                </DialogBody>
                            </DialogSurface>
                        </Dialog>

                        {/* <Dialog modalType='non-modal' open={open === 'sendpiece'} onOpenChange={(_, data) => setOpen(data.open ? 'sendpiece' : undefined)} > */}
                        <Dialog modalType='non-modal' open={state.open === 'sendpiece'} onOpenChange={(_, data) => dispatch({ type: ActionType.Open, payload: data.open ? 'sendpiece' : undefined })} >

                            <DialogTrigger disableButtonEnhancement >
                                <SendRegular className={styles.icon24} />
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
                                        <Text size={state.text500}>{t('send.title1')}</Text>
                                    </DialogTitle>
                                    <DialogContent className={styles.dialog}>


                                        <Accordion multiple collapsible>
                                            <AccordionItem value='1'>
                                                <AccordionHeader size='large'>Pieces</AccordionHeader>
                                                <AccordionPanel>
                                                    <Text size={state.text300}>pieces here??? name only???</Text>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem value='2'>
                                                <AccordionHeader size='large'>Contacts</AccordionHeader>
                                                <AccordionPanel>
                                                    <Text size={state.text300}>contacts here?? name only???</Text>
                                                </AccordionPanel>
                                            </AccordionItem>

                                        </Accordion>
                                        {state.instructions && <div className={styles.instructions}>
                                            <Divider appearance='brand' className={styles.dividertop} />
                                            <Text size={state.text300}>{t('settings.text1')}</Text>
                                            <Text size={state.text300}>{t('settings.text2')}</Text>
                                            <Text size={state.text300}>{t('settings.text3')}</Text>
                                            <Divider appearance='brand' className={styles.dividerbottom} />
                                        </div>
                                        }
                                    </DialogContent>
                                </DialogBody>
                            </DialogSurface>
                        </Dialog>
                        {/* <Dialog modalType='non-modal' open={open === 'settings'} onOpenChange={(_, data) => setOpen(data.open ? 'settings' : undefined)} > */}
                        <Dialog modalType='non-modal' open={state.open === 'settings'} onOpenChange={(_, data) => dispatch({ type: ActionType.Open, payload: data.open ? 'settings' : undefined })} >
                            <DialogTrigger disableButtonEnhancement >
                                <SettingsRegular className={styles.icon24} />
                            </DialogTrigger>
                            <DialogSurface className={styles.root2} >
                                <DialogBody className={styles.root}>
                                    <DialogTitle className={styles.title}
                                        action={<>
                                            {state.tooltips ? <Tooltip
                                                content={t('tip.text7')}
                                                relationship='description'
                                                withArrow
                                            >
                                                {settingsUpload}
                                            </Tooltip> :
                                                settingsUpload}
                                            {state.tooltips ? <Tooltip
                                                content={t('tip.text8')}
                                                relationship='description'
                                                withArrow
                                            >
                                                {settingsDismiss}
                                            </Tooltip> :
                                                settingsDismiss}

                                        </>

                                            // {settingsDismiss}

                                        }
                                    >
                                        <Text size={state.text500}>{t('settings.title1')}</Text>
                                    </DialogTitle>
                                    <DialogContent className={styles.dialog}>
                                        {state.tooltips ? <Tooltip
                                            content={t('tip.text6')}
                                            relationship='description'
                                            withArrow
                                        >
                                            {radioText}
                                        </Tooltip> :
                                            radioText
                                        }
                                        <div className='styles.settings'>

                                            {state.tooltips ? <Tooltip
                                                content={t('tip.text5')}
                                                relationship='description'
                                                withArrow
                                            >
                                                {switchTooltip}
                                            </Tooltip> :
                                                <>{switchTooltip}</>
                                            }


                                            {state.tooltips ? <Tooltip
                                                content={t('tip.text4')}
                                                relationship='description'
                                                withArrow
                                            >
                                                {switchTheme}
                                            </Tooltip> :
                                                <>{switchTheme}</>
                                            }



                                        </div>
                                        <div className='styles.settings'>

                                            {state.tooltips ? <Tooltip
                                                content={t('tip.text3')}
                                                relationship='description'
                                                withArrow
                                            >
                                                {switchInstructions}
                                            </Tooltip> :
                                                <>{switchInstructions}</>
                                            }


                                            {state.tooltips ? <Tooltip
                                                content={t('tip.text2')}
                                                relationship='description'
                                                withArrow
                                            >
                                                {switchLanguage}
                                            </Tooltip> :
                                                <>{switchLanguage}</>
                                            }

                                        </div>

                                        {state.instructions && <div className={styles.instructions}>
                                            <Divider appearance='brand' className={styles.dividertop} />


                                            <Text size={state.text300}>{t('text.text1')}</Text>
                                            <Text size={state.text300}>{t('text.text2')}</Text>
                                            <Text size={state.text300}>{t('text.text3')}</Text>

                                            <Divider appearance='brand' className={styles.dividerbottom} />

                                        </div>
                                        }
                                    </DialogContent>
                                </DialogBody>
                            </DialogSurface>
                        </Dialog>

                    </>

                    }

                    {/* // -----------------------------------------------contacts... */}

                    {!state.ribbon && <>
                        {/* <Dialog modalType='non-modal' open={open === 'searchcontact'} onOpenChange={(_, data) => setOpen(data.open ? 'searchcontact' : undefined)} > */}

                        <Dialog modalType='non-modal' open={state.open === 'searchcontact'} onOpenChange={(_, data) => dispatch({ type: ActionType.Open, payload: data.open ? 'searchcontact' : undefined })} >
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
                                        <Text size={state.text500}>{t('search.title1')}</Text>
                                    </DialogTitle>
                                    <DialogContent>
                                        <Textarea
                                            appearance='outline'
                                            size={state.area}
                                            resize='vertical'
                                            className={styles.textarea}
                                            value={state.criteriaContact}
                                            onChange={(_, data) => { dispatch({ type: ActionType.CriteriaContact, payload: data.value }) }}
                                        />

                                        <Text size={state.text200} className={styles.captiontextarea} >{t('search.caption2')}</Text>

                                        <RadioGroup value={state.orderContact} onChange={(_: any, data: { value: React.SetStateAction<any>; }) => {
                                            dispatch({ type: ActionType.OrderContact, payload: data.value })
                                        }} required>
                                            <div className='styles.settings'>

                                                <Radio value='newest' label={t('send.label3')} />
                                                <Radio value='oldest' label={t('send.label4')} />
                                            </div>
                                            <div className='styles.settings'>

                                                <Radio value='ascending' label={t('send.label1')} />
                                                <Radio value='descending' label={t('send.label2')} />
                                            </div>

                                        </RadioGroup>

                                        {state.instructions && <div className={styles.instructions}>
                                            <Divider appearance='brand' className={styles.dividertop} />
                                            <Text size={state.text300}>{t('search.text1')}</Text>
                                            <Text size={state.text300}>{t('search.text2')}</Text>
                                            <Text size={state.text300}>{t('search.text3')}</Text>
                                            <Divider appearance='brand' className={styles.dividerbottom} />
                                        </div>
                                        }
                                    </DialogContent>
                                </DialogBody>
                            </DialogSurface>
                        </Dialog>




                        {/* <Dialog modalType='non-modal' open={open === 'addcontact'} onOpenChange={(_, data) => setOpen(data.open ? 'addcontact' : undefined)} > */}
                        <Dialog modalType='non-modal' open={state.open === 'addcontact'} onOpenChange={(_, data) => dispatch({ type: ActionType.Open, payload: data.open ? 'addcontact' : undefined })} >
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
                                        <Text size={state.text500}>{t('add.title1')}</Text>
                                    </DialogTitle>
                                    <DialogContent className={styles.dialog}>
                                        <Input appearance='outline' className={styles.inputadd} />
                                        <Text size={state.text200} className={styles.captioninput} >{t('add.caption4')}</Text>
                                        <Textarea
                                            appearance='outline'
                                            size={state.area}
                                            resize='vertical'
                                            className={styles.textareaadd}
                                            value={state.tagsContact}
                                            onChange={(_, data) => { dispatch({ type: ActionType.CriteriaContact, payload: data.value }) }}
                                        />

                                        <Text size={state.text200} className={styles.captiontextarea} >{t('add.caption2')}</Text>

                                        {state.instructions && <div className={styles.instructions}>
                                            <Divider appearance='brand' className={styles.dividertop} />
                                            {/* ignore no selected... */}

                                            <Text size={state.text300}>{t('add.text1')}</Text>
                                            <Text size={state.text300}>{t('add.text2')}</Text>
                                            <Text size={state.text300}>{t('add.text3')}</Text>

                                            <Divider appearance='brand' className={styles.dividerbottom} />

                                        </div>
                                        }
                                    </DialogContent>

                                </DialogBody>
                            </DialogSurface>
                        </Dialog>

                        {/* <Dialog modalType='non-modal' open={open === 'renamecontact'} onOpenChange={(_, data) => setOpen(data.open ? 'renamecontact' : undefined)} > */}
                        <Dialog modalType='non-modal' open={state.open === 'renamecontact'} onOpenChange={(_, data) => dispatch({ type: ActionType.Open, payload: data.open ? 'renamecontact' : undefined })} >

                            <DialogTrigger disableButtonEnhancement >
                                <RenameRegular className={styles.icon24} />
                            </DialogTrigger>
                            <DialogSurface className={styles.root2} >
                                <DialogBody className={styles.root}>
                                    <DialogTitle className={styles.title}
                                        action={
                                            <>
                                                <DialogTrigger disableButtonEnhancement action='open'>
                                                    <ArrowUploadFilled className={styles.icon28} onClick={() => notify()} />
                                                </DialogTrigger>

                                                <DialogTrigger disableButtonEnhancement action='close'>
                                                    <DismissFilled className={styles.icon28} />
                                                </DialogTrigger>
                                            </>
                                        }
                                    >
                                        <Text size={state.text500}>{t('name.title1')}</Text>
                                    </DialogTitle>
                                    <DialogContent className={styles.dialog}>


                                        <Toaster
                                            toasterId={'toaster'}
                                            position='top'
                                            pauseOnHover
                                            pauseOnWindowBlur
                                            timeout={1000}
                                        />



                                        <Text className={styles.name} size={state.text400}>Account: Buster</Text>
                                        <Input appearance='outline' className={styles.inputadd} />
                                        <Text size={state.text200} className={styles.captioninput} >{t('name.caption1')}</Text>
                                        {state.instructions && <div className={styles.instructions}>
                                            <Divider appearance='brand' className={styles.dividertop} />
                                            <Text size={state.text300}>{t('settings.text1')}</Text>
                                            <Text size={state.text300}>{t('settings.text2')}</Text>
                                            <Text size={state.text300}>{t('settings.text3')}</Text>
                                            <Divider appearance='brand' className={styles.dividerbottom} />
                                        </div>
                                        }
                                    </DialogContent>
                                </DialogBody>
                            </DialogSurface>
                        </Dialog>

                        {/* <Dialog modalType='non-modal' open={open === 'settings'} onOpenChange={(_, data) => setOpen(data.open ? 'settings' : undefined)} > */}
                        <Dialog modalType='non-modal' open={state.open === 'settings'} onOpenChange={(_, data) => dispatch({ type: ActionType.Open, payload: data.open ? 'settings' : undefined })} >
                            <DialogTrigger disableButtonEnhancement >
                                <SettingsRegular className={styles.icon24} />
                            </DialogTrigger>
                            <DialogSurface className={styles.root2} >
                                <DialogBody className={styles.root}>
                                    <DialogTitle className={styles.title}
                                        action={<>
                                            {state.tooltips ? <Tooltip
                                                content={t('tip.text7')}
                                                relationship='description'
                                                withArrow
                                            >
                                                {settingsUpload}
                                            </Tooltip> :
                                                settingsUpload}
                                            {state.tooltips ? <Tooltip
                                                content={t('tip.text8')}
                                                relationship='description'
                                                withArrow
                                            >
                                                {settingsDismiss}
                                            </Tooltip> :
                                                settingsDismiss}

                                        </>

                                            // {settingsDismiss}

                                        }
                                    >
                                        <Text size={state.text500}>{t('settings.title1')}</Text>
                                    </DialogTitle>
                                    <DialogContent className={styles.dialog}>
                                        {state.tooltips ? <Tooltip
                                            content={t('tip.text6')}
                                            relationship='description'
                                            withArrow
                                        >
                                            {radioText}
                                        </Tooltip> :
                                            radioText
                                        }
                                        <div className='styles.settings'>

                                            {state.tooltips ? <Tooltip
                                                content={t('tip.text5')}
                                                relationship='description'
                                                withArrow
                                            >
                                                {switchTooltip}
                                            </Tooltip> :
                                                <>{switchTooltip}</>
                                            }


                                            {state.tooltips ? <Tooltip
                                                content={t('tip.text4')}
                                                relationship='description'
                                                withArrow
                                            >
                                                {switchTheme}
                                            </Tooltip> :
                                                <>{switchTheme}</>
                                            }



                                        </div>
                                        <div className='styles.settings'>

                                            {state.tooltips ? <Tooltip
                                                content={t('tip.text3')}
                                                relationship='description'
                                                withArrow
                                            >
                                                {switchInstructions}
                                            </Tooltip> :
                                                <>{switchInstructions}</>
                                            }


                                            {state.tooltips ? <Tooltip
                                                content={t('tip.text2')}
                                                relationship='description'
                                                withArrow
                                            >
                                                {switchLanguage}
                                            </Tooltip> :
                                                <>{switchLanguage}</>
                                            }

                                        </div>

                                        {state.instructions && <div className={styles.instructions}>
                                            <Divider appearance='brand' className={styles.dividertop} />


                                            <Text size={state.text300}>{t('text.text1')}</Text>
                                            <Text size={state.text300}>{t('text.text2')}</Text>
                                            <Text size={state.text300}>{t('text.text3')}</Text>

                                            <Divider appearance='brand' className={styles.dividerbottom} />

                                        </div>
                                        }
                                    </DialogContent>
                                </DialogBody>
                            </DialogSurface>
                        </Dialog>


                    </>

                    }


                </div>
                {state.ribbon && <div className={styles.pieces}>

                    <Text size={state.text500}>pieces here???</Text>
                </div>
                }
                {!state.ribbon && <div className={styles.contacts}>
                    <Text size={state.text500}>contacts here???</Text>
                </div>}
            </div>


        </FluentProvider >)


}

export default PageSet