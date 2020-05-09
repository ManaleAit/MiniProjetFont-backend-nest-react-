import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
//regex expression for validation

const validationSchema = Yup.object({
  id_filiere: Yup.string().required('veillez choisir votre  filière '),
  niveau: Yup.string().required('veillez choisir votre niveau'),
  type_Bac: Yup.string().required('veillez choisir votre Type de BAC'),
  annee_Bac: Yup.string().required("veillez choisir l'année d'obtention"),
  mention: Yup.string().required('la mention est requise'),
  
  lycee: Yup.string()
    .required('la lycée est requise')
    .min(4, 'veillez entrer une lycée valide'),
  delegue: Yup.string()
    .required('la délégation est requise')
    .min(4, 'veillez entrer une délégation valide '),
  academie: Yup.string()
    .required("l'Académie est requies")
    .min(4, 'veillez entrer une académie valide '),
  diplomePrecedent: Yup.string().notRequired(
    'veillez choisir votre dernier diplôme',
  ),
  etablissement: Yup.string()
    .notRequired("l'établissement est requise")
    .min(4, 'veillez entrer une établissement valide '),
  ville: Yup.string()
    .notRequired('la ville est requise')
    .min(4, 'veillez entrer une ville valide '),
});
const annee_Bac = [
  {
    value: '2012',
    label: '2012',
  },
  {
    value: '2013',
    label: '2013',
  },
  {
    value: '2014',
    label: '2014',
  },
  {
    value: '2015',
    label: '2015',
  },
  {
    value: '2016',
    label: '2016',
  },
  {
    value: '2017',
    label: '2017',
  },
  {
    value: '2018',
    label: '2018',
  },
  {
    value: '2019',
    label: '2019',
  },
  {
    value: '2020',
    label: '2020',
  },
  {
    value: '2021',
    label: '2021',
  },
  {
    value: '2022',
    label: '2022',
  },
  {
    value: '2023',
    label: '2023',
  },
];
const FiliereDispo = [
  {
    value: '0',
    label: "Sciences et Technologies pour l'Ingénieur - STI",
  },
  {
    value: '1',
    label: 'Génie Informatique - GINF',
  },
  {
    value: '2',
    label: 'Génie Industriel - GIND',
  },
  {
    value: '3',
    label: 'Génie Telecom et Réseaux - GTR',
  },
  {
    value: '4',
    label: 'Génie des Procédés et Matériaux Céramiques - GPMC',
  },
];
const niveauDispo = [
  {
    value: '1CP',
    label: 'Première année',
  },
  {
    value: '2CP',
    label: 'Deuxième année',
  },
  {
    value: '1CI',
    label: 'Troisième année',
  },
  {
    value: '2CI',
    label: 'Quatrième année',
  },
  {
    value: '3CI',
    label: 'Cinquième année',
  },
];
const typeBac = [
  {
    value: 'SMA',
    label: "Sciences maths 'A'",
  },
  {
    value: 'SMB',
    label: "Sciences maths 'B'",
  },
  {
    value: 'SPC',
    label: 'Sciences physique chimie',
  },
  {
    value: 'SVT',
    label: 'Sciences de la vie et de terre',
  },
  {
    value: 'STE',
    label: 'Sciences et technologies électriques',
  },
  {
    value: 'STM',
    label: 'Sciences et technologies mécaniques',
  },
];
const mentionBac = [
  {
    value: 'Tres bien',
    label: 'Très bien',
  },
  {
    value: 'Bien',
    label: 'Bien',
  },
  {
    value: 'Assez bien',
    label: 'Assez bien',
  },
];

const deplomedispo = [
  {
    value: 'CNC',
    label: 'Concours National Commun (CNC)',
  },
  {
    value: 'DEUG',
    label: 'Diplôme universitaire de technologie (DUT)',
  },
  {
    value: 'Assez bien',
    label: "Diplôme d'études universitaires générales (DEUG)",
  },
  {
    value: 'DEUST',
    label:
      "Diplôme d'études universitaires scientifiques et techniques (DEUST)",
  },
  {
    value: 'Licence',
    label: 'Licence (BAC+3)',
  },
  {
    value: 'Master',
    label: 'Master (BAC+5)',
  },
  {
    value: 'CP',
    label: 'Cycle préparatoire intégré',
  },
];

