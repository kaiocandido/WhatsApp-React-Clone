import { Chat, Container, Guest, Image, Main, Messagens, Nav, Send, SidBar, User } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBellSlash, faCheckDouble, faCommentAlt, faGrin, faMicrophone, faPaperclip, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AvatarOne from '../../assets/avatar1.png'
import AvatarTwo from '../../assets/avatar2.png'
import AvatarThree from '../../assets/avatar3.png'
import AvatarFour from '../../assets/avatar4.png'

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
export function Home() {
    return (
        <Container>
            <SidBar>
                <div className="tollbarContainer">
                    <img src={AvatarOne} alt="Photo Profile" className="userPhoto" />
                    <div className="AuxiconsToolBar">
                        <FontAwesomeIcon icon={faSpinner} className="faSpinner" />
                        <FontAwesomeIcon icon={faCommentAlt} className="faCommentAlt" />
                        <FontAwesomeIcon icon={faEllipsisV} className="faEllipsisV" />
                    </div>
                </div>
                <div className="notificationContainer">
                    <FontAwesomeIcon icon={faBellSlash} className="faBellSlash" />
                    <p className="receiveNotification">Recebe notificações de novas mensagens</p>
                    <p className="activetNotification">Ativar notificações
                        <i><FontAwesomeIcon icon={faAngleRight} className="faAngleRight" /></i>
                    </p>
                </div>
                <div className="searchContacts">
                    <FontAwesomeIcon icon={faSearch} className="faSearch" />
                    <input type="text" placeholder="Buscar Contato" id="search" />
                </div>
                <div className="BoxContacts">
                    <div className="contactBox activeChat">
                        <img src={AvatarTwo} alt="Contact" className="userPhoto" />
                        <div className="userInfo">
                            <p className="userName">Sabrina</p>
                            <p className="messageUser"><FontAwesomeIcon icon={faCheckDouble} className="faCheckDouble" />Olá, tudo bem?</p>
                        </div>
                    </div>
                    <div className="messageInfo">
                        <p className="time">22:40</p>
                    </div>

                    <div className="contactBox">
                        <img src={AvatarThree} alt="Contact" className="userPhoto" />
                        <div className="userInfo">
                            <p className="userName">Matheus</p>
                            <p className="messageUser">Esta estudando oque?</p>
                        </div>
                    </div>
                    <div className="messageInfo">
                        <p className="time">20:20</p>
                        <p className="pending">3</p>
                    </div>

                    <div className="contactBox">
                        <img src={AvatarFour} alt="Contact" className="userPhoto" />
                        <div className="userInfo">
                            <p className="userName">Leila</p>
                            <p className="messageUser">Vamos ir onde hoje?</p>
                        </div>
                    </div>
                    <div className="messageInfo">
                        <p className="time">11:00</p>
                        <p className="pending">1</p>
                    </div>
                </div>
            </SidBar>
            <Main className="chatContainer">
                <Nav>
                    <div className="contactInfoContainer">
                        <img src={AvatarOne} alt="userPhoto" className="userPhoto" />
                        <p className="sabrina">Sabrina</p>
                    </div>
                    <ul>
                        <li><FontAwesomeIcon icon={faSearch} className="faSearch" /></li>
                        <li><FontAwesomeIcon icon={faPaperclip} className="faPaperclip" /></li>
                        <li><FontAwesomeIcon icon={faEllipsisV} className="faEllipsisV" /></li>
                    </ul>
                </Nav>
                <Messagens>
                    <Image></Image>
                    <Chat>
                        <Guest>Olá, bom dia!!</Guest>
                        <User>Bom dia! Tudo bem?</User>
                    </Chat>
                </Messagens>
                <Send>
                    <FontAwesomeIcon icon={faGrin} className="faGrin" />
                    <input type="text" name="message" id="userinput" placeholder="Digite sua mensagem" />
                    <FontAwesomeIcon icon={faMicrophone} className="faMicrophone" />
                </Send>
            </Main>

        </Container>
    )
}

export default Home