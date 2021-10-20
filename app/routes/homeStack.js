import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import welcome from "../screens/welcomeScreen";
import register from "../screens/registerScreen";
import logining from "../screens/loginScreen";

const screens = {
  welcomeScreen: {
    screen: welcome,
  },
  registerScreen: {
    screen: register,
  },
  loginScreen: {
    screen: logining,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
