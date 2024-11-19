import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fontFamily from "../../constants/fontFamily";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        paddingBottom: 30,
        backgroundColor: colors.white
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    txt: {
        fontFamily: fontFamily.medium,
        fontSize: 16,
        color: colors.black
    },
    dots: {
        height: 30,
        width: 30
    },
    subContainer: {
        flex: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingBottom: 10
    },
    banner1: {
        top: '30%',
        zIndex: -1,
        position: 'absolute',
        width: '120%',
        height: 120,
        backgroundColor: colors.blue,
        transform: [{ rotate: '-15deg' }],
    },
    profileImgContainer: {
        marginTop: '40%',
    },
    profileImageWrapper: {
        position: 'relative',
        width: 150,
        height: 150,
    },
    camera: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: colors.yellow,
        padding: 6,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cameraIcon: {
        width: 15,
        height: 15,
    },
    profileImage: {
        width: '100%',
        height: '95%',
        borderRadius: 40,
        objectFit: 'contain'
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontFamily: fontFamily.medium,
        fontSize: 14,
        color: colors.grey
    },
    numberTxt: {
        fontFamily: fontFamily.bold,
        fontSize: 18,
        color: colors.black
    },
    profileContainer: {
        justifyContent: 'center',
    },
    heading: {
        fontFamily: fontFamily.semiBold,
        fontSize: 18,
        color: colors.black,
        marginBottom: 20
    },
    card: {
        backgroundColor: colors.yellow,
        padding: 20,
        width: '43%',
        borderRadius: 15,
    },
    imgContainer: {
        backgroundColor: colors.white,
        alignSelf: 'flex-start',
        padding: 6,
        borderRadius: 12,
    },
    img: {
        height: 30,
        width: 30
    },
    arrow: {
        height: 13,
        width: 15
    },
    text: {
        fontFamily: fontFamily.regular,
        fontSize: 13,
        color: colors.black,
        paddingVertical: 5,
    },
    text2: {
        fontFamily: fontFamily.semiBold,
        fontSize: 15,
        color: colors.black,
    },
    line: {
        width: 40,
        borderWidth: 1,
        marginTop: 3,
        borderRadius: 10
    }
})