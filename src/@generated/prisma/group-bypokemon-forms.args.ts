import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_formsWhereInput } from '../pokemon-forms/pokemon-forms-where.input';
import { Type } from 'class-transformer';
import { pokemon_formsOrderByWithAggregationInput } from '../pokemon-forms/pokemon-forms-order-by-with-aggregation.input';
import { Pokemon_formsScalarFieldEnum } from './pokemon-forms-scalar-field.enum';
import { pokemon_formsScalarWhereWithAggregatesInput } from '../pokemon-forms/pokemon-forms-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonFormsArgs {

    @Field(() => pokemon_formsWhereInput, {nullable:true})
    @Type(() => pokemon_formsWhereInput)
    where?: pokemon_formsWhereInput;

    @Field(() => [pokemon_formsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_formsOrderByWithAggregationInput>;

    @Field(() => [Pokemon_formsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_formsScalarFieldEnum>;

    @Field(() => pokemon_formsScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_formsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
