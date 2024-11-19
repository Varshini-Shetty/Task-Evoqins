import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import style from './style'
import colors from '../../constants/colors'
import navigationStrings from '../../navigation/navigationStrings'

const OnBoard = ({ navigation }) => {
    return (
        <SafeAreaView style={style.mainContainer}>
            <View style={style.container}>
                <View style={style.subContainer}>
                    <View style={style.halfCircle} />
                    <View style={style.banner1} />
                    <Image source={require('../../assets/images/penguin.png')} style={style.image} />
                    <View style={style.banner2} />
                </View>
                <View style={style.textContainer}>
                    <Text style={style.text1}>Get Started</Text>
                    <Text style={style.text2}>Millions of people use to turn their ideas into reality.</Text>
                </View>
                <View style={style.btnContainer}>
                    <TouchableOpacity style={style.txtBtn}>
                        <Text style={style.btnText}>Skip Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...style.txtBtn, ...style.nextBtn }} onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
                        <Text style={{ ...style.btnText, color: colors.black }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OnBoard
