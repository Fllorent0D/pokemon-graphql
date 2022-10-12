import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsWhereInput } from '../pokemon-items/pokemon-items-where.input';

@InputType()
export class Pokemon_itemsListRelationFilter {

    @Field(() => pokemon_itemsWhereInput, {nullable:true})
    every?: pokemon_itemsWhereInput;

    @Field(() => pokemon_itemsWhereInput, {nullable:true})
    some?: pokemon_itemsWhereInput;

    @Field(() => pokemon_itemsWhereInput, {nullable:true})
    none?: pokemon_itemsWhereInput;
}
