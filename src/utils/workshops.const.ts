interface WorkshopDetails {
    key: number;
    title: string;
    mentor: string;
    description: string;
}

export class WorkshopsConst {
    private static WORKSHOP_PETER: WorkshopDetails = {
        key: 0,
        title: 'UMETNA INTELIGENCA',
        mentor: 'Peter Aleksander Bizjak',
        description:
            'Na delavnici se boste naučili osnove programskega jezika Python ter machine-learning platforme Tensorflow. S pomočjo pridobljenega znanja boste računalnik naučili prepoznave objektov na sliki ali govora'
    };

    private static WORKSHOP_TIAN: WorkshopDetails = {
        key: 1,
        title: 'VIRTUALNA RESNIČNOST',
        mentor: 'Tian Jagodic',
        description:
            'Na delavnici se boste naučili 3D modeliranja v Blenderju in izdelave 3D računalniških iger v pogonu Unity. Te boste lahko nato preizkusili s pomočjo 3D očal za navidezno resničnost - zdelo se bo kot da ste v igri, ki ste jo ustvarili.'
    };

    private static WORKSHOP_DOMEN: WorkshopDetails = {
        key: 2,
        title: 'MULTIMEDIJA',
        mentor: 'Domen Dolenc',
        description:
            'Na delavnici boste spoznali vse o opremi za fotografijo in video, in ustvarjali različne medijske vsebine. Izdelovali boste videe in razstavljali fotografije. Včasih si namesto delavnice ogledamo tudi kakšen film in ga skupaj pokomentiramo.'
    };

    static returnListOfWorkshops = (): Array<WorkshopDetails> => [
        WorkshopsConst.WORKSHOP_PETER,
        WorkshopsConst.WORKSHOP_TIAN,
        WorkshopsConst.WORKSHOP_DOMEN
    ];
}
