(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';


    interface PersonProperties {
        birthdate: Date;
        gender: Gender;
        name : string;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor( { name, gender, birthdate } : PersonProperties ) { 
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProperties {
        birthdate  : Date,
        email      : string,
        gender     : Gender,
        name       : string,
        role       : string,
    }

    class User extends Person {

        public email      : string;
        public lastAccess : Date;
        public role       : string;

        constructor({
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserProperties ) {
            super({ name, gender, birthdate });
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProperties {
        birthdate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
    }

    class UserSettings extends User {
        public lastOpenFolder    : string;
        public workingDirectory : string
        constructor({
            birthdate,
            email           ,
            gender,
            lastOpenFolder  ,
            name            ,
            role            ,
            workingDirectory,
        }: UserSettingsProperties) {
            super({ email, role, name, gender, birthdate });
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }


    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'fernando@google.com',
        role: 'Admin',
        name: 'Fernando',
        gender: 'M',
        birthdate: new Date('1985-10-21')
    });

    console.log({ userSettings });


})();