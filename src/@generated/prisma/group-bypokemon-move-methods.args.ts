import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_methodsWhereInput } from '../pokemon-move-methods/pokemon-move-methods-where.input';
import { Type } from 'class-transformer';
import { pokemon_move_methodsOrderByWithAggregationInput } from '../pokemon-move-methods/pokemon-move-methods-order-by-with-aggregation.input';
import { Pokemon_move_methodsScalarFieldEnum } from './pokemon-move-methods-scalar-field.enum';
import { pokemon_move_methodsScalarWhereWithAggregatesInput } from '../pokemon-move-methods/pokemon-move-methods-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonMoveMethodsArgs {

    @Field(() => pokemon_move_methodsWhereInput, {nullable:true})
    @Type(() => pokemon_move_methodsWhereInput)
    where?: pokemon_move_methodsWhereInput;

    @Field(() => [pokemon_move_methodsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_move_methodsOrderByWithAggregationInput>;

    @Field(() => [Pokemon_move_methodsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_move_methodsScalarFieldEnum>;

    @Field(() => pokemon_move_methodsScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_move_methodsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
