import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_colorsWhereInput } from '../pokemon-colors/pokemon-colors-where.input';

@InputType()
export class Pokemon_colorsRelationFilter {

    @Field(() => pokemon_colorsWhereInput, {nullable:true})
    is?: pokemon_colorsWhereInput;

    @Field(() => pokemon_colorsWhereInput, {nullable:true})
    isNot?: pokemon_colorsWhereInput;
}
