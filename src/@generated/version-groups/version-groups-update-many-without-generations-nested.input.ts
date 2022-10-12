import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutGenerationsInput } from './version-groups-create-without-generations.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutGenerationsInput } from './version-groups-create-or-connect-without-generations.input';
import { version_groupsUpsertWithWhereUniqueWithoutGenerationsInput } from './version-groups-upsert-with-where-unique-without-generations.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { version_groupsUpdateWithWhereUniqueWithoutGenerationsInput } from './version-groups-update-with-where-unique-without-generations.input';
import { version_groupsUpdateManyWithWhereWithoutGenerationsInput } from './version-groups-update-many-with-where-without-generations.input';
import { version_groupsScalarWhereInput } from './version-groups-scalar-where.input';

@InputType()
export class version_groupsUpdateManyWithoutGenerationsNestedInput {

    @Field(() => [version_groupsCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => version_groupsCreateWithoutGenerationsInput)
    create?: Array<version_groupsCreateWithoutGenerationsInput>;

    @Field(() => [version_groupsCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<version_groupsCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [version_groupsUpsertWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => version_groupsUpsertWithWhereUniqueWithoutGenerationsInput)
    upsert?: Array<version_groupsUpsertWithWhereUniqueWithoutGenerationsInput>;

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

    @Field(() => [version_groupsUpdateWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => version_groupsUpdateWithWhereUniqueWithoutGenerationsInput)
    update?: Array<version_groupsUpdateWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [version_groupsUpdateManyWithWhereWithoutGenerationsInput], {nullable:true})
    @Type(() => version_groupsUpdateManyWithWhereWithoutGenerationsInput)
    updateMany?: Array<version_groupsUpdateManyWithWhereWithoutGenerationsInput>;

    @Field(() => [version_groupsScalarWhereInput], {nullable:true})
    @Type(() => version_groupsScalarWhereInput)
    deleteMany?: Array<version_groupsScalarWhereInput>;
}
