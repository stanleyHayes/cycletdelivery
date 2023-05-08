const getInitials = (name) => {
    if(!name) return 'A';
    const [firstName, lastName] = name.split(' ');
    if(firstName && lastName) return `${firstName[0]}${lastName[0]}`;
    if(firstName && !lastName) return `${firstName[0]}`;
}

export const UTILS = {getInitials};