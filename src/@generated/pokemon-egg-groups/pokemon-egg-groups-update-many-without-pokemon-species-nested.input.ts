import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_egg_groupsCreateWithoutPokemon_speciesInput } from './pokemon-egg-groups-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_egg_groupsCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-egg-groups-create-or-connect-without-pokemon-species.input';
import { pokemon_egg_groupsUpsertWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-egg-groups-upsert-with-where-unique-without-pokemon-species.input';
import { pokemon_egg_groupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';
import { pokemon_egg_groupsUpdateWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-egg-groups-update-with-where-unique-without-pokemon-species.input';
import { pokemon_egg_groupsUpdateManyWithWhereWithoutPokemon_speciesInput } from './pokemon-egg-groups-update-many-with-where-without-pokemon-species.input';
import { pokemon_egg_groupsScalarWhereInput } from './pokemon-egg-groups-scalar-where.input';

@InputType()
export class pokemon_egg_groupsUpdateManyWithoutPokemon_speciesNestedInput {

    @Field(() => [pokemon_egg_groupsCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_egg_groupsCreateWithoutPokemon_speciesInput)
    create?: Array<pokemon_egg_groupsCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_egg_groupsCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_egg_groupsCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemon_egg_groupsCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_egg_groupsUpsertWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_egg_groupsUpsertWithWhereUniqueWithoutPokemon_speciesInput)
    upsert?: Array<pokemon_egg_groupsUpsertWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_egg_groupsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_egg_groupsWhereUniqueInput)
    set?: Array<pokemon_egg_groupsWhereUniqueInput>;

    @Field(() => [pokemon_egg_groupsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_egg_groupsWhereUniqueInput)
    disconnect?: Array<pokemon_egg_groupsWhereUniqueInput>;

    @Field(() => [pokemon_egg_groupsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_egg_groupsWhereUniqueInput)
    delete?: Array<pokemon_egg_groupsWhereUniqueInput>;

    @Field(() => [pokemon_egg_groupsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_egg_groupsWhereUniqueInput)
    connect?: Array<pokemon_egg_groupsWhereUniqueInput>;

    @Field(() => [pokemon_egg_groupsUpdateWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_egg_groupsUpdateWithWhereUniqueWithoutPokemon_speciesInput)
    update?: Array<pokemon_egg_groupsUpdateWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_egg_groupsUpdateManyWithWhereWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_egg_groupsUpdateManyWithWhereWithoutPokemon_speciesInput)
    updateMany?: Array<pokemon_egg_groupsUpdateManyWithWhereWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_egg_groupsScalarWhereInput], {nullable:true})
    @Type(() => pokemon_egg_groupsScalarWhereInput)
    deleteMany?: Array<pokemon_egg_groupsScalarWhereInput>;
}
