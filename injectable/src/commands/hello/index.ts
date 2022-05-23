import {Command} from '@oclif/core'
import {injectableFlags, injectableArgs} from '../../util'

export default class Hello extends Command {
  static description = 'Say hello'

  static examples = [
    'injectable hello John -f joe',
  ]

  static flags = injectableFlags

  static args = injectableArgs

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Hello)

    this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
  }
}
