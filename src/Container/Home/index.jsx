import { Chat, Container, Guest, Image, Main, Messagens, Nav, Send, SidBar, User } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faBellSlash, faCheckDouble, faCommentAlt, faGrin, faMicrophone, faPaperclip, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import AvatarOne from '../../assets/avatar1.png'
import AvatarTwo from '../../assets/avatar2.png'
import AvatarThree from '../../assets/avatar3.png'
import AvatarFour from '../../assets/avatar4.png'
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV"

export function Home() {
    return (
        <Container>
            <SidBar>
                <div className="toolbarContainer">
                    <img src={AvatarOne} alt="Photo Profile" className="userPhoto" />
                    <div className="auxIconsToolBar">
                        <FontAwesomeIcon icon={faSpinner} className="icon" />
                        <FontAwesomeIcon icon={faCommentAlt} className="icon" />
                        <FontAwesomeIcon icon={faEllipsisV} className="icon" />
                    </div>
                </div>
                <div className="notificationContainer">
                    <FontAwesomeIcon icon={faBellSlash} className="faBellSlash" />
                    <p className="receiveNotification">Recebe notificações de novas mensagens</p>
                    <p className="activateNotification">
                        Ativar notificações
                        <i><FontAwesomeIcon icon={faAngleRight} className="faAngleRight" /></i>
                    </p>
                </div>
                <div className="searchContacts">
                    <FontAwesomeIcon icon={faSearch} className="faSearch" />
                    <input type="text" placeholder="Buscar Contato" id="search" />
                </div>
                <div className="boxContacts">
                    {[
                        { avatar: AvatarTwo, name: 'Sabrina', message: 'Olá, tudo bem?', active: true },
                        { avatar: AvatarThree, name: 'Matheus', message: 'Está estudando o que?', active: false },
                        { avatar: AvatarFour, name: 'Leila', message: 'Vamos ir onde hoje?', active: false }
                    ].map((contact, index) => (
                        <div key={index} className={`contactBox ${contact.active ? 'activeChat' : ''}`}>
                            <img src={contact.avatar} alt="Contact" className="userPhoto" />
                            <div className="userInfo">
                                <p className="userName">{contact.name}</p>
                                <p className="messageUser">
                                    {contact.active && <FontAwesomeIcon icon={faCheckDouble} className="faCheckDouble" />}
                                    {contact.message}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </SidBar>
            <Main className="chatContainer">
                <Nav>
                    <div className="contactInfoContainer">
                        <img src={AvatarOne} alt="userPhoto" className="userPhoto" />
                        <p className="sabrina">Sabrina</p>
                    </div>
                    <ul className="chattools-container">
                        <li><FontAwesomeIcon icon={faSearch} className="faSearch" /></li>
                        <li><FontAwesomeIcon icon={faPaperclip} className="faPaperclip" /></li>
                        <li><FontAwesomeIcon icon={faEllipsisV} className="faEllipsisV" /></li>
                    </ul>
                </Nav>
                <Messagens>
                    <Image />
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