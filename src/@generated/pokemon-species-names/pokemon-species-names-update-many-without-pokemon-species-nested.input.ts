import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_namesCreateWithoutPokemon_speciesInput } from './pokemon-species-names-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_species_namesCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-species-names-create-or-connect-without-pokemon-species.input';
import { pokemon_species_namesUpsertWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-species-names-upsert-with-where-unique-without-pokemon-species.input';
import { pokemon_species_namesWhereUniqueInput } from './pokemon-species-names-where-unique.input';
import { pokemon_species_namesUpdateWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-species-names-update-with-where-unique-without-pokemon-species.input';
import { pokemon_species_namesUpdateManyWithWhereWithoutPokemon_speciesInput } from './pokemon-species-names-update-many-with-where-without-pokemon-species.input';
import { pokemon_species_namesScalarWhereInput } from './pokemon-species-names-scalar-where.input';

@InputType()
export class pokemon_species_namesUpdateManyWithoutPokemon_speciesNestedInput {

    @Field(() => [pokemon_species_namesCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_namesCreateWithoutPokemon_speciesInput)
    create?: Array<pokemon_species_namesCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_namesCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_namesCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemon_species_namesCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_namesUpsertWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_namesUpsertWithWhereUniqueWithoutPokemon_speciesInput)
    upsert?: Array<pokemon_species_namesUpsertWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    set?: Array<pokemon_species_namesWhereUniqueInput>;

    @Field(() => [pokemon_species_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    disconnect?: Array<pokemon_species_namesWhereUniqueInput>;

    @Field(() => [pokemon_species_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    delete?: Array<pokemon_species_namesWhereUniqueInput>;

    @Field(() => [pokemon_species_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    connect?: Array<pokemon_species_namesWhereUniqueInput>;

    @Field(() => [pokemon_species_namesUpdateWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_namesUpdateWithWhereUniqueWithoutPokemon_speciesInput)
    update?: Array<pokemon_species_namesUpdateWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_namesUpdateManyWithWhereWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_namesUpdateManyWithWhereWithoutPokemon_speciesInput)
    updateMany?: Array<pokemon_species_namesUpdateManyWithWhereWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_namesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_species_namesScalarWhereInput)
    deleteMany?: Array<pokemon_species_namesScalarWhereInput>;
}
