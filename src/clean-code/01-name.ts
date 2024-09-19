(()=> {

    //Ejemplo
    // Archivos a evualuar - files to evaluate
    const filesToEvaluate = [
        {id: 1, flagged: true },
        {id: 2, flagged: false },
        {id: 3, flagged: false },
        {id: 4, flagged: false },
        {id: 5, flagged: true },
    ]

    const filesToDeleete = filesToEvaluate.map(file => file.flagged);


    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea

    // día de hoy - today
    const todayDate = new Date();

    // días transcurridos - elapsed time in days
    const elapsedDays: number = 23;

    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;

    // primer nombre - first name
    const firstName = 'Fernando';

    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesStudent = 6;



})();