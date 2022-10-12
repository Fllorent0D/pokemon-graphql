import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutMove_changelogInput } from './version-groups-create-without-move-changelog.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutMove_changelogInput } from './version-groups-create-or-connect-without-move-changelog.input';
import { version_groupsUpsertWithoutMove_changelogInput } from './version-groups-upsert-without-move-changelog.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { version_groupsUpdateWithoutMove_changelogInput } from './version-groups-update-without-move-changelog.input';

@InputType()
export class version_groupsUpdateOneRequiredWithoutMove_changelogNestedInput {

    @Field(() => version_groupsCreateWithoutMove_changelogInput, {nullable:true})
    @Type(() => version_groupsCreateWithoutMove_changelogInput)
    create?: version_groupsCreateWithoutMove_changelogInput;

    @Field(() => version_groupsCreateOrConnectWithoutMove_changelogInput, {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutMove_changelogInput)
    connectOrCreate?: version_groupsCreateOrConnectWithoutMove_changelogInput;

    @Field(() => version_groupsUpsertWithoutMove_changelogInput, {nullable:true})
    @Type(() => version_groupsUpsertWithoutMove_changelogInput)
    upsert?: version_groupsUpsertWithoutMove_changelogInput;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: version_groupsWhereUniqueInput;

    @Field(() => version_groupsUpdateWithoutMove_changelogInput, {nullable:true})
    @Type(() => version_groupsUpdateWithoutMove_changelogInput)
    update?: version_groupsUpdateWithoutMove_changelogInput;
}
