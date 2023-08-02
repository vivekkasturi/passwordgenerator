import { useState } from 'react';

export default function usePasswordGenerator() {

    const [password, setPassword] = useState("");

    const generatePassword = (length, checkBoxData) => {
        let charSet = "";
        let generatedPassword = "";
        console.log(length, checkBoxData);

        const filtereddata = checkBoxData.filter((element) => {
            if (!element.state) {
                console.log(element.Name);
                return [element.Name]
            }
        });

        for (let y = 0; y < filtereddata.length; y++) {
            switch (filtereddata[y].Name) {
                case "IncludeUpperCase":
                    charSet = charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "IncludeLowerCase":
                    charSet = charSet + "qwertyuiopasdfghjklzxcvbnm";
                    break;
                case "IncludeNumbers":
                    charSet = charSet + "0123456789";
                    break;
                case "IncludeSymbols":
                    charSet = charSet + "!@#$%^&*()_+=[]{}\|:;'<>?,.";
                    break;

            }
        };


        console.log("reached charSet value", charSet);
        if (charSet.length > 0) {
            for (let z = 0; z < length; z++) {

                const randomnumber = (Math.floor(Math.random() * charSet.length));
                console.log(charSet[randomnumber]);

                generatedPassword = generatedPassword + charSet[randomnumber];
                console.log(generatedPassword);
                setPassword(generatedPassword);
                console.log(password);
            }
        } else {
            alert("Please check atleast one checkbox, thank you!")
        }
    }

    return { password, generatePassword };
}
