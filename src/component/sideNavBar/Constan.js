import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';
import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MainLogo from '../../assets/icons/Group 427318832.png';

const SIDE_NAVIGATION_ICONS =[
    {
        id: 0,
        lable: 'Logo',
        icon: <img src={MainLogo} alt="Logo" />,
    },
    {
        id: 1,
        lable: 'Dashboard',
        icon: <DashboardOutlinedIcon />
    },
    {
        id: 2,
        lable: 'Add to Queue',
        icon: <AddToQueueOutlinedIcon />
    },
    {
        id: 3,
        lable: 'Lable Important',
        icon: <LabelImportantTwoToneIcon />
    },
    {
        id: 4,
        lable: "Assingment",
        icon: <AssignmentTwoToneIcon />
    },
    {
        id: 5,
        lable: 'Local Shiping',
        icon: <LocalShippingTwoToneIcon />
    },
    {
        id: 6,
        lable: 'Parcel Tracker',
        icon: <LocalShippingIcon/>
    },
    {
        id: 7,
        lable: 'Business Center',
        icon: <BusinessCenterOutlinedIcon/>
    },
    {
        id: 8,
        lable: 'Account Balance',
        icon: <AccountBalanceWalletOutlinedIcon/>
    },
    {
        id: 9,
        lable: 'Dynamic Feed',
        icon: <DynamicFeedOutlinedIcon/>
    },
    {
        id: 10,
        lable: 'Settings',
        icon: <SettingsOutlinedIcon/>
    },
];

export {
    SIDE_NAVIGATION_ICONS,
}
