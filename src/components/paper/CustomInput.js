import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {Headline, TextInput as PaperTextInput, useTheme} from "react-native-paper";
import i18n from "i18n-js";
import MainNav from "../navs/MainNav";

/**
 * @param props
 * @returns {*}
 * @constructor
 */
function CustomInput(props) {
    const {colors} = useTheme();
    const _maxLength = props.keyboardType === 'number-pad' ? 5 : null;
    return (
        <PaperTextInput
            {...props}
            style={[styles.input, {backgroundColor: colors.text + '00'}]}
            render={props => <TextInput {...props} style={[styles.inputCustom, props.customStyle]} maxLength={_maxLength}/>}
        />
    )
}

const styles = StyleSheet.create({
    inputCustom: {
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
        fontSize: 30,
        backgroundColor: 'red'
    },
    input : {
        borderRadius: 5, fontSize: 30, textAlign: 'center',   justifyContent: 'flex-end'
    }
});
MainNav.defaultProps = {
    customStyle: null,
};



export default CustomInput;