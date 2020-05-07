import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Etape1 } from "./Etape1";
import { Etape2 } from "./Etape2";
import { Etape3 } from "./Etape3";
import { Etape4 } from "./Etape4";
import { Etape5 } from "./Etape5";
import Output from "./Recu";
import ReactPDF from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ReactDOM from "react-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Écoles nationales des sciences appliquées de Safi
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = [
  "première étape",
  "deuxième étape",
  "troisième étape",
  "quatrième étape",
  "cinqième étape",
];

export const Checkout = () => {

 
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = useState({
    //first page
    massar: "Hamza",
    cin: "Hamza",
    email: "Hamza@gmail.com",
    confirmEmail: "Hamza@gmail.com",
    password: "Hamza111",
    confirmPassword: "Hamza111",
    //seconde page
    lastname_fr: "Hamza",
    firstname_fr: "Hamza",
    lastname_ar: "Hamza",
    firstname_ar: "Hamza",
    dateNaissance: "Hamza",
    lieuNaissance: "Hamza",
    nationalite: "Hamza",
    telephone: "884151121",
    address: "Hamza",
    //etape3
    nom_Prenom_Pere: "Hamza",
    profession_Pere: "Hamza",
    nom_Prenom_mere: "Hamza",
    profession_mere: "Hamza",
    adresse_parent: "Hamza",
    teleParent: "884151121",
    //etape 4
    id_filiere: "Hamza",
    niveau: "Hamza",
    type_Bac: "Hamza",
    annee_Bac: "Hamza",
    mention: "Hamza",
    lycee: "Hamza",
    delegue: "Hamza",
    academie: "Hamza",
    status:"",
    //externe
    diplomePrecedent: "Hamza",
    etablissement: "Hamza",
    ville: "Hamza",
    externe: false,
    photo: "Hamza",
   
  });

  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const recuHnadler = () => {







    console.log(formData);
    // let reader = new FileReader();
    // reader.readAsDataURL(formData.photo);
    // const imageUrl = reader.result;
    // console.log(imageUrl);




    let data = new FormData();
        data.append('photo',formData.photo);
        data.append('name', formData.photo.name);
        fetch('http://localhost:4000/etuds/multiple', {
          method: 'POST',
          body: data
        }).then(response => {
          this.setState({error: '', msg: 'Sucessfully uploaded file'});
        }).catch(err => {
          this.setState({error: err});
        });


    formData.photo=formData.photo.name;
    let url2="http://localhost:4000/etuds/add";
      let data2=formData
      fetch(url2,{
        method:'post',
        headers:
        {
         "Content-Type":"application/json",
         "Accept":"application/json",

        },
        body:JSON.stringify(data2)

       
    });







   
    const PDF = () => (
      <div>
        <PDFDownloadLink
          document={<Output formData={formData} />}
          fileName="votre recu.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "télécharger maintenent!"
          }
        </PDFDownloadLink>
      </div>
    );

    ReactDOM.render(<PDF />, document.getElementById("root"));
  };
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Etape1
            formData={formData}
            setFormData={setFormData}
            classes={classes}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            steps={steps}
          />
        );
      case 1:
        return (
          <Etape2
            formData={formData}
            setFormData={setFormData}
            classes={classes}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            steps={steps}
          />
        );
      case 2:
        return (
          <Etape3
            formData={formData}
            setFormData={setFormData}
            classes={classes}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            steps={steps}
          />
        );
      case 3:
        return (
          <Etape4
            formData={formData}
            setFormData={setFormData}
            classes={classes}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            steps={steps}
          />
        );
      case 4:
        return (
     
          <Etape5
            formData={formData}
            setFormData={setFormData}
            classes={classes}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            steps={steps}
          />
        
           
        
        );
      default:
        throw new Error("Unknown step");
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
     
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            inscription
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  merci de verifier vos information avant la clique sur la
                  button ci-dessous
                </Typography>
                <Typography variant="subtitle1">
                  vos informations est collectées avec succès <br />
                  cliquer sur la button ci-dessous pour valider votre
                  inscription et télécharger votre reçu
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.button}
                    onClick={recuHnadler}
                  >
                    {" "}
                    valider mon inscription{" "}
                  </Button>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
};
