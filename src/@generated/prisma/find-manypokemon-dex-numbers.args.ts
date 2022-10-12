import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_dex_numbersWhereInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-where.input';
import { Type } from 'class-transformer';
import { pokemon_dex_numbersOrderByWithRelationInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-order-by-with-relation.input';
import { pokemon_dex_numbersWhereUniqueInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_dex_numbersScalarFieldEnum } from './pokemon-dex-numbers-scalar-field.enum';

@ArgsType()
export class FindManypokemonDexNumbersArgs {

    @Field(() => pokemon_dex_numbersWhereInput, {nullable:true})
    @Type(() => pokemon_dex_numbersWhereInput)
    where?: pokemon_dex_numbersWhereInput;

    @Field(() => [pokemon_dex_numbersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_dex_numbersOrderByWithRelationInput>;

    @Field(() => pokemon_dex_numbersWhereUniqueInput, {nullable:true})
    cursor?: pokemon_dex_numbersWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_dex_numbersScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_dex_numbersScalarFieldEnum>;
}
