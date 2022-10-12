import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_group_regionsCreateWithoutVersion_groupsInput } from './version-group-regions-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { version_group_regionsCreateOrConnectWithoutVersion_groupsInput } from './version-group-regions-create-or-connect-without-version-groups.input';
import { version_group_regionsUpsertWithWhereUniqueWithoutVersion_groupsInput } from './version-group-regions-upsert-with-where-unique-without-version-groups.input';
import { version_group_regionsWhereUniqueInput } from './version-group-regions-where-unique.input';
import { version_group_regionsUpdateWithWhereUniqueWithoutVersion_groupsInput } from './version-group-regions-update-with-where-unique-without-version-groups.input';
import { version_group_regionsUpdateManyWithWhereWithoutVersion_groupsInput } from './version-group-regions-update-many-with-where-without-version-groups.input';
import { version_group_regionsScalarWhereInput } from './version-group-regions-scalar-where.input';

@InputType()
export class version_group_regionsUncheckedUpdateManyWithoutVersion_groupsNestedInput {

    @Field(() => [version_group_regionsCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => version_group_regionsCreateWithoutVersion_groupsInput)
    create?: Array<version_group_regionsCreateWithoutVersion_groupsInput>;

    @Field(() => [version_group_regionsCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => version_group_regionsCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<version_group_regionsCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [version_group_regionsUpsertWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => version_group_regionsUpsertWithWhereUniqueWithoutVersion_groupsInput)
    upsert?: Array<version_group_regionsUpsertWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [version_group_regionsWhereUniqueInput], {nullable:true})
    @Type(() => version_group_regionsWhereUniqueInput)
    set?: Array<version_group_regionsWhereUniqueInput>;

    @Field(() => [version_group_regionsWhereUniqueInput], {nullable:true})
    @Type(() => version_group_regionsWhereUniqueInput)
    disconnect?: Array<version_group_regionsWhereUniqueInput>;

    @Field(() => [version_group_regionsWhereUniqueInput], {nullable:true})
    @Type(() => version_group_regionsWhereUniqueInput)
    delete?: Array<version_group_regionsWhereUniqueInput>;

    @Field(() => [version_group_regionsWhereUniqueInput], {nullable:true})
    @Type(() => version_group_regionsWhereUniqueInput)
    connect?: Array<version_group_regionsWhereUniqueInput>;

    @Field(() => [version_group_regionsUpdateWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => version_group_regionsUpdateWithWhereUniqueWithoutVersion_groupsInput)
    update?: Array<version_group_regionsUpdateWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [version_group_regionsUpdateManyWithWhereWithoutVersion_groupsInput], {nullable:true})
    @Type(() => version_group_regionsUpdateManyWithWhereWithoutVersion_groupsInput)
    updateMany?: Array<version_group_regionsUpdateManyWithWhereWithoutVersion_groupsInput>;

    @Field(() => [version_group_regionsScalarWhereInput], {nullable:true})
    @Type(() => version_group_regionsScalarWhereInput)
    deleteMany?: Array<version_group_regionsScalarWhereInput>;
}
