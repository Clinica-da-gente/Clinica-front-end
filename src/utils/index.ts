export const compareTimePassedSinceLastLogin = (logout: ()=> void) => {
    if (localStorage.getItem("@ultimoLogin")) {
        const lastLogin = Number(localStorage.getItem("@ultimoLogin"));
        const now = new Date().valueOf();
        const hours = 47;
        const seconds = (now - lastLogin) / 1000;

        if (seconds > hours * 3600) {
            logout()
        }
    }
};

export const getTodayDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const dateObj = {
        day,
        month,
        year,
        hour,
        minutes,
        nowDateTime: `${day}-${month}-${year} ${hour}:${minutes}`,
        nowDate: `${day}-${month}-${year}`,
    };

    return dateObj;
};

export const timePassed = (finalHour: string) => {
    const [finalHours, finalMinutes] = finalHour.split(":");
    const date = new Date();
    const nowHour = date.getHours();
    const nowMinutes = date.getMinutes();

    if (Number(nowHour) > Number(finalHours)) {
        return true;
    } else if (Number(nowHour) === Number(finalHours)) {
        return Number(nowMinutes) > Number(finalMinutes) ? true : false;
    }
  
    return false;
};

export const getPorcentXRelationY = (x: number, y: number) => {
    return ((x / y) * 100).toFixed(4);
};

export const tranforTimeInMinutes = (time: string) => {
    const result = time.split(":");

    return Number(result[0]) * 60 + Number(result[1]);
};


export const stringToColor = (string: string) => {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;

        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
}
  
export const stringAvatar = (name: string) => {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: name.includes(' ') ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}` : `${name[0]}`,
    };
}
