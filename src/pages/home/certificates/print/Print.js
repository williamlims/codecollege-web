import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import base from './base.jpg';
import { useLocation } from "react-router-dom";
import api from "../../../../services/api";

function Print(){
    const location = useLocation();
    const urlpath = location.pathname;
    const dataGet = urlpath.split("/");
    const idCourse = dataGet[4];
    const idUser = dataGet[5];
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [course, setCourse] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        api.get(`/v1/user/certificates/user/${idUser}/${idCourse}`).then(res => {
            setName(res.data[0].firstName);
            setLastname(res.data[0].lastName);
            setCourse(res.data[0].nameCourse);
            setDate(res.data[0].conclusionDate);
        }).catch(error => {
            alert(error);
        });
    }, [idUser, idCourse]);

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

    const Printe = (name, lastname, course, date) => (
        <PDFViewer width={window.innerWidth} height={window.innerHeight-20}>
            <Document pageLayout='singlePage'>
                <Page wrap={false} size="A4" orientation='landscape' style={styles.page}>
                    <View>
                        <Image src={base}></Image>
                    </View>
                    
                    <Text style={{top:"220px", ...styles.text }}>Certificamos que, para os devidos fins, o aluno</Text>
                    <Text style={{top:"260px", ...styles.text }}>{name?.toUpperCase()} {lastname?.toUpperCase()}</Text>
                    <Text style={{top:"300px", ...styles.text }}>concluiu o curso "{course}"</Text>
                    <Text style={{top:"340px", ...styles.text }}>em {date?.slice(0, 10)}.</Text>
                    
                </Page>
            </Document>
        </PDFViewer>
    );
    return Printe(name, lastname, course, date);
}




export default Print;
