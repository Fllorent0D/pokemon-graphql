import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsWhereInput } from '../pokemon-forms/pokemon-forms-where.input';

@InputType()
export class Pokemon_formsRelationFilter {

    @Field(() => pokemon_formsWhereInput, {nullable:true})
    is?: pokemon_formsWhereInput;

    @Field(() => pokemon_formsWhereInput, {nullable:true})
    isNot?: pokemon_formsWhereInput;
}
