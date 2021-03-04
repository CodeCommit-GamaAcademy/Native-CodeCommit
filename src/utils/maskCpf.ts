const maskCPF = (cpfValue: string) => {
  const onlyCpf = cpfValue
    .split('')
    .filter((letter) => !isNaN(Number(letter)))
    .join('');
  const maskParts = [];

  const numberOfParts = Math.ceil(onlyCpf.length / 3);

  for (let i = 0; i < numberOfParts; i++) {
    maskParts.push(onlyCpf.slice(3 * i, 3 * i + 3));
  }

  const mask = `${maskParts.slice(0, 3).join('.')}${maskParts.slice(3).length === 0 ? '' : `-${maskParts.slice(3, 5).join('')}`}`;

  return mask;
};

export default maskCPF;
