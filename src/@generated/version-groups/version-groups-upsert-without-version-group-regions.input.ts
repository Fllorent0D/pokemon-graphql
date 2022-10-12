import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsUpdateWithoutVersion_group_regionsInput } from './version-groups-update-without-version-group-regions.input';
import { Type } from 'class-transformer';
import { version_groupsCreateWithoutVersion_group_regionsInput } from './version-groups-create-without-version-group-regions.input';

@InputType()
export class version_groupsUpsertWithoutVersion_group_regionsInput {

    @Field(() => version_groupsUpdateWithoutVersion_group_regionsInput, {nullable:false})
    @Type(() => version_groupsUpdateWithoutVersion_group_regionsInput)
    update!: version_groupsUpdateWithoutVersion_group_regionsInput;

    @Field(() => version_groupsCreateWithoutVersion_group_regionsInput, {nullable:false})
    @Type(() => version_groupsCreateWithoutVersion_group_regionsInput)
    create!: version_groupsCreateWithoutVersion_group_regionsInput;
}
