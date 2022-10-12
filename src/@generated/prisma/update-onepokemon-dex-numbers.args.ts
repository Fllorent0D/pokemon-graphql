import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_dex_numbersUpdateInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-update.input';
import { Type } from 'class-transformer';
import { pokemon_dex_numbersWhereUniqueInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-where-unique.input';

@ArgsType()
export class UpdateOnepokemonDexNumbersArgs {

    @Field(() => pokemon_dex_numbersUpdateInput, {nullable:false})
    @Type(() => pokemon_dex_numbersUpdateInput)
    data!: pokemon_dex_numbersUpdateInput;

    @Field(() => pokemon_dex_numbersWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    where!: pokemon_dex_numbersWhereUniqueInput;
}
