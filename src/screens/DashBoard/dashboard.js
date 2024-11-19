import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import style from './style'
import { AuthContext } from '../../context/AuthContext'

const DashBoard = () => {
  const { logout } = useContext(AuthContext)
  return (
    <SafeAreaView style={style.container}>
      <View style={{ ...style.rowContainer, paddingHorizontal: 15 }}>
        <TouchableOpacity onPress={() => logout()}>
          <Text style={style.txt}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/images/dots.png')} style={style.dots} />
        </TouchableOpacity>
      </View>
      <View style={style.subContainer}>
        <View style={style.banner1} />
        <View style={style.profileImgContainer}>
          <View style={style.profileImageWrapper}>
            <Image
              source={require('../../assets/images/profileImg.jpg')}
              style={style.profileImage}
            />
            <TouchableOpacity style={style.camera}>
              <Image
                source={require('../../assets/images/camera.png')}
                style={style.cameraIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ ...style.rowContainer, paddingBottom: 30 }}>
        <View style={style.textContainer}>
          <Text style={style.titleText}>Applied</Text>
          <Text style={style.numberTxt}>28</Text>
        </View>
        <View style={style.textContainer}>
          <Text style={style.titleText}>Reviewed</Text>
          <Text style={style.numberTxt}>73</Text>
        </View>
        <View style={style.textContainer}>
          <Text style={style.titleText}>Contacted</Text>
          <Text style={style.numberTxt}>18</Text>
        </View>
      </View>
      <View style={style.profileContainer}>
        <Text style={style.heading}>Complete profile</Text>
        <View style={{ ...style.rowContainer, marginHorizontal: 10 }}>
          <View style={style.card}>
            <View style={style.imgContainer}>
              <Image source={require('../../assets/images/graduate.png')} style={style.img} />
            </View>
            <Text style={style.text}>Education</Text>
            <Text style={style.text2}>02 Steps</Text>
            <View style={style.rowContainer}>
              <Text style={style.text2}>Left</Text>
              <TouchableOpacity>
                <Image source={require('../../assets/images/arrow.png')} style={style.arrow} />
              </TouchableOpacity>
            </View>
            <View style={style.line} />
          </View>
          <View style={style.card}>
            <View style={style.imgContainer}>
              <Image source={require('../../assets/images/bag.png')} style={style.img} />
            </View>
            <Text style={style.text}>Professional</Text>
            <Text style={style.text2}>04 Steps</Text>
            <View style={style.rowContainer}>
              <Text style={style.text2}>Left</Text>
              <TouchableOpacity>
                <Image source={require('../../assets/images/arrow.png')} style={style.arrow} />
              </TouchableOpacity>
            </View>
            <View style={style.line} />
          </View>
        </View>
      </View>
      <TouchableOpacity style={{ ...style.textContainer, paddingTop: 10 }}>
        <Text style={{ ...style.text, textDecorationLine: 'underline', paddingBottom: 10 }}>Buy Pro $ 23.49</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DashBoard
