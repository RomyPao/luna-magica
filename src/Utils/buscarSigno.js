const buscarSigno = (mes, dia) => {
  let signo = 0;
  if ((dia >= 21 && mes === 3) || (dia <= 20 && mes === 4)) signo = 0;
  if ((dia >= 21 && mes === 4) || (dia <= 21 && mes === 5)) signo = 1;
  if ((dia >= 22 && mes === 5) || (dia <= 21 && mes === 6)) signo = 2;
  if ((dia >= 22 && mes === 6) || (dia <= 23 && mes === 7)) signo = 3;
  if ((dia >= 24 && mes === 7) || (dia <= 23 && mes === 8)) signo = 4;
  if ((dia >= 24 && mes === 8) || (dia <= 23 && mes === 9)) signo = 5;
  if ((dia >= 24 && mes === 9) || (dia <= 23 && mes === 10)) signo = 6;
  if ((dia >= 24 && mes === 10) || (dia <= 22 && mes === 11)) signo = 7;
  if ((dia >= 23 && mes === 11) || (dia <= 21 && mes === 12)) signo = 8;
  if ((dia >= 22 && mes === 12) || (dia <= 20 && mes === 1)) signo = 9;
  if ((dia >= 21 && mes === 1) || (dia <= 19 && mes === 2)) signo = 10;
  if ((dia >= 20 && mes === 2) || (dia <= 20 && mes === 3)) signo = 11;
  return signo;
};
export default buscarSigno;