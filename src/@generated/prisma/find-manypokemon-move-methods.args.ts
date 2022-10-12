import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_methodsWhereInput } from '../pokemon-move-methods/pokemon-move-methods-where.input';
import { Type } from 'class-transformer';
import { pokemon_move_methodsOrderByWithRelationInput } from '../pokemon-move-methods/pokemon-move-methods-order-by-with-relation.input';
import { pokemon_move_methodsWhereUniqueInput } from '../pokemon-move-methods/pokemon-move-methods-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_move_methodsScalarFieldEnum } from './pokemon-move-methods-scalar-field.enum';

@ArgsType()
export class FindManypokemonMoveMethodsArgs {

    @Field(() => pokemon_move_methodsWhereInput, {nullable:true})
    @Type(() => pokemon_move_methodsWhereInput)
    where?: pokemon_move_methodsWhereInput;

    @Field(() => [pokemon_move_methodsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_move_methodsOrderByWithRelationInput>;

    @Field(() => pokemon_move_methodsWhereUniqueInput, {nullable:true})
    cursor?: pokemon_move_methodsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_move_methodsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_move_methodsScalarFieldEnum>;
}
