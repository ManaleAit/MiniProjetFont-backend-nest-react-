import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import PropTypes from "prop-types";
import { blue } from "@material-ui/core/colors";
import { date } from "yup";
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    "@media max-width: 400": {
      flexDirection: "column",
    },
  },
  rightColumn: {
    flexDirection: "column",
    fontSize: 12,
    // marginLeft: 200,
    // marginBottom: 400,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: 12,
  },
  leftColumn: {
    flexDirection: "column",
    fontSize: 12,
    // marginTop: 8,
    // width: 170,
    // paddingTop: 30,
    // paddingRight: 15,
    "@media max-width: 400": {
      width: "100%",
      paddingRight: 0,
    },
    "@media orientation: landscape": {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 25,
    paddingTop: 10,
    borderWidth: 3,
    borderColor: "gray",
    borderStyle: "dashed",
    "@media orientation: landscape": {
      marginTop: 10,
    },
  },
  header: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 25,
  },
});

function Output({ formData }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Image style={{ width: 50, height: 50 }} src="/univ.png" />
          <Image style={{ width: 50, height: 50 }} src="/ensa.png" />
        </View>
        <View style={styles.header}>
          <Text>Fiche de renseignements en ligne</Text>
          <Text>De l'étudiant en {formData.niveau} cycle d'ingénieur</Text>
        </View>
        <View style={[styles.container, { marginTop: 30 }]}>
      
          <Text>massar: {formData.massar}</Text>
          <Text>CIN : {formData.cin}</Text>
        </View>
        <Text
          style={{
            backgroundColor: "blue",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Informations personnelles
        </Text>

        <View style={[styles.container, { marginTop: 30 }]}>
          <View style={styles.leftColumn}>
            <Text>
              <Text style={{ color: "blue" }}>Nom :</Text>{" "}
              {formData.lastname_fr}
            </Text>

            <Text>
              <Text style={{ color: "blue" }}>Date de naissance :</Text>{" "}
              {formData.dateNaissance}
            </Text>
            <Text>
              <Text style={{ color: "blue" }}>Adresse :</Text>{" "}
              {formData.address}
            </Text>
            <Text>
              <Text style={{ color: "blue" }}>GSM :</Text> {formData.telephone}
            </Text>
            <Text>
              <Text style={{ color: "blue" }}>Email :</Text> {formData.email}
            </Text>
            <Text>
              <Text style={{ color: "blue" }}>Père :</Text> {formData.nom_Prenom_Pere}
            </Text>
            <Text>
              <Text style={{ color: "blue" }}>Profession :</Text>{" "}
              {formData.profession_Pere}
            </Text>
            <Text>
              <Text style={{ color: "blue" }}>Mère :</Text> {formData.nom_Prenom_mere}
            </Text>
            <Text>
              <Text style={{ color: "blue" }}>Profession :</Text>{" "}
              {formData.profession_mere}
            </Text>
            <Text>
              <Text style={{ color: "blue" }}>Adresse :</Text>{" "}
              {formData.adresse_parent}
            </Text>
          </View>
          <View style={styles.rightColumn}>
            <Text>
              <Text style={{ color: "blue" }}>prenomFrancais : </Text>
              {formData.lastname_fr}
            </Text>
            <Text>
              <Text style={{ color: "blue" }}>Nationalité :</Text>{" "}
              {formData.nationalite}
            </Text>
          </View>
          <View>
            <Text>Photo d'identité:</Text>
            <Image  src={require(`@../../../uploads/${formData.photo}`)}   style={{width:80,height:80}}/>
            <Text>
              <Text style={{ color: "blue" }}>telephone : </Text>
              {formData.teleParent}
            </Text>
          </View>
        </View>
        <Text
          style={{
            backgroundColor: "blue",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Cursus scolaire / universitaire
        </Text>
        <View style={[styles.container, { marginTop: 30 }]}>
          <View style={styles.leftColumn}>
            <Text>
              <Text style={{ color: "blue" }}>Type de BAC :</Text>{" "}
              {formData.type_Bac}
            </Text>
            <Text>
              <Text style={{ color: "blue" }}>Lycée d'origine :</Text>{" "}
              {formData.lycee}
            </Text>
          </View>
          <View style={styles.rightColumn}>
            <Text>
              <Text style={{ color: "blue" }}>Mention :</Text>{" "}
              {formData.mention}
            </Text>
            <Text>
              <Text style={{ color: "blue" }}>Délégation :</Text>{" "}
              {formData.delegue}
            </Text>
          </View>
          <View>
            <Text>
              <Text style={{ color: "blue" }}>Année :</Text>{" "}
              {formData.annee_Bac}
            </Text>
            <Text>
              <Text style={{ color: "blue" }}>Académie :</Text>{" "}
              {formData.academie}
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: 50, marginTop: 50 }}>
          <Text style={{ fontSize: 12 }}>
            Je soussigné, certifie sur l'honneur l'exactitude de ces
            renseignements
          </Text>
          <Text style={{ fontSize: 12, marginTop: 50 }}>
            Signature de l'étudiant{" "}
          </Text>
          <Text style={{ fontSize: 12, marginTop: 50 }}>
            {" "}
            Reçu téléchargé le : {new Date().getDate}
          </Text>
        </View>
      </Page>
    </Document>
  );
}
export default Output;
Output.propTypes = {
  formData: PropTypes.object.isRequired,
};
