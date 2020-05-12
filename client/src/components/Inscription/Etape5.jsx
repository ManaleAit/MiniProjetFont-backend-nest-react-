import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field, setFieldValue } from 'formik';
import * as Yup from 'yup';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Alert from '@material-ui/lab/Alert';

const validationSchema = Yup.object({});

export class Etape5 extends Component {
  state = {
    selectedFile: null,
    imagePreviewUrl: null,
  };

  fileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
    });
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result,
      });
    };
    this.props.formData.photo = event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);
  };
  render() {
    let $imagePreview = (
      <div className="previewText image-container">
        votre image va apparaître ici,
      </div>
    );
    if (this.state.imagePreviewUrl) {
      $imagePreview = (
        <div className="image-container">
          <img src={this.state.imagePreviewUrl} alt="icon" width="200" />{' '}
        </div>
      );
    }
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Photo d'identité
        </Typography>
        <Formik
          initialValues={this.props.formData}
          onSubmit={values => {
            this.props.setFormData(values);
            // let valueCopie = [...values];
            // valueCopie.photo = this.state.selectedFile;
            // this.props.setFormData(valueCopie);

            this.props.handleNext();
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <Alert severity="warning" color="warning" align="center">
                    <div style={{ marginLeft: 16 + 'em', color: 'red' }}>
                      {' '}
                      Attention: Votre photo doit respecter les contraintes
                      suivantes:
                      <li>
                        {' '}
                        La taille maximale de la photo est 2 Mo (2048 Ko)
                      </li>
                      <li>
                        {' '}
                        Votre visage doit être bien claire, et sans effets sur
                        la photo{' '}
                      </li>
                      <li> Les extensions autorisés sont: JPG, JPEG et PNG.</li>
                    </div>
                  </Alert>
                </Grid>
                <Grid item xs={12} sm={12}>
                  Choisissez une photo de vous:
                </Grid>
                <Grid item xs={12} sm={12}>
                  <input
                    accept="image/*"
                    // className={classes.input}
                    id="photo"
                    type="file"
                    name="photo"
                    onChange={this.fileChangedHandler}
                  />
                  <label htmlFor="photo" name="photo">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </Grid>
                {/* {!(imagePreviewUrl === "" && selectedFile === "") ? ( */}
                <Grid item xs={12} sm={12}>
                  {/* <div>
                  <img src={photo} alt="icon" ref={image} />
                </div> */}
                  {/* <Myimage imagePreviewUrl={imagePreviewUrl} /> */}
                  <div> {$imagePreview}</div>
                </Grid>
                {/* ) : null} */}
              </Grid>
              <div className={this.props.classes.buttons}>
                {this.props.activeStep !== 0 && (
                  <Button
                    onClick={this.props.handleBack}
                    className={this.props.classes.button}
                  >
                    Précédent
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={this.props.classes.button}
                >
                  {this.props.activeStep === this.props.steps.length - 1
                    ? 'je confirme mes données'
                    : 'Suivant'}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </React.Fragment>
    );
  }
}

Etape5.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};
