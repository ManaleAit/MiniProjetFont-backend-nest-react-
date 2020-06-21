import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

//regex expression for validation

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  lastname_fr: Yup.string()
    .required("le nom est requis")
    .min(4, "le nom doit comporter au moins quatre caractères "),
  firstname_fr: Yup.string().required("le prénom est requis"),
  lastname_ar: Yup.string().required("le nom en arabe est requis"),
  firstname_ar: Yup.string().required("le prénom en arabe est requis"),
  dateNaissance: Yup.date().required("la date de naissance est requise"),
  lieuNaissance: Yup.string().required("la date de naissance est requise"),
  nationalite: Yup.string().required("veillez choisir votre nationalité"),
  telephone: Yup.string()
    .required("le numéro de telephone est requis")
    .matches(phoneRegExp, "le numéro de telephone n'est pas valide"),
  address: Yup.string()
    .required("l'adresse est requies")
    .min(8, "veillez entrer une adresse complète "),
});
const nationalite = [
  {
    value: "marocaine ",
    label: "Marocaine",
  },
  {
    value: "etrangere",
    label: "étrangère",
  },
];
export const Etape2 = ({
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
        Informations personnelles
      </Typography>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          alert(JSON.stringify("cliqued", null, 2));
          setFormData(values);
          alert(JSON.stringify(values, null, 2));
          handleNext();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  id="lastname_fr"
                  name="lastname_fr"
                  label="Nom en francais"
                  //  value={values.lastname_fr}
                  as={TextField}
                  helperText={touched.lastname_fr ? errors.lastname_fr : ""}
                  error={touched.lastname_fr && Boolean(errors.lastname_fr)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  id="firstname_fr"
                  name="firstname_fr"
                  label="Prénom en francais"
                  //  value={values.firstname_fr}
                  as={TextField}
                  helperText={
                    touched.firstname_fr ? errors.firstname_fr : ""
                  }
                  error={
                    touched.firstname_fr && Boolean(errors.firstname_fr)
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  id="lastname_ar"
                  name="lastname_ar"
                  label="الإسم العائلي بالعربية"
                  //  value={values.lastname_ar}
                  as={TextField}
                  helperText={touched.lastname_ar ? errors.lastname_ar : ""}
                  error={touched.lastname_ar && Boolean(errors.lastname_ar)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  id="firstname_ar"
                  name="firstname_ar"
                  label="الإسم الشخصي بالعربية"
                  //  value={values.firstname_ar}
                  as={TextField}
                  helperText={touched.firstname_ar ? errors.firstname_ar : ""}
                  error={touched.firstname_ar && Boolean(errors.firstname_ar)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  id="dateNaissance"
                  name="dateNaissance"
                  type="date"
                  label="Date de naissance"
                  //  value={values.dateNaissance}
                  as={TextField}
                  helperText={touched.dateNaissance ? errors.dateNaissance : ""}
                  error={touched.dateNaissance && Boolean(errors.dateNaissance)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  id="lieuNaissance"
                  name="lieuNaissance"
                  label="Lieu de naissance"
                  helperText=""
                  //  value={values.lieuNaissance}
                  as={TextField}
                  helperText={touched.lieuNaissance ? errors.lieuNaissance : ""}
                  error={touched.lieuNaissance && Boolean(errors.lieuNaissance)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  select
                  id="nationalite"
                  name="nationalite"
                  label="Nationalité"
                  as={TextField}
                  helperText={touched.nationalite ? errors.nationalite : ""}
                  error={touched.nationalite && Boolean(errors.nationalite)}
                  fullWidth
                >
                  {nationalite.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  id="telephone"
                  name="telephone"
                  label="Téléphone"
                  helperText=""
                  //  value={values.Telephone}
                  as={TextField}
                  helperText={touched.telephone ? errors.telephone : ""}
                  error={touched.telephone && Boolean(errors.telephone)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Field
                  required
                  id="address"
                  name="address"
                  label=" Adresse de résidence (complète)"
                  helperText="Exemple : Résidence XX Quartier YY ville-pays ..."
                  //  value={values.address}
                  as={TextField}
                  helperText={
                    touched.address ? errors.address : ""
                  }
                  error={
                    touched.address && Boolean(errors.address)
                  }
                  fullWidth
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
Etape2.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};
