import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput } from './pokemon-evolution-create-without-pokemon-species-pokemon-evolution-party-species-id-topokemon-species.input';

@InputType()
export class pokemon_evolutionCreateOrConnectWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput {

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    where!: pokemon_evolutionWhereUniqueInput;

    @Field(() => pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput)
    create!: pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput;
}
