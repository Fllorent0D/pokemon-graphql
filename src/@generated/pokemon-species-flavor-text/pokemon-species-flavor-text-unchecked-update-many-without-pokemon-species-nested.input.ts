import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_textCreateWithoutPokemon_speciesInput } from './pokemon-species-flavor-text-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-species-flavor-text-create-or-connect-without-pokemon-species.input';
import { pokemon_species_flavor_textUpsertWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-species-flavor-text-upsert-with-where-unique-without-pokemon-species.input';
import { pokemon_species_flavor_textWhereUniqueInput } from './pokemon-species-flavor-text-where-unique.input';
import { pokemon_species_flavor_textUpdateWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-species-flavor-text-update-with-where-unique-without-pokemon-species.input';
import { pokemon_species_flavor_textUpdateManyWithWhereWithoutPokemon_speciesInput } from './pokemon-species-flavor-text-update-many-with-where-without-pokemon-species.input';
import { pokemon_species_flavor_textScalarWhereInput } from './pokemon-species-flavor-text-scalar-where.input';

@InputType()
export class pokemon_species_flavor_textUncheckedUpdateManyWithoutPokemon_speciesNestedInput {

    @Field(() => [pokemon_species_flavor_textCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textCreateWithoutPokemon_speciesInput)
    create?: Array<pokemon_species_flavor_textCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_flavor_textCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemon_species_flavor_textCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_flavor_textUpsertWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textUpsertWithWhereUniqueWithoutPokemon_speciesInput)
    upsert?: Array<pokemon_species_flavor_textUpsertWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    set?: Array<pokemon_species_flavor_textWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    disconnect?: Array<pokemon_species_flavor_textWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    delete?: Array<pokemon_species_flavor_textWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    connect?: Array<pokemon_species_flavor_textWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_textUpdateWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textUpdateWithWhereUniqueWithoutPokemon_speciesInput)
    update?: Array<pokemon_species_flavor_textUpdateWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_flavor_textUpdateManyWithWhereWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textUpdateManyWithWhereWithoutPokemon_speciesInput)
    updateMany?: Array<pokemon_species_flavor_textUpdateManyWithWhereWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_flavor_textScalarWhereInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textScalarWhereInput)
    deleteMany?: Array<pokemon_species_flavor_textScalarWhereInput>;
}
