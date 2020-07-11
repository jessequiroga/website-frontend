import React from 'react';
import './landing-page.css';

import Button from '@material-ui/core/Button';

export default class LandingPage extends React.Component<any, any> {
    render() {
        return (
            <div className="landing-page-container">
                <div className="landing-page-title">OPENLAB KRANJ</div>
                <div className="landing-page-contents">
                    OpenLab je več kot samo prostor na Koroški 19, to so tudi ljudje, ki v njem delujejo, se zabavajo in
                    širijo svoje znanje. Pot od preprostega udeleženca do aktivnega člana je lahko ena sama dobra ideja,
                    ki jo pošljete po elektronski pošti – od tod odprtost. Laboratorij pa zato, ker je poleg zabave
                    pomembno tudi ustvarjati kaj novega. In kakor kemiki mešajo vsebine svojih epruvet, bomo tudi mi
                    mešali slike, črke, animacije, video ter programsko kodo in čipe v nove uporabne mešanice.
                    <br />
                    <span className="landing-page-contents-accent">Kdo ve, kaj nastane?</span>
                    <div className="landing-page-button">
                        <Button variant="contained" color="primary">
                            KONTAKT
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
