import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_namesWhereInput } from '../pokemon-form-names/pokemon-form-names-where.input';

@InputType()
export class Pokemon_form_namesListRelationFilter {

    @Field(() => pokemon_form_namesWhereInput, {nullable:true})
    every?: pokemon_form_namesWhereInput;

    @Field(() => pokemon_form_namesWhereInput, {nullable:true})
    some?: pokemon_form_namesWhereInput;

    @Field(() => pokemon_form_namesWhereInput, {nullable:true})
    none?: pokemon_form_namesWhereInput;
}
