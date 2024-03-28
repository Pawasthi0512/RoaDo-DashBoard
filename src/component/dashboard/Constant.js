import SearchIcon from '../../assets/icons/SearchIcon.png';
import NotificationIcon from '../../assets/icons/Notification.png';
import KebabMenuIcon from '../../assets/icons/KebabMenuIcon.png';
import AddIndentIcon from '../../assets/icons/AddIndentIcon.png';
import AddTrailerIcon from '../../assets/icons/AddTrailerIcon.png';
import FleetIcon from '../../assets/icons/Fleet Icons.png';
import ShipingCartIcon from '../../assets/icons/ShipingCartIcon.png';
import HeatMeasurementIcon from '../../assets/icons/Icon  Container (1).png'

const DASHBOARD_ICONS = {
    searchIcon: <img src={SearchIcon} alt="Logo" />,
    notificationIcon: <img src={NotificationIcon} alt="Logo" />,
    KebabMenuIcon: <img src={KebabMenuIcon} alt="Logo" />
};

const QUICK_ACTION_PANNEL_ICONS = [
    {
        lable: 'Create Indent',
        icon: <img src={FleetIcon} alt="Logo" />,
    },
    {
        lable: 'Add Vehical',
        icon: <img src={ShipingCartIcon} alt="Logo" />,
    },
    {
        lable: 'Add Trailer',
        icon: <img src={AddTrailerIcon} alt="Logo" />,
    },
    {
        lable: 'Add Driver',
        icon: <img src={ShipingCartIcon} alt="Logo" />,
    },
    {
        lable: 'Add Indent',
        icon: <img src={AddIndentIcon} alt="Logo" />,
    },
];

const CARD_DEATILS = [
    {
        id: 1,
        title: 'Orders',
        total: '123456',
        data: [
            { id: 0, value: 15, lable: 'Upcoming', color: '#FFCB49'},
            { id: 1, value: 20, lable: 'Ongoing', color: '#7464FF'},
            { id: 2, value: 25, lable: 'Completed', color: '#4FD2B5'},
        ]
    },
    {
        id:2,
        title: 'Trips',
        total: '123456',
        data: [
            { id: 0, value: 5, lable: 'Upcoming', color: '#FFCB49'},
            { id: 1, value: 35, lable: 'Ongoing', color: '#7464FF'},
            { id: 2, value: 45, lable: 'Completed', color: '#4FD2B5'},
        ]
    },
    {
        id:3,
        title: 'Revenue',
        total: '123456',
        data: [
            { id: 0, value: 15, lable: 'Upcoming', color: '#FFCB49'},
            { id: 1, value: 45, lable: 'Ongoing', color: '#7464FF'},
            { id: 2, value: 40, lable: 'Completed', color: '#4FD2B5'},
        ]
    },
    {
        id:4,
        title: 'Expences',
        total: '123456',
        data: [
            { id: 0, value: 15, lable: 'Upcoming', color: '#FFCB49'},
            { id: 1, value: 45, lable: 'Ongoing', color: '#7464FF'},
            { id: 2, value: 55, lable: 'Completed', color: '#4FD2B5'},
        ]
    },
];

const ALERT_CARDS_DATA = [
    {
        icon: <img src={AddIndentIcon} alt="Logo" />,
        title: 'Derived Raised Concern',
        loadNo: '12454',
        billTo: 'RoaDo demo Bengalore',
        alertText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua',
        date: '13 Feb 24',
    },
    {
        icon: <img src={HeatMeasurementIcon} alt="Logo" />,
        title: 'Refer Temp. out of range',
        loadNo: '12454',
        billTo: 'RoaDo demo Bengalore',
        alertText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua',
        date: '13 Feb 24',
    }
]

export {
    DASHBOARD_ICONS,
    CARD_DEATILS,
    QUICK_ACTION_PANNEL_ICONS,
    ALERT_CARDS_DATA
}