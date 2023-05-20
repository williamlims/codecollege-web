import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import base from './base.jpg';

const nameUser = "Marcos Borges";
const courseName = "Computação";
const date = "19/05/2023";

const styles = StyleSheet.create({
    page: {
      margin: 0,
      padding: 0,
      width:'100%', 
      height:'100%',
    },
    text: {
        position: "absolute",
        left: '0px',
        right: '0px',
        marginHorizontal: 'auto',
        textAlign: "center",
        justifyContent: 'center',
        color: '#313234',
        fontSize: 25
    }
});

const Print = () => (
    <PDFViewer width={window.innerWidth} height={window.innerHeight-20}>
        <Document pageLayout='singlePage'>
            <Page wrap={false} size="A4" orientation='landscape' style={styles.page}>
                <View>
                    <Image src={base}></Image>
                </View>
                
                <Text style={{top:"220px", ...styles.text }}>Certificamos que, para os devidos fins, o aluno</Text>
                <Text style={{top:"260px", ...styles.text }}>{nameUser.toUpperCase()}</Text>
                <Text style={{top:"300px", ...styles.text }}>concluiu o curso "{courseName}"</Text>
                <Text style={{top:"340px", ...styles.text }}>em {date}.</Text>
                
            </Page>
        </Document>
    </PDFViewer>
);

export default Print;
