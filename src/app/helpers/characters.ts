export const CHARACTERS: ICharacterStatus[] = [
  {
    className: 'DIPLOMATA',
    life: 60,
    money: 200,
    perception: 10,
    criativity: 10,
    strength: 8,
    mechanicalInt: 8,
    history:
      'A Capital - Localizada no centro da Ilha a Capital costuma ter os grandes Diplomatas que cuidam da parte politica de toda a nação. Comandada pelos 6 Fire Heads e seu grande Tribunal Brilhante',
  },
  {
    className: 'Caçador',
    life: 100,
    money: 80,
    perception: 16,
    criativity: 6,
    strength: 14,
    mechanicalInt: 8,
    history:
      'A Floresta - Os Vagalumes de Fogo é a maior fonte de energia da Neon Light, A floresta esta repleto deles, porem a Fauna e Flora da ilha das luzes e sempre uma surpresa.',
  },
  {
    className: 'Engenheiro',
    life: 90,
    money: 120,
    perception: 10,
    criativity: 8,
    strength: 12,
    mechanicalInt: 16,
    history:
      'As Esteiras Industriais - Muitos Vagalumes de Fogo sao coletados, cada um com seu nivel de energia! è muito importante separar cada um deles nas grandes esteiras',
  },
  {
    className: 'Cientista',
    life: 75,
    money: 160,
    perception: 10,
    criativity: 14,
    strength: 8,
    mechanicalInt: 8,
    history:
      'O Grande Conversor - Após os cientistas descobrirem como transformar a energia dos Vagalumes de Fogo em energia, eles criaram um grande conversor para maximizar a quantidade de energia gerada',
  },
  {
    className: 'Inventor',
    life: 70,
    money: 100,
    perception: 10,
    criativity: 16,
    strength: 10,
    mechanicalInt: 12,
    history:
      'A Criacao da Luz - Conhecida como a ala dos Ferreiros, cientistas e Aspirantes a inventores, A Cidade criação de Luz contempla qualquer tipo de ferramenta e artificio de cunho duvidosos que deseja',
  },
  {
    className: 'Delinquente',
    life: 85,
    money: 50,
    perception: 10,
    criativity: 10,
    strength: 10,
    mechanicalInt: 6,
    history:
      'Neon City - A área residencial da Ilha, a grande parte dos trabalhadores e residentes da ilha moram nessa Ala',
  },
  {
    className: 'Robô',
    life: 50,
    money: 0,
    perception: 12,
    criativity: 0,
    strength: 18,
    mechanicalInt: 14,
    history:
      'O Armazem - Tudo que é criado, necessita ser guardado, O armazém é simplesmente onde é guardado tudo que é produzido para que a economia funcione',
  },
];

export interface ICharacterStatus {
  className: string;
  classImg?: string;
  life: number;
  money: number;
  perception: number;
  criativity: number;
  strength: number;
  mechanicalInt: number;
  history: string;
}
