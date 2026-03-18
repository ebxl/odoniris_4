L.Control.Message = L.Control.extend({
    options: {
        position: 'bottomright',
        title: 'Suggérer une modification',
        link: 'https://framaforms.org/odoniris-suggestion-de-modification-ou-correction-1771334519'
    },

    onAdd: function (map) {
        // Création du conteneur avec la classe standard Leaflet pour les bordures/ombres
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
        
        // Création du bouton
        this._link = L.DomUtil.create('a', 'leaflet-bar-part leaflet-bar-part-single', container);
        this._link.href = this.options.link;
        this._link.target = '_blank';
        this._link.title = this.options.title;
        
        // Ajout de l'icône (utilise le même FontAwesome que le bouton localisation)
        var icon = L.DomUtil.create('span', 'fas fa-envelope', this._link);

        // Style pour s'assurer que l'icône est parfaitement centrée (comme le bouton locate)
        this._link.style.display = 'flex';
        this._link.style.alignItems = 'center';
        this._link.style.justifyContent = 'center';

        // Empêche la carte de réagir au clic
        L.DomEvent.disableClickPropagation(container);

        return container;
    }
});

// Création du raccourci pour l'appel (comme L.control.locate)
L.control.message = function (options) {
    return new L.Control.Message(options);
};