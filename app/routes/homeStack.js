import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import welcome from "../screens/welcomeScreen";
import register from "../screens/registerScreen";

const screens = {
  welcomeScreen: {
    screen: welcome,
  },
  registerScreen: {
    screen: register,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
