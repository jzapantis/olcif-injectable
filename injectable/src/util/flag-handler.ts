import {Flags} from '@oclif/core'

export const injectableFlags = {
  from: Flags.string({char: 'f', description: 'Whom is saying hello', required: true}),
}
