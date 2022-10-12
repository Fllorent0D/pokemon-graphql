import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_color_namesWhereInput } from '../pokemon-color-names/pokemon-color-names-where.input';

@InputType()
export class Pokemon_color_namesListRelationFilter {

    @Field(() => pokemon_color_namesWhereInput, {nullable:true})
    every?: pokemon_color_namesWhereInput;

    @Field(() => pokemon_color_namesWhereInput, {nullable:true})
    some?: pokemon_color_namesWhereInput;

    @Field(() => pokemon_color_namesWhereInput, {nullable:true})
    none?: pokemon_color_namesWhereInput;
}
