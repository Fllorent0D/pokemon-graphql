import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonWhereInput } from '../pokemon/pokemon-where.input';

@InputType()
export class PokemonListRelationFilter {

    @Field(() => pokemonWhereInput, {nullable:true})
    every?: pokemonWhereInput;

    @Field(() => pokemonWhereInput, {nullable:true})
    some?: pokemonWhereInput;

    @Field(() => pokemonWhereInput, {nullable:true})
    none?: pokemonWhereInput;
}
