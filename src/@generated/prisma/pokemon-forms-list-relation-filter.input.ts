import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsWhereInput } from '../pokemon-forms/pokemon-forms-where.input';

@InputType()
export class Pokemon_formsListRelationFilter {

    @Field(() => pokemon_formsWhereInput, {nullable:true})
    every?: pokemon_formsWhereInput;

    @Field(() => pokemon_formsWhereInput, {nullable:true})
    some?: pokemon_formsWhereInput;

    @Field(() => pokemon_formsWhereInput, {nullable:true})
    none?: pokemon_formsWhereInput;
}
