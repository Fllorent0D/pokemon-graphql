import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_egg_groupsCreateWithoutPokemon_speciesInput } from './pokemon-egg-groups-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_egg_groupsCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-egg-groups-create-or-connect-without-pokemon-species.input';
import { pokemon_egg_groupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';

@InputType()
export class pokemon_egg_groupsUncheckedCreateNestedManyWithoutPokemon_speciesInput {

    @Field(() => [pokemon_egg_groupsCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_egg_groupsCreateWithoutPokemon_speciesInput)
    create?: Array<pokemon_egg_groupsCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_egg_groupsCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_egg_groupsCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemon_egg_groupsCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_egg_groupsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_egg_groupsWhereUniqueInput)
    connect?: Array<pokemon_egg_groupsWhereUniqueInput>;
}
