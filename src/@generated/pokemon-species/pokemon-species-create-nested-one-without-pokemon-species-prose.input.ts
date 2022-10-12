import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutPokemon_species_proseInput } from './pokemon-species-create-without-pokemon-species-prose.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutPokemon_species_proseInput } from './pokemon-species-create-or-connect-without-pokemon-species-prose.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class pokemon_speciesCreateNestedOneWithoutPokemon_species_proseInput {

    @Field(() => pokemon_speciesCreateWithoutPokemon_species_proseInput, {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutPokemon_species_proseInput)
    create?: pokemon_speciesCreateWithoutPokemon_species_proseInput;

    @Field(() => pokemon_speciesCreateOrConnectWithoutPokemon_species_proseInput, {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutPokemon_species_proseInput)
    connectOrCreate?: pokemon_speciesCreateOrConnectWithoutPokemon_species_proseInput;

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: pokemon_speciesWhereUniqueInput;
}
