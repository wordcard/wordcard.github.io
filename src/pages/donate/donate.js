import './donate.scss'
import Translater from 'translater.js'

class App {
    constructor() {
        this.init();
    }

    init() {
        const tran = new Translater();

        if (tran.getLang() === 'default') {
            tran.setLang('en');
        }
    }
}

new App();