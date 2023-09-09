// src/MyPdf.js
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

const MyPdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.text}>Hello, this is a sample PDF document.</Text>
        <Text style={styles.text}>
          You can customize this content as needed.
        </Text>
      </View>
    </Page>
  </Document>
);

export default MyPdf;
