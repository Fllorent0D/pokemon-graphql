import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput } from './pokemon-evolution-create-without-pokemon-species-pokemon-evolution-party-species-id-topokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateOrConnectWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput } from './pokemon-evolution-create-or-connect-without-pokemon-species-pokemon-evolution-party-species-id-topokemon-species.input';
import { pokemon_evolutionUpsertWithWhereUniqueWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput } from './pokemon-evolution-upsert-with-where-unique-without-pokemon-species-pokemon-evolution-party-species-id-topokemon-species.input';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { pokemon_evolutionUpdateWithWhereUniqueWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput } from './pokemon-evolution-update-with-where-unique-without-pokemon-species-pokemon-evolution-party-species-id-topokemon-species.input';
import { pokemon_evolutionUpdateManyWithWhereWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput } from './pokemon-evolution-update-many-with-where-without-pokemon-species-pokemon-evolution-party-species-id-topokemon-species.input';
import { pokemon_evolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class pokemon_evolutionUncheckedUpdateManyWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesNestedInput {

    @Field(() => [pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput)
    create?: Array<pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput>;

    @Field(() => [pokemon_evolutionCreateOrConnectWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateOrConnectWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput)
    connectOrCreate?: Array<pokemon_evolutionCreateOrConnectWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput>;

    @Field(() => [pokemon_evolutionUpsertWithWhereUniqueWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_evolutionUpsertWithWhereUniqueWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput)
    upsert?: Array<pokemon_evolutionUpsertWithWhereUniqueWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    set?: Array<pokemon_evolutionWhereUniqueInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    disconnect?: Array<pokemon_evolutionWhereUniqueInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    delete?: Array<pokemon_evolutionWhereUniqueInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    connect?: Array<pokemon_evolutionWhereUniqueInput>;

    @Field(() => [pokemon_evolutionUpdateWithWhereUniqueWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_evolutionUpdateWithWhereUniqueWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput)
    update?: Array<pokemon_evolutionUpdateWithWhereUniqueWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput>;

    @Field(() => [pokemon_evolutionUpdateManyWithWhereWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_evolutionUpdateManyWithWhereWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput)
    updateMany?: Array<pokemon_evolutionUpdateManyWithWhereWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput>;

    @Field(() => [pokemon_evolutionScalarWhereInput], {nullable:true})
    @Type(() => pokemon_evolutionScalarWhereInput)
    deleteMany?: Array<pokemon_evolutionScalarWhereInput>;
}
