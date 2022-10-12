import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutPokedexesInput } from './version-groups-create-without-pokedexes.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutPokedexesInput } from './version-groups-create-or-connect-without-pokedexes.input';
import { version_groupsUpsertWithWhereUniqueWithoutPokedexesInput } from './version-groups-upsert-with-where-unique-without-pokedexes.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { version_groupsUpdateWithWhereUniqueWithoutPokedexesInput } from './version-groups-update-with-where-unique-without-pokedexes.input';
import { version_groupsUpdateManyWithWhereWithoutPokedexesInput } from './version-groups-update-many-with-where-without-pokedexes.input';
import { version_groupsScalarWhereInput } from './version-groups-scalar-where.input';

@InputType()
export class version_groupsUncheckedUpdateManyWithoutPokedexesNestedInput {

    @Field(() => [version_groupsCreateWithoutPokedexesInput], {nullable:true})
    @Type(() => version_groupsCreateWithoutPokedexesInput)
    create?: Array<version_groupsCreateWithoutPokedexesInput>;

    @Field(() => [version_groupsCreateOrConnectWithoutPokedexesInput], {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutPokedexesInput)
    connectOrCreate?: Array<version_groupsCreateOrConnectWithoutPokedexesInput>;

    @Field(() => [version_groupsUpsertWithWhereUniqueWithoutPokedexesInput], {nullable:true})
    @Type(() => version_groupsUpsertWithWhereUniqueWithoutPokedexesInput)
    upsert?: Array<version_groupsUpsertWithWhereUniqueWithoutPokedexesInput>;

    @Field(() => [version_groupsWhereUniqueInput], {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    set?: Array<version_groupsWhereUniqueInput>;

    @Field(() => [version_groupsWhereUniqueInput], {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    disconnect?: Array<version_groupsWhereUniqueInput>;

    @Field(() => [version_groupsWhereUniqueInput], {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    delete?: Array<version_groupsWhereUniqueInput>;

    @Field(() => [version_groupsWhereUniqueInput], {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: Array<version_groupsWhereUniqueInput>;

    @Field(() => [version_groupsUpdateWithWhereUniqueWithoutPokedexesInput], {nullable:true})
    @Type(() => version_groupsUpdateWithWhereUniqueWithoutPokedexesInput)
    update?: Array<version_groupsUpdateWithWhereUniqueWithoutPokedexesInput>;

    @Field(() => [version_groupsUpdateManyWithWhereWithoutPokedexesInput], {nullable:true})
    @Type(() => version_groupsUpdateManyWithWhereWithoutPokedexesInput)
    updateMany?: Array<version_groupsUpdateManyWithWhereWithoutPokedexesInput>;

    @Field(() => [version_groupsScalarWhereInput], {nullable:true})
    @Type(() => version_groupsScalarWhereInput)
    deleteMany?: Array<version_groupsScalarWhereInput>;
}
