import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer'
import { useContext } from 'react';
import { AppContext } from '../main';
import image from '../img/poster-placeholder.jpg'

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        color: "#333333"
    },
    section: {
        margin: 10,
        padding: 10
    },
    viewer: {
        width: window.innerWidth,
        height: "100vh"
    },
    image: {
        width: "100px",
        height: "200px",
        objectFit: "cover",
        margin: "0 auto"
    }
});

export default function PDFDocument() {

    const { state, dispatch } = useContext(AppContext);

    return (
        <PDFViewer style={styles.viewer} >
            <Document>
                <Page size="A4" style={styles.page} >
                    <View style={styles.section} >
                        <Image
                            style={styles.image}
                            src={image}
                        />
                        <Text>Title: {state.title}</Text>
                        <Text>Genre: {state.genre}</Text>
                    </View>
                    <View style={styles.section} >
                        <Text>Theme: {state.theme}</Text>
                        <Text>Truth: {state.truth}</Text>
                        <Text>Contrapositive: {state.contrapositive}</Text>
                        <Text>Lie: {state.lie}</Text>
                    </View>
                    <View style={styles.section} >
                        <Text>Flaw: {`${state.wound.toLowerCase()} because of ${state.ghost}.`}</Text>
                        <Text>Need: {state.need}</Text>
                        <Text>Character Logline: {!state.ch_logline ? `After ${state.contrapositive}, a character who has ${state.wound.toLowerCase()} because of ${state.ghost} has to experience ${state.wound.toLowerCase()} because of ${state.ghost} to understand that ${state.truth}.` : state.ch_logline}</Text>
                    </View>
                    <View style={styles.section} >
                        <Text>Want: {`To ${state.goal} and achieve ${state.desire}`}</Text>
                        <Text>Antagonism: {state.antagonism}</Text>
                        <Text>Plan: {state.plan.join(", ")}</Text>
                        <Text>Opposition: {`antagonist: ${state.antagonist} | allies: ${state.allies} | gatekeepers: ${state.gatekeepers}`}</Text>
                    </View>
                    <View style={styles.section} >
                        <Text>First defeat: {state.defeat}</Text>
                        <Text>Half truth: {state.half_truth}</Text>
                        <Text>Battle: {state.battle}</Text>
                        <Text>Death / Resurrection: {state.resurrection}</Text>
                    </View>
                    <View style={styles.section} >
                        {
                            parseInt(state.climax) === 0 ?
                                <Text>Self-Revelation: {`The protagonist understands that ${state.psychological} and that triggers them to ${state.moral}.`}</Text>
                                :
                                <Text>Fall-into-Lie: {`The protagonist fails to overcome ${state.psychological} and that triggers them to ${state.moral}.`}</Text>
                        }
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}
