import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_methodsWhereInput } from '../pokemon-move-methods/pokemon-move-methods-where.input';

@InputType()
export class Pokemon_move_methodsRelationFilter {

    @Field(() => pokemon_move_methodsWhereInput, {nullable:true})
    is?: pokemon_move_methodsWhereInput;

    @Field(() => pokemon_move_methodsWhereInput, {nullable:true})
    isNot?: pokemon_move_methodsWhereInput;
}
