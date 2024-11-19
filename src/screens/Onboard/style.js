import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fontFamily from "../../constants/fontFamily";

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 50,
        backgroundColor: colors.white
    },
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    halfCircle: {
        position: 'absolute',
        top: 0,
        left: -20,
        width: 40,
        height: 40,
        backgroundColor: '#000',
        borderRadius: 100
    },
    banner1: {
        top: '30%',
        zIndex: -1,
        position: 'absolute',
        width: '120%',
        height: 80,
        backgroundColor: colors.blue,
        transform: [{ rotate: '-15deg' }],
    },
    banner2: {
        position: 'absolute',
        width: '120%',
        height: 80,
        backgroundColor: colors.yellow,
        transform: [{ rotate: '-15deg' }],
        overflow: 'hidden',
        bottom: '10%',
        zIndex: 1
    },
    image: {
        height: '100%',
        width: '100%',
        objectFit: 'contain',
        marginBottom: 35
    },
    textContainer: {
        paddingVertical: 15
    },
    text1: {
        fontSize: 16,
        fontFamily: fontFamily.medium,
        alignSelf: 'flex-start',
        color: colors.grey,
        paddingVertical: 10
    },
    text2: {
        fontSize: 25,
        fontFamily: fontFamily.bold,
        alignSelf: 'flex-start',
        color: colors.black,
        paddingRight: 50,
        paddingBottom: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,

    },
    btnText: {
        fontSize: 14,
        fontFamily: fontFamily.semiBold,
        color: colors.grey
    },
    nextBtn: {
        backgroundColor: colors.blue,
        borderRadius: 10,
        paddingHorizontal: 25,
    }


})