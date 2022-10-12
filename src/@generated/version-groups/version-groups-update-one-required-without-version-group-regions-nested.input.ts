import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutVersion_group_regionsInput } from './version-groups-create-without-version-group-regions.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutVersion_group_regionsInput } from './version-groups-create-or-connect-without-version-group-regions.input';
import { version_groupsUpsertWithoutVersion_group_regionsInput } from './version-groups-upsert-without-version-group-regions.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { version_groupsUpdateWithoutVersion_group_regionsInput } from './version-groups-update-without-version-group-regions.input';

@InputType()
export class version_groupsUpdateOneRequiredWithoutVersion_group_regionsNestedInput {

    @Field(() => version_groupsCreateWithoutVersion_group_regionsInput, {nullable:true})
    @Type(() => version_groupsCreateWithoutVersion_group_regionsInput)
    create?: version_groupsCreateWithoutVersion_group_regionsInput;

    @Field(() => version_groupsCreateOrConnectWithoutVersion_group_regionsInput, {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutVersion_group_regionsInput)
    connectOrCreate?: version_groupsCreateOrConnectWithoutVersion_group_regionsInput;

    @Field(() => version_groupsUpsertWithoutVersion_group_regionsInput, {nullable:true})
    @Type(() => version_groupsUpsertWithoutVersion_group_regionsInput)
    upsert?: version_groupsUpsertWithoutVersion_group_regionsInput;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: version_groupsWhereUniqueInput;

    @Field(() => version_groupsUpdateWithoutVersion_group_regionsInput, {nullable:true})
    @Type(() => version_groupsUpdateWithoutVersion_group_regionsInput)
    update?: version_groupsUpdateWithoutVersion_group_regionsInput;
}
