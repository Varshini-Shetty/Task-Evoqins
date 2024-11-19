import { StyleSheet } from "react-native";
import fontFamily from "../../constants/fontFamily";
import colors from "../../constants/colors";

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 50,
        paddingBottom: 90,
        backgroundColor: colors.white
    },
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
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
    headingContainer: {
        paddingVertical: 20,
        marginTop: 100
    },
    heading: {
        fontSize: 24,
        fontFamily: fontFamily.bold,
        color: colors.black,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontFamily: fontFamily.medium,
        fontSize: 14,
        color: colors.grey
    },
    btnText: {
        fontFamily: fontFamily.medium,
        fontSize: 16,
        color: colors.black
    },
    inputContainer: {
        paddingVertical: 20,
    },
    input: {
        flex: 1,
        fontFamily: fontFamily.medium,
        color: colors.black
    },
    loginBtn: {
        height: 44,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.blue,
        padding: 10,
        marginBottom: 10
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingTop: 20
    },
    inputWrapper: {
        flex: 1,
        paddingHorizontal: 8,
        borderRadius: 7,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        borderWidth: 0.5,
        fontFamily: fontFamily.medium,
        color: colors.black
    },
    iconImg: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: colors.white,
        borderRadius: 15
    },
    icon: {
        width: 12,
        height: 12,
    },
})