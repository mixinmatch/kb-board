import ProfileCard from './profileCard';

var React = require('react');
var ReactDOM = require('react-dom');

const ProfileList = (props) => (

    <div style={{display: 'flex', flexDirection:'column', backgroundColor:'#36454f', paddingLeft:'30px', paddingRight:'30px', paddingTop:'180px'}}>
        <span className="header">
            Profiles
        </span>
        <div>
            {props.profiles.map(p => (<ProfileCard key={p.id} {...p} />))}
        </div>
    </div>

)


export default ProfileList