import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_dex_numbersCreateInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonDexNumbersArgs {

    @Field(() => pokemon_dex_numbersCreateInput, {nullable:false})
    @Type(() => pokemon_dex_numbersCreateInput)
    data!: pokemon_dex_numbersCreateInput;
}
