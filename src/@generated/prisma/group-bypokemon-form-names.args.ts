import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_namesWhereInput } from '../pokemon-form-names/pokemon-form-names-where.input';
import { Type } from 'class-transformer';
import { pokemon_form_namesOrderByWithAggregationInput } from '../pokemon-form-names/pokemon-form-names-order-by-with-aggregation.input';
import { Pokemon_form_namesScalarFieldEnum } from './pokemon-form-names-scalar-field.enum';
import { pokemon_form_namesScalarWhereWithAggregatesInput } from '../pokemon-form-names/pokemon-form-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonFormNamesArgs {

    @Field(() => pokemon_form_namesWhereInput, {nullable:true})
    @Type(() => pokemon_form_namesWhereInput)
    where?: pokemon_form_namesWhereInput;

    @Field(() => [pokemon_form_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_form_namesOrderByWithAggregationInput>;

    @Field(() => [Pokemon_form_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_form_namesScalarFieldEnum>;

    @Field(() => pokemon_form_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_form_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
