L.Control.Info = L.Control.extend({
    options: {
        position: 'topleft',
        title: 'Plus d\'informations sur la toponymie',
        link: 'https://ebxl.be/les-outils/toponymie/'
    },

    onAdd: function (map) {
        // Utilisation des classes natives Leaflet
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
        
        this._link = L.DomUtil.create('a', 'leaflet-bar-part leaflet-bar-part-single', container);
        this._link.href = this.options.link;
        this._link.target = '_blank';
        this._link.title = this.options.title;
        
        // Utilisation de l'icône "info-circle" de FontAwesome
        var icon = L.DomUtil.create('span', 'fas fa-info-circle', this._link);

        // Centrage parfait
        this._link.style.display = 'flex';
        this._link.style.alignItems = 'center';
        this._link.style.justifyContent = 'center';

        L.DomEvent.disableClickPropagation(container);

        return container;
    }
});

L.control.info = function (options) {
    return new L.Control.Info(options);
};