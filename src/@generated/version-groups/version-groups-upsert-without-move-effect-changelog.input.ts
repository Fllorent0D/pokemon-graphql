import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsUpdateWithoutMove_effect_changelogInput } from './version-groups-update-without-move-effect-changelog.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutMove_effect_changelogInput } from './version-groups-create-without-move-effect-changelog.input';

@InputType()
export class version_groupsUpsertWithoutMove_effect_changelogInput {

    @Field(() => version_groupsUpdateWithoutMove_effect_changelogInput, {nullable:false})
    @Type(() => version_groupsUpdateWithoutMove_effect_changelogInput)
    update!: version_groupsUpdateWithoutMove_effect_changelogInput;

    @Field(() => version_groupsCreateWithoutMove_effect_changelogInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutMove_effect_changelogInput)
    create!: version_groupsCreateWithoutMove_effect_changelogInput;
}
