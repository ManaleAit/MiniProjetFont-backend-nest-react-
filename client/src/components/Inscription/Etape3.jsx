import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const profesionDispo = [
  {
    value: "Agriculteur exploitant ",
    label: "Agriculteur exploitant",
  },
  {
    value: "Autre métier non Renseigné",
    label: "Autre métier non Renseigné",
  },
  {
    value: "Artisan, Décorateur, Peintre ",
    label: "Artisan, Décorateur, Peintre",
  },
  {
    value: "Cadre d'Entreprise, Société (Gérant.... ",
    label: "Cadre d'Entreprise, Société (Gérant....t",
  },
  {
    value: "Cadre Fonction Publique",
    label: "Agriculteur exploitant",
  },
  {
    value: "Chef entreprise, Patron de socité ",
    label: "Chef entreprise, Patron de socité",
  },
  {
    value: "Commerçant et assimilé ",
    label: "Commerçant et assimilé",
  },
  {
    value: "Décédét",
    label: "Décédét",
  },
  {
    value: "Eleve,Etudiant ",
    label: "Eleve,Etudiant",
  },
  {
    value: "Employé d'Entreprise, Société, Associat ",
    label: "Employé d'Entreprise, Société, Associat",
  },
  {
    value: "Employé Fonction Public, Agent Civil ",
    label: "Employé Fonction Public, Agent Civil",
  },
  {
    value: "Employé Métier de Commerce ",
    label: "Employé Métier de Commerce",
  },
  {
    value: "Ingénieur, Cadre Technique d'Entreprise",
    label: "Ingénieur, Cadre Technique d'Entreprise",
  },
  {
    value: "Ouvrier Non Qualifié type artisanat",
    label: "Ouvrier Non Qualifié type artisanat",
  },
  {
    value: "Ouvrier  Non Qualifié type  Industrie ",
    label: "Ouvrier  Non Qualifié type  Industrie",
  },
  {
    value: "Ouvrier Qualifié Industrie",
    label: "Ouvrier Qualifié Industrie",
  },
  {
    value: "Ouvrier Qualifié Transport, Manutention",
    label: "Ouvrier Qualifié Transport, Manutention",
  },
  {
    value: "Personne sans activité professionnelle",
    label: "Personne sans activité professionnelle",
  },
  {
    value: "Policier et militaire",
    label: "Policier et militaire",
  },
];

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  nomPere: Yup.string()
    .required("le nom complet de père est requis")
    .min(4, "le nom complet de père doit comporter au moins trois caractères "),
  professionPere: Yup.string().required("la Profession du père est requise"),
  nomMere: Yup.string()
    .required("le nom complet de la mère est requis")
    .min(4, "le nom complet de mère doit comporter au moins trois caractères "),
  professionMere: Yup.string().required("la Profession de la mère est requise"),
  adresseParent: Yup.string()
    .required("l'adresse est requise")
    .min(8, "veillez entrer une adresse complète "),
  teleParent: Yup.string()
    .required("le numéro de telephone est requis")
    .matches(phoneRegExp, "le numéro de telephone n'est pas valide"),
});

export const Etape3 = ({
  formData,
  setFormData,
  classes,
  handleBack,
  handleNext,
  activeStep,
  steps,
}) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informations parentales
      </Typography>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          handleNext();
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  id="nomPere"
                  name="nomPere"
                  label="Nom et prénom du père"
                  as={TextField}
                  helperText={touched.nomPere ? errors.nomPere : ""}
                  error={touched.nomPere && Boolean(errors.nomPere)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  select
                  id="professionPere"
                  name="professionPere"
                  label="Profession du père"
                  as={TextField}
                  helperText={
                    touched.professionPere ? errors.professionPere : ""
                  }
                  error={
                    touched.professionPere && Boolean(errors.professionPere)
                  }
                  fullWidth
                >
                  {profesionDispo.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  id="nomMere"
                  name="nomMere"
                  label="Nom et prénom de la mère"
                  as={TextField}
                  helperText={touched.nomMere ? errors.nomMere : ""}
                  error={touched.nomMere && Boolean(errors.nomMere)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  select
                  required
                  id="professionMere"
                  name="professionMere"
                  label="Profession de la mère"
                  as={TextField}
                  helperText={
                    touched.professionMere ? errors.professionMere : ""
                  }
                  error={
                    touched.professionMere && Boolean(errors.professionMere)
                  }
                  fullWidth
                >
                  {profesionDispo.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12} md={12}>
                <Field
                  required
                  id="adresseParent"
                  name="adresseParent"
                  label="Adresse des parents (complète)"
                  as={TextField}
                  helperText={touched.adresseParent ? errors.adresseParent : ""}
                  error={touched.adresseParent && Boolean(errors.adresseParent)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  id="teleParent"
                  name="teleParent"
                  label="Téléphone des parents"
                  helperText="Téléphone de vos parents"
                  helperText={touched.teleParent ? errors.teleParent : ""}
                  error={touched.teleParent && Boolean(errors.teleParent)}
                  fullWidth
                  as={TextField}
                />
              </Grid>
            </Grid>
            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button
                  type="submit"
                  onClick={handleBack}
                  className={classes.button}
                >
                  Précédent
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Place order" : "Suivant"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};
Etape3.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};
