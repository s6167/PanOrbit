import React from 'react';
import './profile.css'
import map from './map.PNG'

const Profile = (props) => {
    console.log(props)
    return (
        <div className='user-content' >
                    <h3 className='title'>Profile</h3>
                    <div className='content' > 
                        <div className='content1' >
                            <img src={props.user.profilepicture} />
                            <h3>{props.user.name}</h3>
                            <table>
                                <tr>
                                    <td className='align-right' >UserName</td>
                                    <td>:</td>
                                    <td className='align-left' ><strong>{props.user.username}</strong></td>
                                </tr>
                                <tr>
                                    <td className='align-right' >Email</td>
                                    <td>:</td>
                                    <td className='align-left' ><strong>{props.user.email}</strong></td>
                                </tr>
                                <tr>
                                    <td className='align-right' >Phone</td>
                                    <td>:</td>
                                    <td className='align-left' ><strong>{props.user.phone}</strong></td>
                                </tr>
                                <tr>
                                    <td className='align-right' >Website</td>
                                    <td>:</td>
                                    <td className='align-left' ><strong>{props.user.website}</strong></td>
                                </tr>
                            </table>
                            
                            <p>Company</p>
                            <table>
                                <tr>
                                    <td className='align-right' >Name</td>
                                    <td>:</td>
                                    <td className='align-left' ><strong>{props.user.company.name}</strong></td>
                                </tr>
                                <tr>
                                    <td className='align-right' >CatchPhrase</td>
                                    <td>:</td>
                                    <td className='align-left' ><strong>{props.user.company.catchPhrase}</strong></td>
                                </tr>
                                <tr>
                                    <td className='align-right' >bs</td>
                                    <td>:</td>
                                    <td style={{"word-wrap":"word-wrap"}} className='align-left' ><strong>{props.user.company.bs}</strong></td>
                                </tr>
                                
                            </table>

                        </div>
                        <div className='content2' >
                          
                            <table>
                                <tr>Address:</tr>
                                <tr>
                                    <td className='align-right' >Street</td>
                                    <td>:</td>
                                    <td className='align-left' ><strong>{props.user.address.street}</strong></td>
                                </tr>
                                <tr>
                                    <td className='align-right' >Suite</td>
                                    <td>:</td>
                                    <td className='align-left' ><strong>{props.user.address.suite}</strong></td>
                                </tr>
                                <tr>
                                    <td className='align-right' >City</td>
                                    <td>:</td>
                                    <td className='align-left' ><strong>{props.user.address.city}</strong></td>
                                </tr>
                                <tr>
                                    <td className='align-right' >Zip</td>
                                    <td>:</td>
                                    <td className='align-left' ><strong>{props.user.address.zipcode}</strong></td>
                                </tr>
                            </table>
{/* ------------------------------MAP View----------------------------------------------------------------------------------------------- */}
                            <img src={map} />
                            
                            
                            {/* <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                                    />
                                <Marker position={position}>
                                    <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer> */}
                            
                           
                        </div>
                    </div>
                </div>
    );
}

export default Profile;
