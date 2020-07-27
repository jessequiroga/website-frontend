interface MentorDetails {
    key: number;
    name: string;
    instagram: string;
    description: string;
    profileImage: string;
}

const MENTOR_PETER: MentorDetails = {
    key: 0,
    name: 'Peter Aleksander Bizjak',
    instagram: '@peteraleksanderbizjak',
    description:
        'Peter Aleksander Bizjak je študent tretjega letnika na Fakulteti za elektrotehniko in se profesionalno ukvarja ' +
        'z razvojem mobilnih (native in cross-platform) ter fullstack spletnih aplikacij. Na fakulteti dela kot ' +
        'certificiran Cisco Networking Academy inštruktor. Trenutno pri podjetju IPM vodi razvoj mobilnih aplikacij ter ' +
        'nudi konzultacije na tem področju.',
    profileImage: 'client_assets_peter.svg'
};

const MENTOR_TIAN: MentorDetails = {
    key: 1,
    name: 'Tian Jagodic',
    instagram: '@tianjagodic',
    description:
        'Mentor Tian Jagodic je dijak četrtega letnika računalništva na Šolskem centru Kranj, ki ga že od ' +
        'nekdaj veselijo računalniške igre. Svoje znanje o igrah in programiranju je uporabil za svojo multiplayer ' +
        'igro Cannon Fire, ki je na voljo v spletni trgovini Steam. Sodeluje tudi pri razvoju industrijskih sistemov ' +
        'in razvoju za Radio 1.',
    profileImage: 'client_assets_tian.svg'
};

const MENTOR_DOMEN: MentorDetails = {
    key: 2,
    name: 'Domen Dolenc',
    instagram: '@dolenc',
    description:
        'Mentor Domen Dolenc se poklicno ukvarja z video produkcijo, kjer sodeluje pri raznih projektih po ' +
        'celi Sloveniji. Je tudi mentor v Kranjskem co-working prostoru za mlade podjetnike, Kovačnici. Občasno pa ' +
        'pripravi tudi kakšno delavnico za otroke, kjer sestavljajo Lego robote ali snemajo stop-motion risanke.',
    profileImage: 'client_assets_domen.svg'
};

export const returnListOfMentors = (): Array<MentorDetails> => [MENTOR_PETER, MENTOR_TIAN, MENTOR_DOMEN];
