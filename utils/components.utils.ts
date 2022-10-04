export const selectButtonColor = (color: string | undefined) => {
  switch (color) {
    case 'light':
      return '200'
    case 'mid':
      return '400'
    case 'dark':
      return '500'
  }
}
