import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_typesWhereInput } from '../pokemon-types/pokemon-types-where.input';

@InputType()
export class Pokemon_typesListRelationFilter {

    @Field(() => pokemon_typesWhereInput, {nullable:true})
    every?: pokemon_typesWhereInput;

    @Field(() => pokemon_typesWhereInput, {nullable:true})
    some?: pokemon_typesWhereInput;

    @Field(() => pokemon_typesWhereInput, {nullable:true})
    none?: pokemon_typesWhereInput;
}
