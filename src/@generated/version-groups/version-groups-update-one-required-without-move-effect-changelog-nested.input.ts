import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutMove_effect_changelogInput } from './version-groups-create-without-move-effect-changelog.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutMove_effect_changelogInput } from './version-groups-create-or-connect-without-move-effect-changelog.input';
import { version_groupsUpsertWithoutMove_effect_changelogInput } from './version-groups-upsert-without-move-effect-changelog.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { version_groupsUpdateWithoutMove_effect_changelogInput } from './version-groups-update-without-move-effect-changelog.input';

@InputType()
export class version_groupsUpdateOneRequiredWithoutMove_effect_changelogNestedInput {

    @Field(() => version_groupsCreateWithoutMove_effect_changelogInput, {nullable:true})
    @Type(() => version_groupsCreateWithoutMove_effect_changelogInput)
    create?: version_groupsCreateWithoutMove_effect_changelogInput;

    @Field(() => version_groupsCreateOrConnectWithoutMove_effect_changelogInput, {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutMove_effect_changelogInput)
    connectOrCreate?: version_groupsCreateOrConnectWithoutMove_effect_changelogInput;

    @Field(() => version_groupsUpsertWithoutMove_effect_changelogInput, {nullable:true})
    @Type(() => version_groupsUpsertWithoutMove_effect_changelogInput)
    upsert?: version_groupsUpsertWithoutMove_effect_changelogInput;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: version_groupsWhereUniqueInput;

    @Field(() => version_groupsUpdateWithoutMove_effect_changelogInput, {nullable:true})
    @Type(() => version_groupsUpdateWithoutMove_effect_changelogInput)
    update?: version_groupsUpdateWithoutMove_effect_changelogInput;
}
