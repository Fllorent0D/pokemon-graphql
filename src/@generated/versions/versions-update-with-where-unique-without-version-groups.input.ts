import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import { versionsUpdateWithoutVersion_groupsInput } from './versions-update-without-version-groups.input';

@InputType()
export class versionsUpdateWithWhereUniqueWithoutVersion_groupsInput {

    @Field(() => versionsWhereUniqueInput, {nullable:false})
    @Type(() => versionsWhereUniqueInput)
    where!: versionsWhereUniqueInput;

    @Field(() => versionsUpdateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => versionsUpdateWithoutVersion_groupsInput)
    data!: versionsUpdateWithoutVersion_groupsInput;
}