export const Etape4 = ({
  formData,
  setFormData,
  classes,
  handleBack,
  handleNext,
  activeStep,
  steps,
}) => {
  const checkboxHandler = () => {
    setFormData({ externe: !formData.externe });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informations personnelles
      </Typography>
      <Formik
        initialValues={formData}
        onSubmit={values => {
          setFormData(values);
          alert(JSON.stringify(values, null, 2));
          console.log(values);
          handleNext();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Field
                  select
                  required
                  id="id_filiere"
                  name="id_filiere"
                  label="Filière"
                  //  value={values.NomFrancais}
                  as={TextField}
                  helperText="Remarque: 
                  Les étudiants du cycle préparatoire ( 1ère et 2ème année ) doivent choisir la filière : Sciences et Technologies pour l'Ingénieur STI."
                  helperText={touched.id_filiere ? errors.id_filiere : ''}
                  error={touched.id_filiere && Boolean(errors.id_filiere)}
                  fullWidth
                >
                  <ListSubheader>Cycle préparatoire (CP)</ListSubheader>
                  <MenuItem
                    key={FiliereDispo[0].value}
                    value={FiliereDispo[0].value}
                  >
                    {FiliereDispo[0].label}
                  </MenuItem>
                  <ListSubheader>Cycle d'ingénieur (CI)</ListSubheader>
                  {FiliereDispo.slice(1).map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  select
                  required
                  id="niveau"
                  name="niveau"
                  label="niveau"
                  //  value={values.prenomFrancais}
                  as={TextField}
                  helperText={touched.niveau ? errors.niveau : ''}
                  error={touched.niveau && Boolean(errors.niveau)}
                  fullWidth
                >
                  <ListSubheader>Cycle préparatoire (CP)</ListSubheader>
                  <MenuItem
                    key={niveauDispo[0].value}
                    value={niveauDispo[0].value}
                  >
                    {niveauDispo[0].label}
                  </MenuItem>
                  <MenuItem
                    key={niveauDispo[1].value}
                    value={niveauDispo[1].value}
                  >
                    {niveauDispo[1].label}
                  </MenuItem>
                  <ListSubheader>Cycle d'ingénieur (CI)</ListSubheader>
                  {niveauDispo.slice(1).map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  select
                  required
                  id="type_Bac"
                  name="type_Bac"
                  label="Type de BAC"
                  //  value={values.typeBac}
                  as={TextField}
                  helperText={touched.type_Bac ? errors.type_Bacc : ''}
                  error={touched.type_Bac && Boolean(errors.type_Bac)}
                  fullWidth
                >
                  {typeBac.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  select
                  required
                  id="annee_Bac"
                  name="annee_Bac"
                  label="Année d'obtention"
                  //  value={values.annee_Bac}
                  as={TextField}
                  helperText={touched.annee_Bac ? errors.annee_Bac : ''}
                  error={touched.annee_Bac && Boolean(errors.annee_Bac)}
                  fullWidth
                >
                  {annee_Bac.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  id="lycee"
                  name="lycee"
                  label="Lycée"
                  helperText=""
                  //  value={values.lycee}
                  as={TextField}
                  helperText={touched.lycee ? errors.lycee : ''}
                  error={touched.lycee && Boolean(errors.lycee)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  select
                  required
                  id="mention"
                  name="mention"
                  label="Mention"
                  //  value={values.mention}
                  as={TextField}
                  helperText={touched.mention ? errors.mention : ''}
                  error={touched.mention && Boolean(errors.mention)}
                  fullWidth
                >
                  {mentionBac.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>

              <Grid item xs={12} md={6}>
                <Field
                  id="delegue"
                  name="delegue"
                  label="Délégation(النيابة)"
                  as={TextField}
                  helperText={touched.delegue ? errors.delegue : ''}
                  error={touched.delegue && Boolean(errors.delegue)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  required
                  id="academie"
                  name="academie"
                  label="Académie"
                  helperText=""
                  //  value={values.academie}
                  as={TextField}
                  helperText={touched.academie ? errors.academie : ''}
                  error={touched.academie && Boolean(errors.academie)}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Field
                  name="externe"
                  id="externe"
                  control={<Checkbox color="secondary" name="externe" />}
                  label="si vous etes externe, cochez cette case"
                  as={FormControlLabel}
                  onClick={checkboxHandler}
                />
              </Grid>
              {formData.externe === true ? (
                <React.Fragment>
                  <Grid item xs={12} md={4}>
                    <Field
                      select
                      id="diplomePrecedent"
                      name="diplomePrecedent"
                      label="Diplôme précédent"
                      helperText=""
                      //  value={values.diplomePrecedent}
                      as={TextField}
                      helperText={
                        touched.diplomePrecedent ? errors.diplomePrecedent : ''
                      }
                      error={
                        touched.diplomePrecedent &&
                        Boolean(errors.diplomePrecedent)
                      }
                      fullWidth
                    >
                      {deplomedispo.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Field
                      id="etablissement"
                      name="etablissement"
                      label="Etablissement"
                      helperText=""
                      //  value={values.etablissement}
                      as={TextField}
                      helperText={
                        touched.etablissement ? errors.etablissement : ''
                      }
                      error={
                        touched.etablissement && Boolean(errors.etablissement)
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Field
                      id="ville"
                      name="ville"
                      label="Ville"
                      helperText=""
                      //  value={values.ville}
                      as={TextField}
                      helperText={touched.ville ? errors.ville : ''}
                      error={touched.ville && Boolean(errors.ville)}
                      fullWidth
                    />
                  </Grid>
                </React.Fragment>
              ) : null}
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
                {activeStep === steps.length - 1
                  ? 'verifier et confirmer'
                  : 'Suivant'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};
Etape4.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};
