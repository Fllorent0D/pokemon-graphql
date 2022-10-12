import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_method_proseWhereInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-where.input';
import { Type } from 'class-transformer';
import { pokemon_move_method_proseOrderByWithRelationInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-order-by-with-relation.input';
import { pokemon_move_method_proseWhereUniqueInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_move_method_proseScalarFieldEnum } from './pokemon-move-method-prose-scalar-field.enum';

@ArgsType()
export class FindFirstpokemonMoveMethodProseArgs {

    @Field(() => pokemon_move_method_proseWhereInput, {nullable:true})
    @Type(() => pokemon_move_method_proseWhereInput)
    where?: pokemon_move_method_proseWhereInput;

    @Field(() => [pokemon_move_method_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_move_method_proseOrderByWithRelationInput>;

    @Field(() => pokemon_move_method_proseWhereUniqueInput, {nullable:true})
    cursor?: pokemon_move_method_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_move_method_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_move_method_proseScalarFieldEnum>;
}
