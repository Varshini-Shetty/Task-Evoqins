import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import style from './style'
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
import { AuthContext } from '../../context/AuthContext';
import { passwordValidation, showAlert, userNameValidation } from '../../utils/Helper';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);
  const { login } = useContext(AuthContext)
  const handleLogin = () => {
    if (name && password && userNameValidation(name) && passwordValidation(password)) {
      login(name, password)
    } else {
      showAlert('Warning!', 'Please enter valid credentials!')
    }
  }
  return (
    <ScrollView style={style.mainContainer}>
      <SafeAreaView style={style.container}>
        <View style={style.subContainer}>
          <View style={style.halfCircle} />
          <View style={style.headingContainer}>
            <Text style={style.heading}>Hey,</Text>
            <Text style={style.heading}>Login Now.</Text>
          </View>
          <View style={{ ...style.rowContainer, paddingBottom: 20 }}>
            <Text style={style.text}>If you are new  /   </Text>
            <TouchableOpacity>
              <Text style={style.btnText}>Create New</Text>
            </TouchableOpacity>
          </View>
          <View style={style.inputContainer}>
            <View style={[
              style.inputWrapper,
              focusedInput === 'name' ? { backgroundColor: colors.yellow } : { backgroundColor: colors.white }
            ]}>
              <TextInput
                placeholder='Username'
                placeholderTextColor={colors.grey}
                value={name}
                cursorColor={colors.black}
                onChangeText={(val) => setName(val)}
                onFocus={() => setFocusedInput('name')}
                onBlur={() => setFocusedInput(null)}
                style={style.input} />
              {userNameValidation(name) && (
                <View style={style.iconImg}>
                  <Image
                    source={require('../../assets/images/thunder.png')}
                    style={style.icon}
                  />
                </View>
              )}
            </View>
            <TextInput
              placeholder='Password'
              placeholderTextColor={colors.grey}
              value={password}
              secureTextEntry={true}
              cursorColor={colors.black}
              onChangeText={(val) => setPassword(val)}
              onFocus={() => setFocusedInput('password')}
              onBlur={() => setFocusedInput(null)}
              style={[
                style.inputWrapper,
                focusedInput === 'password' ? { backgroundColor: colors.yellow } : { backgroundColor: colors.white }
              ]} />
          </View>
          <View style={{ ...style.rowContainer, paddingBottom: 60 }}>
            <Text style={style.text}>Forgot Passcode?  /   </Text>
            <TouchableOpacity>
              <Text style={style.btnText}>Reset</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={style.loginBtn} onPress={handleLogin}>
            <Text style={{ ...style.btnText, fontFamily: fontFamily.semiBold }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btn}>
            <Text style={style.text}>Skip Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

    </ScrollView>
  )
}

export default Login
