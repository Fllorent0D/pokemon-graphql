import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import { versionsUpdateWithoutVersion_groupsInput } from './versions-update-without-version-groups.input';
import { versionsCreateWithoutVersion_groupsInput } from './versions-create-without-version-groups.input';

@InputType()
export class versionsUpsertWithWhereUniqueWithoutVersion_groupsInput {

    @Field(() => versionsWhereUniqueInput, {nullable:false})
    @Type(() => versionsWhereUniqueInput)
    where!: versionsWhereUniqueInput;

    @Field(() => versionsUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => versionsUpdateWithoutVersion_groupsInput)
    update!: versionsUpdateWithoutVersion_groupsInput;

    @Field(() => versionsCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => versionsCreateWithoutVersion_groupsInput)
    create!: versionsCreateWithoutVersion_groupsInput;
}
