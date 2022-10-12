import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutAbility_changelogInput } from './version-groups-create-without-ability-changelog.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutAbility_changelogInput } from './version-groups-create-or-connect-without-ability-changelog.input';
import { version_groupsUpsertWithoutAbility_changelogInput } from './version-groups-upsert-without-ability-changelog.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { version_groupsUpdateWithoutAbility_changelogInput } from './version-groups-update-without-ability-changelog.input';

@InputType()
export class version_groupsUpdateOneRequiredWithoutAbility_changelogNestedInput {

    @Field(() => version_groupsCreateWithoutAbility_changelogInput, {nullable:true})
    @Type(() => version_groupsCreateWithoutAbility_changelogInput)
    create?: version_groupsCreateWithoutAbility_changelogInput;

    @Field(() => version_groupsCreateOrConnectWithoutAbility_changelogInput, {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutAbility_changelogInput)
    connectOrCreate?: version_groupsCreateOrConnectWithoutAbility_changelogInput;

    @Field(() => version_groupsUpsertWithoutAbility_changelogInput, {nullable:true})
    @Type(() => version_groupsUpsertWithoutAbility_changelogInput)
    upsert?: version_groupsUpsertWithoutAbility_changelogInput;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: version_groupsWhereUniqueInput;

    @Field(() => version_groupsUpdateWithoutAbility_changelogInput, {nullable:true})
    @Type(() => version_groupsUpdateWithoutAbility_changelogInput)
    update?: version_groupsUpdateWithoutAbility_changelogInput;
}
