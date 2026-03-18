L.Control.Logo = L.Control.extend({
    options: {
        position: 'bottomright',
        logoUrl: 'images/logo_ebxl.png',
        link: 'https://ebxl.be',
        alt: 'Logo EBXL'
    },

    onAdd: function (map) {
        // Création d'un conteneur simple sans la classe 'leaflet-bar'
        // pour éviter d'avoir un cadre gris autour de l'image
        var container = L.DomUtil.create('div', 'leaflet-control-logo-ebxl');
        
        // Création de l'image
        var img = L.DomUtil.create('img', '', container);
        img.src = this.options.logoUrl;
        img.alt = this.options.alt;
        
        // Styles intégrés pour garantir le rendu
        img.style.width = '100px'; // Taille du logo
        img.style.height = 'auto';
        img.style.display = 'block';
        img.style.cursor = 'pointer';
        container.style.marginBottom = '5px';
        container.style.marginRight = '5px';

        // Redirection au clic
        L.DomEvent.on(container, 'click', function() {
            window.open(this.options.link, '_blank');
        }, this);

        // Empêche la carte de bouger si on clique sur le logo
        L.DomEvent.disableClickPropagation(container);

        return container;
    }
});

L.control.logo = function (options) {
    return new L.Control.Logo(options);
};