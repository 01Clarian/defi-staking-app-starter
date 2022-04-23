import { ThemeMode } from "../../../Enums";
export interface IThemeDefault {
    mode: ThemeMode | keyof ThemeMode;
    value: boolean;
}
