import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesUpdateWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput } from './pokemon-species-update-without-pokemon-evolution-pokemon-evolution-trade-species-id-topokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput } from './pokemon-species-create-without-pokemon-evolution-pokemon-evolution-trade-species-id-topokemon-species.input';

@InputType()
export class pokemon_speciesUpsertWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput {

    @Field(() => pokemon_speciesUpdateWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput)
    update!: pokemon_speciesUpdateWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput;

    @Field(() => pokemon_speciesCreateWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput)
    create!: pokemon_speciesCreateWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput;
}
