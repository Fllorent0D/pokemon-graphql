import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput } from './pokemon-species-create-without-pokemon-evolution-pokemon-evolution-evolved-species-id-topokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput } from './pokemon-species-create-or-connect-without-pokemon-evolution-pokemon-evolution-evolved-species-id-topokemon-species.input';
import { pokemon_speciesUpsertWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput } from './pokemon-species-upsert-without-pokemon-evolution-pokemon-evolution-evolved-species-id-topokemon-species.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { pokemon_speciesUpdateWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput } from './pokemon-species-update-without-pokemon-evolution-pokemon-evolution-evolved-species-id-topokemon-species.input';

@InputType()
export class pokemon_speciesUpdateOneRequiredWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesNestedInput {

    @Field(() => pokemon_speciesCreateWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput)
    create?: pokemon_speciesCreateWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput;

    @Field(() => pokemon_speciesCreateOrConnectWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput)
    connectOrCreate?: pokemon_speciesCreateOrConnectWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput;

    @Field(() => pokemon_speciesUpsertWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_speciesUpsertWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput)
    upsert?: pokemon_speciesUpsertWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput;

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesUpdateWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_speciesUpdateWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput)
    update?: pokemon_speciesUpdateWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput;
}
