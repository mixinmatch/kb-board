import ProfileCard from './profileCard';

var React = require('react');
var ReactDOM = require('react-dom');

const ProfileList = (props) => (
    <div className="header">
        Profiles
        {props.profiles.maps(p => (<ProfileCard key={p.id} {...p}/>))}
    </div>
)


export default ProfileList