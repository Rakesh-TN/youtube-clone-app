import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./Navigation/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
  );
}
