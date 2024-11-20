
import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
const NavBar = () => {
    return (
        <HStack>
            <Image src={logo}  height="40px" width="40px"  />
        </HStack>
    );
};

export default NavBar;
