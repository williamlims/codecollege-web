import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      margin: 20,
      padding: 20,
      flexGrow: 1
    }
});

const Print = () => (
    <PDFViewer width={window.innerWidth} height={window.innerHeight-20}>
        <Document pageLayout='singlePage'>
            <Page wrap={true} size="A4" orientation='landscape' style={styles.page}>
                <View>
                    <Text>Olá {'props.name'}</Text>
                    <Text>Olá {'props.name'}</Text>
                    <Text>Olá {'props.name'}</Text>
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default Print;
