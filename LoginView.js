/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

export default class loginView extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                {/** 头像的bgView */}
                <View style={styles.imageBgStyle}>
                    <Image source = {{uri : 'icon'}}
                           style = {styles.imageStyle}
                    />
                </View>

                {/** 账号密码的bgView */}
                <View style= {styles.TextInputBgStyle}>
                    <TextInput style = {styles.TextInputStyle}
                               placeholder = {'请输入用户名'}
                    />
                    <TextInput style = {styles.TextInputStyle}
                               placeholder = {'请输入密码'}
                               password = {true}
                    />

                </View>

                {/** 登录按钮的bgView */}
                <View style={styles.loginButtonBgStyle}>
                    <Text style={styles.loginTextStyle}>
                        登录
                    </Text>
                </View>

                {/** 无法登录和新用户的bgView */}
                <View style={styles.settingTextBgStyle}>

                    <Text style={styles.unloginTextStyle}>
                        无法登录
                    </Text>

                    <Text style={styles.newUserTextStyle}>
                        新用户
                    </Text>

                </View>

                {/** 其他登录方式的的bgView */}
                <View style={styles.otherLoginBgStyle}>
                    <Text>
                        其他方式登录
                    </Text>
                    <Image  source = {{uri : 'icon3'}}
                            style = {styles.otherLoginIconStyle}
                    />
                    <Image  source = {{uri : 'icon7'}}
                            style = {styles.otherLoginIconStyle}
                    />
                    <Image  source = {{uri : 'icon8'}}
                            style = {styles.otherLoginIconStyle}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
    },

    imageBgStyle:{
        marginTop:60,
        alignItems : 'center',
    },

    imageStyle:{
        width:90,
        height:90,
        borderRadius: 45,
        borderWidth:2,
        borderColor:'white',
    },

    TextInputBgStyle:{
        height : 80,
        backgroundColor:'#dddddd',
        marginTop:20,
    },

    TextInputStyle: {
        height : 40,
        backgroundColor:'#FFFFFF',
        marginBottom:1,
        textAlign:'center',
    },

    loginButtonBgStyle:{
        backgroundColor:'blue',
        marginLeft:10,
        marginRight:10,
        marginTop:20,
        height : 50,
        alignItems:'center',
        justifyContent:'center',
        color:'white',
        borderRadius:5,
    },

    loginTextStyle:{
        color:'white',
        fontSize:18,
    },

    settingTextBgStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:10,
        marginRight:10,
        marginTop:10,
    },

    unloginTextStyle:{
        color:'blue',
    },

    newUserTextStyle:{
        color:'blue',
    },

    otherLoginBgStyle:{
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        bottom:10,
        marginLeft:10,

    },

    otherLoginIconStyle:{
        width:30,
        height:30,
        borderRadius:15,
        marginLeft:5,
    }
});
