import useAuth from "../hooks/useAuth";


export default function Logout(props) {
    const {signout,user} = useAuth();
    signout();
    props.navigation.navigate("Login")

}

