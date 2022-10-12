import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_dex_numbersWhereInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-where.input';
import { Type } from 'class-transformer';
import { pokemon_dex_numbersOrderByWithAggregationInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-order-by-with-aggregation.input';
import { Pokemon_dex_numbersScalarFieldEnum } from './pokemon-dex-numbers-scalar-field.enum';
import { pokemon_dex_numbersScalarWhereWithAggregatesInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonDexNumbersArgs {

    @Field(() => pokemon_dex_numbersWhereInput, {nullable:true})
    @Type(() => pokemon_dex_numbersWhereInput)
    where?: pokemon_dex_numbersWhereInput;

    @Field(() => [pokemon_dex_numbersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_dex_numbersOrderByWithAggregationInput>;

    @Field(() => [Pokemon_dex_numbersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_dex_numbersScalarFieldEnum>;

    @Field(() => pokemon_dex_numbersScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_dex_numbersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
