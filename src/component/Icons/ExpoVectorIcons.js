import { Feather } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const color = "#0093DD"
export const GameIcon = (props) => (
    <Ionicons name="game-controller-outline" size={24} color={color} />
);
export const CalendarIcon = (props) => (
    <Feather name="calendar" size={24} color={color} />
);
export const PersonIcon = (props) => (
    <Ionicons name="person-outline" size={24} color={color} />
);
export const HomeIcon = (props) => (
    <Feather name="home" size={24} color={color} />
);
export const EyeIcon = (props) => (
    <Feather name={'eye'} size={24} color={color}  />
);
export const EyeOffIcon = (props) => (
    <Feather name={'eye-off'} size={24} color={color}  />
);