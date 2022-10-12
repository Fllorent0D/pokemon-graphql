import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shape_proseWhereInput } from '../pokemon-shape-prose/pokemon-shape-prose-where.input';

@InputType()
export class Pokemon_shape_proseListRelationFilter {

    @Field(() => pokemon_shape_proseWhereInput, {nullable:true})
    every?: pokemon_shape_proseWhereInput;

    @Field(() => pokemon_shape_proseWhereInput, {nullable:true})
    some?: pokemon_shape_proseWhereInput;

    @Field(() => pokemon_shape_proseWhereInput, {nullable:true})
    none?: pokemon_shape_proseWhereInput;
}
