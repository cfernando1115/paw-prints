import { View } from './view.js';

class ProfileView extends View{
    _output = document.querySelector('.profile');

    _generateMarkup() {
        return `
            <div class="profile-pic">
                <img src="${this._data.picture.large}">
            </div>
            <h3>${this._data.name.first} ${this._data.name.last}</h3>
            <p>${this._data.location.city}, ${this._data.location.country}</p>
        `;
    }
}

export default new ProfileView();