import { Button, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, TextField, InputLabel, MenuItem, Select, FormHelperText, SelectChangeEvent, CssBaseline, Typography, Chip, ListSubheader, Checkbox, Card, CardHeader, CardContent, CardActions, ListItemText, Slide, Container, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React, { useState, ChangeEvent, SyntheticEvent, useEffect, ReactElement } from "react";
import QuoteService from "../service/QuoteService";
import QuoteData from "../type/Quote";
import {DropzoneArea} from '@shotskydiver/material-ui-dropzone'
import { useSnackbar } from 'notistack'; 

const QuoteRequest  = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const initialQuoteState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        clientType: 'PERSONAL',

        companyName: '',
        field: '',
        siren: '',
        address: '',
        postcode: '',
        city: '',

        category: '',
        project: [],
        message: '',
    };
    const requiredFieldErrorMsg = "Ce champ est obligatoire.";

    const [clearFileFlag, setClearFileFlag] = useState<number>(0);
    const [selectedFiles, setSelectedFiles] = useState<FileList | Array<File>>();
    const [quote, setQuote] = useState<QuoteData>(initialQuoteState);
    const [needClientEmail, setNeedClientEmail] = useState<boolean>(false);
    const [accept, setAccept] = useState<boolean>(false);
    const [errors, setErrors] = useState({} as any);
    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState([] as Array<{name: string, subProjects: []}>);
    
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

   
    const projectsElement:ReactElement[] = [];

    projects.forEach((project) => {
        projectsElement.push((<ListSubheader key={project.name}>{project.name}</ListSubheader>))
        project.subProjects.forEach((subProject) =>
            projectsElement.push((
            <MenuItem key={project.name + subProject} value={subProject}>
                <Checkbox checked={quote.project.indexOf(subProject) > -1} />
                <ListItemText primary={subProject} />
            </MenuItem>
        )))
    });

    useEffect(() => {
        QuoteService.getCategories().then(response => setCategories(response.data));
        QuoteService.getProjects().then(response => setProjects(response.data));
    }, []);

    const validate: any = (fieldValues = quote) => {
        let temp: any = { ...errors }

        if ("clientType" in fieldValues)
            temp.clientType = fieldValues.clientType ? "" : requiredFieldErrorMsg
        if ("firstName" in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : requiredFieldErrorMsg
        if ("lastName" in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : requiredFieldErrorMsg
        if ("email" in fieldValues) {
            temp.email = fieldValues.email ? "" : requiredFieldErrorMsg
            if (fieldValues.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                    ? ""
                    : "Email non valide."
        }
        if ("phone" in fieldValues)
            temp.phone = fieldValues.phone ? "" : requiredFieldErrorMsg

        if ("message" in fieldValues)
            temp.message = fieldValues.message?.length > 300 ? "300 max" : ""

        // todo 使用state可能异步
        if (quote.clientType == 'PROFESSIONAL') {
            if ("companyName" in fieldValues)
                temp.companyName = fieldValues.companyName ? "" : requiredFieldErrorMsg
            if ("field" in fieldValues)
                temp.field = fieldValues.field ? "" : requiredFieldErrorMsg
            if ("siren" in fieldValues)
                temp.siren = fieldValues.siren ? "" : requiredFieldErrorMsg
            if ("address" in fieldValues)
                temp.address = fieldValues.address ? "" : requiredFieldErrorMsg
            if ("postcode" in fieldValues)
                temp.postcode = fieldValues.postcode ? "" : requiredFieldErrorMsg
            if ("city" in fieldValues)
                temp.city = fieldValues.city ? "" : requiredFieldErrorMsg
        }

        setErrors({
            ...temp
        });
    }

    const formIsValid = (fieldValues = quote) => {
        let isValid =
            fieldValues.firstName &&
            fieldValues.lastName &&
            fieldValues.email &&
            fieldValues.phone;

        if (fieldValues.clientType == 'PROFESSIONAL') {
            isValid = isValid && fieldValues.companyName &&
                fieldValues.field &&
                fieldValues.siren &&
                fieldValues.address &&
                fieldValues.postcode &&
                fieldValues.city
        }

        Object.values(errors).every((x) => x === "");

        return isValid;
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setQuote({ ...quote, [name]: value });
        validate({ [name]: value });
    };

    const handleSelectChange = (event: SelectChangeEvent<string  |  number  |  Array < string  |  number >>) => {
        const { name, value } = event.target;
        setQuote({ ...quote, [name]: value });
        validate({ [name]: value });
    };

    const handleEmailCheckChange = (event: SyntheticEvent, checked: boolean) => {
        setNeedClientEmail(checked);
    };

    const handleAcceptCheckChange = (event: SyntheticEvent, checked: boolean) => {
        setAccept(checked);
    };

    const handleFileAdd = (files: any) => {
        setSelectedFiles(files)
    }

    const save = async (e: any) => {
        e.preventDefault();
        //if (accept) {
            if (formIsValid()) {
                await QuoteService.create(quote, selectedFiles, needClientEmail)

                setQuote({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    clientType: 'PERSONAL',

                    companyName: '',
                    field: '',
                    siren: '',
                    address: '',
                    postcode: '',
                    city: '',

                    category: '',
                    project: [],
                    message: '',
                })

                setSelectedFiles([]);
                // 因为没有清除功能，只能触发重新渲染
                setClearFileFlag(clearFileFlag + 1);

                setNeedClientEmail(false);
                setAccept(false);

                enqueueSnackbar('Votre demande a bien été envoyée' ,{
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'  
                    }} );
            }
        /* } else { 
            enqueueSnackbar('Veuillez accepter les conditions' ,{
                variant: 'warning',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'  
                }} );

        } */
    };

    return (  
        <Box
            component="form"
            onSubmit={save}
            sx={{ 
                margin : "80px auto",
                '& .MuiTextField-root': { m: 1, width: isMobile? '100%'  : '25ch'   },
            }}
            noValidate
            autoComplete="off"
            style={{ padding: 16,maxWidth: 600 }}
        >
            <CssBaseline />
            <Typography variant="h4" align="center" component="h1" gutterBottom>
                Demnde Un Devis
            </Typography>
            <div>
                <FormControl component="fieldset">
                    <RadioGroup
                        row
                        aria-label="clientType"
                        name="clientType"
                        value={quote.clientType}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                        {...(errors["clientType"] && { error: true, helperText: errors["clientType"] })}
                    >
                        <FormControlLabel value="PERSONAL" control={<Radio />} label="Particulier" />
                        <FormControlLabel value="PROFESSIONAL" control={<Radio />} label="Professionnel" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <TextField
                    size="medium"
                    id="outlined-first-name"
                    name="firstName"
                    label="Votre nom*"
                    value={quote.firstName}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    {...(errors["firstName"] && { error: true, helperText: errors["firstName"] })}
                />
                <TextField
                    size="medium"
                    id="outlined-last-name"
                    label="Votre prénom*"
                    value={quote.lastName}
                    onChange={handleInputChange}
                    name="lastName"
                    onBlur={handleInputChange}
                    {...(errors["lastName"] && { error: true, helperText: errors["lastName"] })}
                />
            </div>
            <div>
                <TextField
                    size="medium"
                    id="outlined-email"
                    label="Votre e-mail*"
                    value={quote.email}
                    onChange={handleInputChange}
                    name="email"
                    onBlur={handleInputChange}
                    {...(errors["email"] && { error: true, helperText: errors["email"] })}
                />
                <TextField
                    size="medium"
                    id="outlined-phone"
                    label="Votre numéro de téléphone*"
                    value={quote.phone}
                    onChange={handleInputChange}
                    name="phone"
                    onBlur={handleInputChange}
                    {...(errors["phone"] && { error: true, helperText: errors["phone"] })}
                />
            </div>

            <div>
                {quote.clientType == 'PROFESSIONAL'? (
                    <div>
                        <div>
                            <TextField
                                size="medium"
                                id="outlined-company-name"
                                label="Raison sociale"
                                value={quote.companyName}
                                onChange={handleInputChange}
                                name="companyName"
                                onBlur={handleInputChange}
                                {...(errors["companyName"] && { error: true, helperText: errors["companyName"] })}
                            />
                            <TextField
                                size="medium"
                                id="outlined-field"
                                label="Domaine d'activité"
                                value={quote.field}
                                onChange={handleInputChange}
                                name="field"
                                onBlur={handleInputChange}
                                {...(errors["field"] && { error: true, helperText: errors["field"] })}
                            />
                        </div>
                        <div>
                            <TextField
                                size="medium"
                                id="outlined-siren"
                                label="SIREN"
                                value={quote.siren}
                                onChange={handleInputChange}
                                name="siren"
                                onBlur={handleInputChange}
                                {...(errors["siren"] && { error: true, helperText: errors["siren"] })}
                            />
                            <TextField
                                size="medium"
                                id="outlined-address"
                                label="address"
                                value={quote.address}
                                onChange={handleInputChange}
                                name="address"
                                onBlur={handleInputChange}
                                {...(errors["address"] && { error: true, helperText: errors["address"] })}
                            />
                        </div>
                        <div>
                            <TextField
                                size="medium"
                                id="outlined-postcode"
                                label="postcode"
                                value={quote.postcode}
                                onChange={handleInputChange}
                                name="postcode"
                                onBlur={handleInputChange}
                                {...(errors["postcode"] && { error: true, helperText: errors["postcode"] })}
                            />
                            <TextField
                                size="medium"
                                id="outlined-city"
                                label="city"
                                name="city"
                                value={quote.city}
                                onChange={handleInputChange}
                                onBlur={handleInputChange}
                                {...(errors["city"] && { error: true, helperText: errors["city"] })}
                            />
                        </div>
                    </div>
                ) : null}

            </div>
            <div>
                <FormControl sx={{ m: 1, minWidth: '25ch' }}>
                    <InputLabel id="outlined-category-label">Que desirez vous?</InputLabel>
                    <Select
                        labelId="outlined-category-label"
                        id="outlined-category"
                        value={quote.category}
                        label="Desirez"
                        name="category"
                        onChange={handleSelectChange}
                    >
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>{category}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <div>
                <FormControl sx={{ m: 1, minWidth: '25ch' }}>
                    <InputLabel id="grouped-native-select">Project</InputLabel>
                    <Select
                        id="grouped-native"
                        labelId="grouped-native-select"
                        multiple
                        name="project"
                        value={quote.project}
                        onChange={handleSelectChange}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                    >
                        {projectsElement}
                    </Select>
                </FormControl>
            </div>

            <div style={{width: '100%', margin: 10}}>
                <DropzoneArea
                    key={clearFileFlag}
                    // style={{ width: '45ch', margin: 10}}
                    acceptedFiles={['image/*', 'application/pdf', '.zip', '.rar', '.7zip']}
                    onChange={handleFileAdd}
                    maxFileSize={12000000}
                    filesLimit={4}
                    dropzoneText='Importer vos fichers'
                    // dropzoneClass={"{width: '500', margin: 10}"}
                    useChipsForPreview
                    // showPreviews
                    // showPreviewsInDropzone={false}
                />
            </div>

            <div>
                <TextField
                    sx={{ m: 1, minWidth: '100%' }}
                    id="outlined-message"
                    label="Message"
                    name="message"
                    {...(errors["message"] && { error: true, helperText: errors["message"] })}
                    fullWidth multiline rows={5}
                    value={quote.message}
                    onChange={handleInputChange}
                />
                {/*<p>text1</p>*/}
            </div>

          {/*   <div>
                <Checkbox
                    onChange={handleAcceptCheckChange}
                    required
                />
                J'accepte
            </div> */}

            {/*<p>text2</p>*/}

            {/* TODO robot check https://levelup.gitconnected.com/how-to-implement-recaptcha-in-a-react-application-6098c506d750 */}

            <div>
                <Checkbox
                    onChange={handleEmailCheckChange}
                    value={needClientEmail}
                    name="needClientEmail"
                />
                Envoyer un mail en copie
            </div>

            <Button type="submit" variant="contained" disabled={!formIsValid()}>
                Submit
            </Button> 
        </Box> 
    );
};

export default QuoteRequest;