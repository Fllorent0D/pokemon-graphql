import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsUpdateWithoutMove_changelogInput } from './version-groups-update-without-move-changelog.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutMove_changelogInput } from './version-groups-create-without-move-changelog.input';

@InputType()
export class version_groupsUpsertWithoutMove_changelogInput {

    @Field(() => version_groupsUpdateWithoutMove_changelogInput, {nullable:false})
    @Type(() => version_groupsUpdateWithoutMove_changelogInput)
    update!: version_groupsUpdateWithoutMove_changelogInput;

    @Field(() => version_groupsCreateWithoutMove_changelogInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutMove_changelogInput)
    create!: version_groupsCreateWithoutMove_changelogInput;
}
