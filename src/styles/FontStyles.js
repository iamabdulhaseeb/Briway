import { StyleSheet } from 'react-native';



// ======================Fonts======================
export const SimpleFont = { fontFamily: 'ubuntu.light' };
export const MediumFont = { fontFamily: 'ubuntu.regular' };
export const BoldFont = { fontFamily: 'ubuntu.bold' };
export const ExtraBoldFont = { fontFamily: 'Lapland-ExtraBold' };


export const OrangeJuice = { fontFamily: 'orange juice 2.0' };


// ======================Text Styles======================
export const SimpleText = StyleSheet.create({
    h1: { ...SimpleFont, fontSize: 32, color: "#ffffff" },
    h2: { ...SimpleFont, fontSize: 24, color: "#ffffff" },
    h3: { ...SimpleFont, fontSize: 18, color: "#ffffff" },
    h4: { ...SimpleFont, fontSize: 12, color: "#ffffff" },
});



export const MediumText = StyleSheet.create({
    h1: { ...MediumFont, fontSize: 32, color: "#ffffff" },
    h2: { ...MediumFont, fontSize: 24, color: "#ffffff" },
    h3: { ...MediumFont, fontSize: 18, color: "#ffffff" },
    h4: { ...MediumFont, fontSize: 12, color: "#ffffff" },
});



export const BoldText = StyleSheet.create({
    h1: { ...BoldFont, fontSize: 32, color: "#ffffff" },
    h2: { ...BoldFont, fontSize: 24, color: "#ffffff" },
    h3: { ...BoldFont, fontSize: 18, color: "#ffffff" },
    h4: { ...BoldFont, fontSize: 12, color: "#ffffff" },
});



export const ExtraBoldText = StyleSheet.create({
    h1: { ...ExtraBoldFont, fontSize: 32, color: "#ffffff" },
    h2: { ...ExtraBoldFont, fontSize: 24, color: "#ffffff" },
    h3: { ...ExtraBoldFont, fontSize: 18, color: "#ffffff" },
    h4: { ...ExtraBoldFont, fontSize: 12, color: "#ffffff" },
});



export const StyleFont = StyleSheet.create({
    h1: { ...OrangeJuice, fontSize: 32, color: "#ffffff" },
    h2: { ...OrangeJuice, fontSize: 24, color: "#ffffff" },
    h3: { ...OrangeJuice, fontSize: 18, color: "#ffffff" },
    h4: { ...OrangeJuice, fontSize: 12, color: "#ffffff" },
});





// Text Shadow
export const TextShadow = {
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 19
 }