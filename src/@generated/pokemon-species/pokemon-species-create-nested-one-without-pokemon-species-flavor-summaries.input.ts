import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutPokemon_species_flavor_summariesInput } from './pokemon-species-create-without-pokemon-species-flavor-summaries.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutPokemon_species_flavor_summariesInput } from './pokemon-species-create-or-connect-without-pokemon-species-flavor-summaries.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class pokemon_speciesCreateNestedOneWithoutPokemon_species_flavor_summariesInput {

    @Field(() => pokemon_speciesCreateWithoutPokemon_species_flavor_summariesInput, {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutPokemon_species_flavor_summariesInput)
    create?: pokemon_speciesCreateWithoutPokemon_species_flavor_summariesInput;

    @Field(() => pokemon_speciesCreateOrConnectWithoutPokemon_species_flavor_summariesInput, {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutPokemon_species_flavor_summariesInput)
    connectOrCreate?: pokemon_speciesCreateOrConnectWithoutPokemon_species_flavor_summariesInput;

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: pokemon_speciesWhereUniqueInput;
}
