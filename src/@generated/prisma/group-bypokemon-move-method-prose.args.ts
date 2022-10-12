import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_method_proseWhereInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-where.input';
import { Type } from 'class-transformer';
import { pokemon_move_method_proseOrderByWithAggregationInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-order-by-with-aggregation.input';
import { Pokemon_move_method_proseScalarFieldEnum } from './pokemon-move-method-prose-scalar-field.enum';
import { pokemon_move_method_proseScalarWhereWithAggregatesInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonMoveMethodProseArgs {

    @Field(() => pokemon_move_method_proseWhereInput, {nullable:true})
    @Type(() => pokemon_move_method_proseWhereInput)
    where?: pokemon_move_method_proseWhereInput;

    @Field(() => [pokemon_move_method_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_move_method_proseOrderByWithAggregationInput>;

    @Field(() => [Pokemon_move_method_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_move_method_proseScalarFieldEnum>;

    @Field(() => pokemon_move_method_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_move_method_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
