export const HealthForm = [
    {
        image:require('../../assets/lights/4.png'),
        options: [
            {
                title: 'Este test no sustituye opinión médica',
            }
            
        ]
    },
    {
        title: 'VALORACION CLINICA',
        subtitle: '¿Sufre de dolor y cojera?',
        options: [
            {
                title: 'Sí',
                value: 8
            },
            {
                title: 'No',
                value: 1
            }
        ]
    },
    {
        title: '',
        subtitle: 'Respecto de la movilidad ¿Abre la pierna menos de 30º?',
        options: [
            {
                title: 'Sí',
                value: 8
            },
            {
                title: 'No',
                value: 0
            }
        ]
    },
    {
        title: '',
        subtitle: 'Edad de inicio de la enfermedad',
        options: [
            {
                title: 'Menos de 4 años',
                value: 0
            },
            {
                title: 'De 4 a 6 años',
                value: 5
            },
            {
                title: 'De 6 a 8 años',
                value: 5
            },
            {
                title: 'De 8 a 10 años',
                value: 40
            },
            {
                title: 'Más de 10 años',
                value: 70
            }

            
        ]
    },
    {
        title: 'VALORACION RADIOLOGICA',
        subtitle: 'OVALIZACION',
        image:require('../../assets/img/EFfotosSemaforo/EFOVALIZACION.png'),
        options: [
            {
                title: 'Sí',
                value: 8
            },
            {
                title: 'No',
                value: 1
            }
        ]
    },
    {
        title: '',
        subtitle: 'APLASTAMIENTO',
        options: [
            {
                image:require('../../assets/img/EFfotosSemaforo/EFHerringA.png'),
                value: 1
            },
            {
                image:require('../../assets/img/EFfotosSemaforo/EFHerringB.png'),
                value: 20
            },
            {
                image:require('../../assets/img/EFfotosSemaforo/EFHerringC.png'),
                value: 30
            },
        ]
    },
    {
        title: '',
        subtitle: 'SUBLUXACION',
        image:require('../../assets/img/EFfotosSemaforo/EFSubluxacion.png'),
        options: [
            {
                title: 'Sí',
                value: 30
            },
            {
                title: 'No',
                value: 1
            }
        ]
    },
    {
        title: '',
        subtitle: 'SIGNO DE GAGE',
        image:require('../../assets/img/EFfotosSemaforo/EFSignoCage.png'),
        options: [
            {
                title: 'Sí',
                value: 5
            },
            {
                title: 'No',
                value: 1
            }
        ]
    },
    
]