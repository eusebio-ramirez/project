export const rubrosHistoricos = [
  {
    title: '2024',
    description: 'Disponibilidad de los trimestres anteriores',
    content: [
      {
        title: 'Primer Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Segundo Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Tercer Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Cuarto Trimestre',
        file: 'https://www.google.com/'
      }
    ]
  },
  {
    title: '2023',
    description: 'Disponibilidad de los trimestres anteriores',
    content: [
      {
        title: 'Primer Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Segundo Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Tercer Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Cuarto Trimestre',
        file: 'https://www.google.com/'
      }
    ]
  },
  {
    title: '2022',
    description: 'Disponibilidad de los trimestres anteriores',
    content: [
      {
        title: 'Primer Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Segundo Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Tercer Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Cuarto Trimestre',
        file: 'https://www.google.com/'
      }
    ]
  },
  {
    title: '2021',
    description: 'Disponibilidad de los trimestres anteriores',
    content: [
      {
        title: 'Primer Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Segundo Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Tercer Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Cuarto Trimestre',
        file: 'https://www.google.com/'
      }
    ]
  },
  {
    title: '2020',
    description: 'Disponibilidad de los trimestres anteriores',
    content: [
      {
        title: 'Primer Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Segundo Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Tercer Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Cuarto Trimestre',
        file: 'https://www.google.com/'
      }
    ]
  },
  {
    title: '2019',
    description: 'Disponibilidad de los trimestres anteriores',
    content: [
      {
        title: 'Primer Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Segundo Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Tercer Trimestre',
        file: 'https://www.google.com/'
      },
      {
        title: 'Cuarto Trimestre',
        file: 'https://www.google.com/'
      }
    ]
  }
];

export const fetchRubrosHistoricos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(rubrosHistoricos);
    }, 1000);
  });
}