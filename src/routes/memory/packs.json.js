import mario from '../../lib/modules/memory/image-packs/mario';

export function get(req, res) {


    return {
        body: [
            {
                name: 'Mario',
                cards: mario
            },
            {
                name: 'NADA',
                cards: []
            }
        ]

    }

}