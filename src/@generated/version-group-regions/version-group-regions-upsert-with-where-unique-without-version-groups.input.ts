import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_group_regionsWhereUniqueInput } from './version-group-regions-where-unique.input';
import { Type } from 'class-transformer';
import { version_group_regionsUpdateWithoutVersion_groupsInput } from './version-group-regions-update-without-version-groups.input';
import { version_group_regionsCreateWithoutVersion_groupsInput } from './version-group-regions-create-without-version-groups.input';

@InputType()
export class version_group_regionsUpsertWithWhereUniqueWithoutVersion_groupsInput {

    @Field(() => version_group_regionsWhereUniqueInput, {nullable:false})
    @Type(() => version_group_regionsWhereUniqueInput)
    where!: version_group_regionsWhereUniqueInput;

    @Field(() => version_group_regionsUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => version_group_regionsUpdateWithoutVersion_groupsInput)
    update!: version_group_regionsUpdateWithoutVersion_groupsInput;

    @Field(() => version_group_regionsCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => version_group_regionsCreateWithoutVersion_groupsInput)
    create!: version_group_regionsCreateWithoutVersion_groupsInput;
}
