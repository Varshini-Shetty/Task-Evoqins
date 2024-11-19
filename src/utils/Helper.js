//username validation
export const userNameValidation = name => {
  const expression = /^[\w-_\.]+(@([\w-]+\.)+[\w-]{2,4})?$/; 
  return expression.test(name);
  };

//password validation
  export const passwordValidation = password => {
    return password.length >= 4;
  };
//alert message
import {Alert} from 'react-native';
export const showAlert = (title, message) => {
  Alert.alert(title, message);
};