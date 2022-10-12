import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_method_proseWhereInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-where.input';

@InputType()
export class Pokemon_move_method_proseListRelationFilter {

    @Field(() => pokemon_move_method_proseWhereInput, {nullable:true})
    every?: pokemon_move_method_proseWhereInput;

    @Field(() => pokemon_move_method_proseWhereInput, {nullable:true})
    some?: pokemon_move_method_proseWhereInput;

    @Field(() => pokemon_move_method_proseWhereInput, {nullable:true})
    none?: pokemon_move_method_proseWhereInput;
}
