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
        email      : string,
        role       : string,
    }

    class User {

        public email      : string;
        public lastAccess : Date;
        public role       : string;

        constructor({
            email,
            role,
        }: UserProperties ) {
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProperties {
        lastOpenFolder   : string;
        workingDirectory : string;
    }

    class Settings {
        public lastOpenFolder    : string;
        public workingDirectory : string

        constructor({
            lastOpenFolder  ,
            workingDirectory,
        }: SettingsProperties) {
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    interface UserSettingsProperties {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory
        } : UserSettingsProperties) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
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