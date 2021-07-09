import {images} from '../constants';

const postData = [
    {
        id: 1,
        photo: images.images01,
        description: 'If we have the attitude that it\'s going to be a great day, it usually is… 💕',
        heart: '1,090',
        cmt: '15',
        user: {
            userId: 1,
            name: 'tranchaudenn',
            avatar: images.avatar01
        }
    },
    {
        id: 2,
        photo: images.images02,
        description: 'Can you guess the amphibian that inspired this cute character design?',
        heart: '3,120',
        cmt: '30',
        user: {
            userId: 2,
            name: 'artstationhq',
            avatar: images.avatar02
        }
    },
    {
        id: 3,
        photo: images.images03,
        description: 'Type of expressions 😂😔by migenup(pinterest)',
        heart: '1,120',
        cmt: '10',
        user: {
            userId: 3,
            name: 'kawaii.xtreme',
            avatar: images.avatar03
        }
    }
]

export default postData