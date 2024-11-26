import { useActionSheet } from "@expo/react-native-action-sheet";
import { router, useNavigation } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function AcTion() {
  const { showActionSheetWithOptions } = useActionSheet();
  const navigation = useNavigation();
  const onPress = () => {
    const options = ["About", "Logout", "Cancel"];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;
    

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            router.push("./about");

            break;
          case 1:
            router.back();
            break;
          default:
            break;
        }
      }
    );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons name="menu" size={24} color="black" />
    </TouchableOpacity>
  );
}