export const basicRules = [
  val => val && val.length > 0 || 'Este campo es obligatorio'
];

export const advancedRules = {
  dominios: [
    val => val && val.length > 0 || 'Este campo es obligatorio'
  ],
  fails: [
    val => val !== null && val !== '' || 'Ingrese la cantidad máxima',
    val => val > 0 && val < 6 || 'Debe estar entre 1 y 5'
  ],
  timeout: [
    val => val !== null && val !== '' || 'Ingrese la cantidad máxima',
    val => val > 0 && val < 100001 || 'Debe estar entre 1 y 100000'
  ]
};
