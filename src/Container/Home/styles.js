import styled from "styled-components"
import ImageBackground from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;
    position: relative;
`

export const SidBar = styled.aside`
    width: 410px;
    height: 100%;
    display: inline-block;
    position: relative;

    .toolbarContainer {
        width: 100%;
        height: 60px;
        background-color: #EEE;
    }
    
    .userPhoto {
        width: 40px;
        border-radius: 50%;
        position: absolute;
        left: 15px;
        top: 10px;
        background-color: #CCC;
    }

    .auxIconsToolBar {
        float: right;
        height: 60px;
        line-height: 60px;
        padding-right: 20px;
    }
    
    .icon {
        color: #80868A;
        font-size: 20px;
        margin-left: 15px;
        margin-right: 15px;
        cursor: pointer;
    }

    .notificationContainer {
        width: 100%;
        height: 90px;
        padding-top: 23px;
        padding-left: 80px;
        background-color: #9DE1FE;
        color: #384c56;
        position: relative;
        box-sizing: border-box;
    }

    .faBellSlash {
        width: 45px;
        height: 45px;
        text-align: center;
        line-height: 45px;
        border-radius: 50%;
        font-size: 18px;
        color: #9DE1FE;
        background-color: #F5FCFF;
        position: absolute;
        top: 20px;
        left: 15px;
    }

    .receiveNotification {
        margin: 0;
        font-size: 15px;
        margin-bottom: 3px;
    }

    .activateNotification {
        font-size: 13px;
    }

    .searchContacts {
        height: 50px;
        width: 100%;
        padding-left: 7.5px;
        padding-top: 7.5px;
        background-color: #F8F8F8;
        position: relative;
        color: #BDC1C3;
        box-sizing: border-box;
    }

    #search {
        position: absolute;
        left: 30px;
        top: 18px;
        font-size: 14px;
        background-color: #FFF;
        border: none;
        height: 35px;	
        width: 300px;
        border-radius: 17.5px;
        text-align: center;
        
    }

    .faSearch {
        margin-left: 350px;
        left: 30px;
        top: 18px;
        margin-top: 16px;
        width: 20px;
        height: 20px;
    }

    #search::placeholder {
        color: #BDC1C3;
    }

    .boxContacts {
        height: auto;
        background-color: #FFF;
    }

    .contactBox {
        cursor: pointer;
        margin-top: 10px;
        height: 72px;
        background-color: #FFF;
        border-top: 1px solid #f2f2f2;
        position: relative;
        box-sizing: border-box;
    }

    .contactBox:last-child {
        border-bottom: 1px solid #f2f2f2;
    }

    .contactBox:hover {
        background-color: #f4f5f5;
    }

    .activeChat {
        background-color: #E9EBEB;
    }

    .activeChat:hover{
        background-color: #E9EBEB;
    }

    .userInfo {
        margin-left: 80px;
        padding-top: 10px;
        display: inline-block;
    }

    .userName {
        font-size: 16px;
        color: #000;
        margin-bottom: 12px;
    }

    .messageUser {
        font-size: 14px;
        color: #454545;
    }   

    .faCheckDouble {
        margin-right: 5px;
        color: #4FC3F7;
    }

    p {
        margin: 0;
    }
`

export const Main = styled.main`
    position: absolute;
    top: 0;
    left: 410px;
    width: calc(100% - 410px);
    height: 100%;
    background-color: #CCC;

    ul {
        list-style: none;
    }
`

export const Nav = styled.nav`
    height: 60px;
    background-color: #EEEEEE;
    border-left: 1px solid #DDD;
    padding-left: 75px;

    .contactInfoContainer {
        display: inline-block;
        font-size: 16px;
        height: 60px;
        line-height: 60px;
    }

    .sabrinaOne{
        width: 40px;
        border-radius: 50%;
        position: absolute;
        left: 15px;
        top: 10px;
    }

    .sabrina {
        font-size: 16px;
        height: 60px;
        line-height: 60px;
    }


    .chattools-container {
        float: right;
        display: inline-block;
        height: 60px;
        line-height: 60px;
        margin-right: 20px;
    }

    .chattools-container li {
        display: inline-block;
        margin: 0 15px;
        font-size: 18px;
        color: #80868A;
        cursor: pointer;
    }
`

export const Messagens = styled.div`
    background-color: #E1DAD2;
    height: calc(100% - 120px);
    position: relative;

    p {
        margin: 0;
    }
`

export const Image = styled.div`
    background-image: url(${ImageBackground});
    background-repeat: repeat;
    opacity: 0.06;
    width: 100%;
    height: 100%;
`

export const Chat = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 30px 80px;
    box-sizing: border-box;

    p {
        display: block;
        color: #262626;
        font-size: 14px;
        padding: 7px;
        border-radius: 7px;
        position: relative;
        width: 200px;
    }
`

export const Guest = styled.p`
    display: block;
    color: #262626;
    font-size: 14px;
    padding: 7px;
    border-radius: 7px;
    position: relative;
    width: 200px;
    background-color: #DCF8C6;

    &::before {
        content: "";
        width: 0; 
        height: 0; 
        border-bottom: 17px solid transparent; 
        border-right: 17px solid #DCF8C6; 
        position: absolute;
        top: 0;
        left: 197px;
    }

    
`

export const User = styled.p`
    background-color: #DCF8C6;
    float: right;

    &::after {
        content: "";
        width: 0; 
        height: 0; 
        border-bottom: 17px solid transparent; 
        border-left: 17px solid #DCF8C6; 
        position: absolute;
        top: 0;
        right: -10px;
    }
`

export const Send = styled.div`
    background-color: #EFEFEF;
    border-left: 1px solid #DDD;
    height: 60px;
    padding: 0 20px;
    position: relative;

    #userinput{
        width: 1350px;
        height: 30px;
        color: #BDC1C3;
        border: none;
        text-align: center;
        border-radius: 17.5px;
    }

    .faGrin {
        font-size: 24px;
        color: #80868A;
        cursor: pointer;
        height: 20px;
        line-height: 20px;
        margin-right: 30px;
        margin-top: 25px;
    }

    .faMicrophone {
        margin-left: 20px;
        height: 20px;
        width: 20px;
    }
`