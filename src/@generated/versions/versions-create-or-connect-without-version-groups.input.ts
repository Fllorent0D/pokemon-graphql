import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import { versionsCreateWithoutVersion_groupsInput } from './versions-create-without-version-groups.input';

@InputType()
export class versionsCreateOrConnectWithoutVersion_groupsInput {

    @Field(() => versionsWhereUniqueInput, {nullable:false})
    @Type(() => versionsWhereUniqueInput)
    where!: versionsWhereUniqueInput;

    @Field(() => versionsCreateWithoutVersion_groupsInput, {nullable:false})
    @Type(() => versionsCreateWithoutVersion_groupsInput)
    create!: versionsCreateWithoutVersion_groupsInput;
}
