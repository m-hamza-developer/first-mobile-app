import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BottomTab({
    icon,
    title,
    active,
    onPress
}) {

return (
<TouchableOpacity
onPress={onPress}
style={{
alignItems:"center",
gap:5
}}
>

<Ionicons
name={icon}
size={26}
color={active ? "#56C5C5" : "#999"}
/>


<Text
style={{
fontSize:12,
color:active ? "#56C5C5" : "#999"
}}
>
{title}
</Text>


</TouchableOpacity>
)

}