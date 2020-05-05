import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  cin: Yup.string()
    .required("le CIN est obligatoire")
    .min(4, "le CIN doit comporter au moins quatre caractères "),
  cne: Yup.string()
    .required("le CNE est obligatoire")
    .min(4, "le CNE doit comporter au moins quatre caractères "),
  email: Yup.string()
    .email("Enter a valid email")
    .required("l'email est obligatoire"),
  confirmEmail: Yup.string()
    .required("confirmez votre email")
    .oneOf([Yup.ref("email")], "les emails ne correspondent pas"),
  password: Yup.string()
    .min(8, "Le mot de passe doit comporter au moins huit caractères")
    .required("entrez votre mot de passe"),
  confirmPassword: Yup.string()
    .required("confirmez votre mot de passe")
    .oneOf([Yup.ref("password")], "les mots de passe ne correspondent pas"),
});

export const Etape1 = ({
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
        Informations de base - à remplir attentivement avant de soumettre
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
              <Grid item xs={12} sm={6}>
                <Field
                  required
                  id="cin"
                  name="cin"
                  label="CIN (Code d'Identité National)"
                  fullWidth
                  as={TextField}
                  //value={formData.cin}
                  helperText={touched.cin ? errors.cin : ""}
                  error={touched.cin && Boolean(errors.cin)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  required
                  id="cne"
                  name="cne"
                  label="Code Massar OU CNE (Code Nationnal de l'étudiant)"
                  fullWidth
                  as={TextField}
                  autoComplete="lname"
                  //value={formData.cne}
                  helperText={touched.cne ? errors.cne : ""}
                  error={touched.cne && Boolean(errors.cne)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  as={TextField}
                  //value={formData.email}
                  helperText={touched.email ? errors.email : ""}
                  error={touched.email && Boolean(errors.email)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Field
                  id="confimEmail"
                  name="confirmEmail"
                  label="Confirmation de l'emai"
                  fullWidth
                  as={TextField}
                  //value={formData.confimEmail}
                  helperText={touched.confirmEmail ? errors.confirmEmail : ""}
                  error={touched.confirmEmail && Boolean(errors.confirmEmail)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  required
                  id="password"
                  name="password"
                  type="password"
                  label="Mot de passe"
                  fullWidth
                  as={TextField}
                  //value={formData.password}
                  helperText={touched.password ? errors.password : ""}
                  error={touched.password && Boolean(errors.password)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  label="Confirmation du mot de passe"
                  fullWidth
                  as={TextField}
                  //value={formData.confirmPassword}
                  helperText={
                    touched.confirmPassword ? errors.confirmPassword : ""
                  }
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                />
              </Grid>
            </Grid>
            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}>
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
Etape1.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};
