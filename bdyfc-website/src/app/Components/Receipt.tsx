/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  receiptTitle: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
  section: {
    marginBottom: 10,
    fontSize: 12,
  },
  bold: {
    fontWeight: "bold",
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  signatures: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  signatureBlock: {
    alignItems: "center",
    zIndex: 1,
  },
  signatureImage: {
    width: 250,
    height: 100,
    objectFit: "contain",
  },
  signatureName: {
    marginTop: 5,
    fontSize: 12,
  },
});

interface ReceiptProps {
  billNumber: string;
  churchName: string;
  billingDate: string;
  amount: string;
  paymentMethod: string;
  transactionId: string;
  date: string;
}

const Receipt: React.FC<ReceiptProps> = ({
  billNumber,
  churchName,
  billingDate,
  amount,
  paymentMethod,
  transactionId,
  date,
}) => (
  <Document>
    <Page size="A5" style={styles.page}>
      <Text style={styles.header}>
        BOMBAY DIOCESAN YOUTH FELLOWSHIP COUNCIL
      </Text>
      <View style={styles.line}>
        <Text style={styles.bold}>Bill Number: {billNumber}</Text>
        <Text style={styles.bold}>Date: {date}</Text>
      </View>
      <Text style={styles.receiptTitle}>RECEIPT</Text>
      <View style={styles.section}>
        <Text style={styles.bold}>Received with thanks from:</Text>
        <Text>{churchName}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.bold}>Towards:</Text>
        <Text>Bombay Diocesan Youth Fellowship Council</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.bold}>The sum of rupees:</Text>
        <Text>{amount}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.bold}>Payment Method:</Text>
        <Text>{paymentMethod}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.bold}>Transaction ID:</Text>
        <Text>{transactionId}</Text>
      </View>
      <View style={styles.signatures}>
        <View style={styles.signatureBlock}>
          <Image style={styles.signatureImage} src="Signature.jpg" />
          <Text style={styles.signatureName}>Daniel Jebadurai</Text>
          <Text>President</Text>
        </View>
        <View style={styles.signatureBlock}>
          <Image style={styles.signatureImage} src="Signature.jpg" />
          <Text style={styles.signatureName}>Jerom Jebamani</Text>
          <Text>Vice-President</Text>
        </View>
        <View style={styles.signatureBlock}>
          <Image style={styles.signatureImage} src="Signature.jpg" />
          <Text style={styles.signatureName}>Alice Joel Ramanadhula</Text>
          <Text>Secretary</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Receipt;
