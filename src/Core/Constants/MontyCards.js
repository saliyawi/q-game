import closeDoorIcon from '../../Images/MontyCards/door-close.png';
import openCarDoorIcon from '../../Images/MontyCards/door-open-car.png';
import openGoatDoorIcon from '../../Images/MontyCards/door-open-goat.png';

export const montyCards = [
    {
        id:0,
        name: "ClosedDoor",
        icon: closeDoorIcon,
        onClick: "getUserInput"
    },
    {
        id:1,
        name: "OpenCarDoor",
        icon: openCarDoorIcon,
        onClick: "getUserInput"
    },
    {
        id:2,
        name: "OpenGoatDoor",
        icon: openGoatDoorIcon,
        onClick: "getUserInput"
    },
]

export const montyDoors = {
    closedDoor:0,
    carDoor:1,
    goatDoor:2
}