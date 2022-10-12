import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shapesWhereInput } from '../pokemon-shapes/pokemon-shapes-where.input';

@InputType()
export class Pokemon_shapesRelationFilter {

    @Field(() => pokemon_shapesWhereInput, {nullable:true})
    is?: pokemon_shapesWhereInput;

    @Field(() => pokemon_shapesWhereInput, {nullable:true})
    isNot?: pokemon_shapesWhereInput;
}
