// ----------------------------------------------------------------------

export default function getColorName(hex) {
  let color;

  switch (hex) {
    case '#00AB55':
      color = 'Green';
      break;
    case '#000000':
      color = 'Black';
      break;
    case '#FFFFFF':
      color = 'White';
      break;
    case '#FFC0CB':
      color = 'Pink';
      break;
    case '#FF4842':
      color = 'Red';
      break;
    case '#1890FF':
      color = 'Blue';
      break;
    case '#94D82D':
      color = 'Greenyellow';
      break;
    case '#FFC107':
      color = 'Orange';
      break;
    default:
      color = hex;
  }

  return color;
}
