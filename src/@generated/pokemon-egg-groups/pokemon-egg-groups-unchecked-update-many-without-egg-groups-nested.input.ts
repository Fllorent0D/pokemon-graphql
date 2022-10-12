import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_egg_groupsCreateWithoutEgg_groupsInput } from './pokemon-egg-groups-create-without-egg-groups.input';
import { Type } from 'class-transformer';
import { pokemon_egg_groupsCreateOrConnectWithoutEgg_groupsInput } from './pokemon-egg-groups-create-or-connect-without-egg-groups.input';
import { pokemon_egg_groupsUpsertWithWhereUniqueWithoutEgg_groupsInput } from './pokemon-egg-groups-upsert-with-where-unique-without-egg-groups.input';
import { pokemon_egg_groupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';
import { pokemon_egg_groupsUpdateWithWhereUniqueWithoutEgg_groupsInput } from './pokemon-egg-groups-update-with-where-unique-without-egg-groups.input';
import { pokemon_egg_groupsUpdateManyWithWhereWithoutEgg_groupsInput } from './pokemon-egg-groups-update-many-with-where-without-egg-groups.input';
import { pokemon_egg_groupsScalarWhereInput } from './pokemon-egg-groups-scalar-where.input';

@InputType()
export class pokemon_egg_groupsUncheckedUpdateManyWithoutEgg_groupsNestedInput {

    @Field(() => [pokemon_egg_groupsCreateWithoutEgg_groupsInput], {nullable:true})
    @Type(() => pokemon_egg_groupsCreateWithoutEgg_groupsInput)
    create?: Array<pokemon_egg_groupsCreateWithoutEgg_groupsInput>;

    @Field(() => [pokemon_egg_groupsCreateOrConnectWithoutEgg_groupsInput], {nullable:true})
    @Type(() => pokemon_egg_groupsCreateOrConnectWithoutEgg_groupsInput)
    connectOrCreate?: Array<pokemon_egg_groupsCreateOrConnectWithoutEgg_groupsInput>;

    @Field(() => [pokemon_egg_groupsUpsertWithWhereUniqueWithoutEgg_groupsInput], {nullable:true})
    @Type(() => pokemon_egg_groupsUpsertWithWhereUniqueWithoutEgg_groupsInput)
    upsert?: Array<pokemon_egg_groupsUpsertWithWhereUniqueWithoutEgg_groupsInput>;

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

    @Field(() => [pokemon_egg_groupsUpdateWithWhereUniqueWithoutEgg_groupsInput], {nullable:true})
    @Type(() => pokemon_egg_groupsUpdateWithWhereUniqueWithoutEgg_groupsInput)
    update?: Array<pokemon_egg_groupsUpdateWithWhereUniqueWithoutEgg_groupsInput>;

    @Field(() => [pokemon_egg_groupsUpdateManyWithWhereWithoutEgg_groupsInput], {nullable:true})
    @Type(() => pokemon_egg_groupsUpdateManyWithWhereWithoutEgg_groupsInput)
    updateMany?: Array<pokemon_egg_groupsUpdateManyWithWhereWithoutEgg_groupsInput>;

    @Field(() => [pokemon_egg_groupsScalarWhereInput], {nullable:true})
    @Type(() => pokemon_egg_groupsScalarWhereInput)
    deleteMany?: Array<pokemon_egg_groupsScalarWhereInput>;
}
