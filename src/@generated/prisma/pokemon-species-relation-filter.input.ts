import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereInput } from '../pokemon-species/pokemon-species-where.input';

@InputType()
export class Pokemon_speciesRelationFilter {

    @Field(() => pokemon_speciesWhereInput, {nullable:true})
    is?: pokemon_speciesWhereInput;

    @Field(() => pokemon_speciesWhereInput, {nullable:true})
    isNot?: pokemon_speciesWhereInput;
}
