import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonWhereInput } from '../pokemon/pokemon-where.input';

@InputType()
export class PokemonRelationFilter {

    @Field(() => pokemonWhereInput, {nullable:true})
    is?: pokemonWhereInput;

    @Field(() => pokemonWhereInput, {nullable:true})
    isNot?: pokemonWhereInput;
}
