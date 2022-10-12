import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsUpdateWithoutAbility_changelogInput } from './version-groups-update-without-ability-changelog.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutAbility_changelogInput } from './version-groups-create-without-ability-changelog.input';

@InputType()
export class version_groupsUpsertWithoutAbility_changelogInput {

    @Field(() => version_groupsUpdateWithoutAbility_changelogInput, {nullable:false})
    @Type(() => version_groupsUpdateWithoutAbility_changelogInput)
    update!: version_groupsUpdateWithoutAbility_changelogInput;

    @Field(() => version_groupsCreateWithoutAbility_changelogInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutAbility_changelogInput)
    create!: version_groupsCreateWithoutAbility_changelogInput;
}
