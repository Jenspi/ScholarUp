import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    SignIn: SignIn,
    SignUp: SignUp,
  },
  {
    initialRouteName: "SignIn",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
