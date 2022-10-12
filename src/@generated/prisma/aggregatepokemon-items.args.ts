import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_itemsWhereInput } from '../pokemon-items/pokemon-items-where.input';
import { Type } from 'class-transformer';
import { pokemon_itemsOrderByWithRelationInput } from '../pokemon-items/pokemon-items-order-by-with-relation.input';
import { pokemon_itemsWhereUniqueInput } from '../pokemon-items/pokemon-items-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatepokemonItemsArgs {

    @Field(() => pokemon_itemsWhereInput, {nullable:true})
    @Type(() => pokemon_itemsWhereInput)
    where?: pokemon_itemsWhereInput;

    @Field(() => [pokemon_itemsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_itemsOrderByWithRelationInput>;

    @Field(() => pokemon_itemsWhereUniqueInput, {nullable:true})
    cursor?: pokemon_itemsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
