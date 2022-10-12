import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_dex_numbersWhereUniqueInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokemonDexNumbersArgs {

    @Field(() => pokemon_dex_numbersWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    where!: pokemon_dex_numbersWhereUniqueInput;
}
