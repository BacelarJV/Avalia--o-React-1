import { useActionSheet } from "@expo/react-native-action-sheet";
import { router, useNavigation } from "expo-router";
import { CommonActions, NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Touchable, TouchableOpacity } from "react-native";

export default function AcTionRetu() {
  const { showActionSheetWithOptions } = useActionSheet();
  const navigation = useNavigation();
  const onPress = () => {
    const options = ["Logout", "Cancel"];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;
    const handleLogout = () => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "index" }],
        })
      );
    };
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            handleLogout();
            break;
          default:
            break;
        }
      }
    );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      {/* <ActionFormButton title="Menu" onPress={onPress} /> */}
      <MaterialIcons name="menu" size={24} color="black" />
    </TouchableOpacity>
  );
}