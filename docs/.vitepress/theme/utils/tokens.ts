
// Token type definitions and utilities
export const tokenTypes = {
  jwt: {
    label: 'JWT Token',
    placeholder: 'eyJhbGciOiJIUzI1NiIs...',
    validate: (token: string) => token.startsWith('eyJ'),
    decode: (token: string) => {
      const [header, payload] = token.split('.');
      return {
        header: atob(header),
        payload: atob(payload)
      };
    }
  },
  bearer: {
    label: 'Bearer Token',
    placeholder: 'Bearer ya29.a0AfH6...',
    validate: (token: string) => token.startsWith('Bearer '),
    decode: (token: string) => ({
      type: 'Bearer',
      token: token.replace('Bearer ', '')
    })
  },
  session: {
    label: 'Session Token',
    placeholder: 'connect.sid=s%3A12345...',
    validate: (token: string) => token.includes('='),
    decode: (token: string) => {
      const [key, value] = token.split('=');
      return { [key]: value };
    }
  }
}

export function validateToken(token: string, type: string) {
  return tokenTypes[type]?.validate(token) || false
}

export function decodeToken(token: string, type: string) {
  return tokenTypes[type]?.decode(token) || null
}
