import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionWhereInput } from '../pokemon-evolution/pokemon-evolution-where.input';

@InputType()
export class Pokemon_evolutionListRelationFilter {

    @Field(() => pokemon_evolutionWhereInput, {nullable:true})
    every?: pokemon_evolutionWhereInput;

    @Field(() => pokemon_evolutionWhereInput, {nullable:true})
    some?: pokemon_evolutionWhereInput;

    @Field(() => pokemon_evolutionWhereInput, {nullable:true})
    none?: pokemon_evolutionWhereInput;
}
