interface RepresentativeDetails {
    profilePic: string;
    name: string;
    email: string;
    phoneNumber: string;
}

const REPRESENTATIVE_MAKS: RepresentativeDetails = {
    profilePic: 'client_assets_maks.svg',
    name: 'MAKS ŠUŠTAR',
    email: 'maks@openlab.si',
    phoneNumber: '040 241 774'
};

const REPRESENTATIVE_DOMEN: RepresentativeDetails = {
    profilePic: 'client_assets_domen.svg',
    name: 'DOMEN DOLENC',
    email: 'domen@openlab.si',
    phoneNumber: '031 418 174'
};

export const returnListOfRepresentatives = (): Array<RepresentativeDetails> => [
    REPRESENTATIVE_MAKS,
    REPRESENTATIVE_DOMEN
];
