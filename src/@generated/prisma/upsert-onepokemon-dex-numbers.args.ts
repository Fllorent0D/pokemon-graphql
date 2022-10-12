import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_dex_numbersWhereUniqueInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_dex_numbersCreateInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-create.input';
import { pokemon_dex_numbersUpdateInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-update.input';

@ArgsType()
export class UpsertOnepokemonDexNumbersArgs {

    @Field(() => pokemon_dex_numbersWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    where!: pokemon_dex_numbersWhereUniqueInput;

    @Field(() => pokemon_dex_numbersCreateInput, {nullable:false})
    @Type(() => pokemon_dex_numbersCreateInput)
    create!: pokemon_dex_numbersCreateInput;

    @Field(() => pokemon_dex_numbersUpdateInput, {nullable:false})
    @Type(() => pokemon_dex_numbersUpdateInput)
    update!: pokemon_dex_numbersUpdateInput;
}
