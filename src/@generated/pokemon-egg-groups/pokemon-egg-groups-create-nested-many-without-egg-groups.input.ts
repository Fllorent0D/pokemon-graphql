import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_egg_groupsCreateWithoutEgg_groupsInput } from './pokemon-egg-groups-create-without-egg-groups.input';
import { Type } from 'class-transformer';
import { pokemon_egg_groupsCreateOrConnectWithoutEgg_groupsInput } from './pokemon-egg-groups-create-or-connect-without-egg-groups.input';
import { pokemon_egg_groupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';

@InputType()
export class pokemon_egg_groupsCreateNestedManyWithoutEgg_groupsInput {

    @Field(() => [pokemon_egg_groupsCreateWithoutEgg_groupsInput], {nullable:true})
    @Type(() => pokemon_egg_groupsCreateWithoutEgg_groupsInput)
    create?: Array<pokemon_egg_groupsCreateWithoutEgg_groupsInput>;

    @Field(() => [pokemon_egg_groupsCreateOrConnectWithoutEgg_groupsInput], {nullable:true})
    @Type(() => pokemon_egg_groupsCreateOrConnectWithoutEgg_groupsInput)
    connectOrCreate?: Array<pokemon_egg_groupsCreateOrConnectWithoutEgg_groupsInput>;

    @Field(() => [pokemon_egg_groupsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_egg_groupsWhereUniqueInput)
    connect?: Array<pokemon_egg_groupsWhereUniqueInput>;
}
