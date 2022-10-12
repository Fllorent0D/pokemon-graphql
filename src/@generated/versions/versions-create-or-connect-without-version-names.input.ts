import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import { versionsCreateWithoutVersion_namesInput } from './versions-create-without-version-names.input';

@InputType()
export class versionsCreateOrConnectWithoutVersion_namesInput {

    @Field(() => versionsWhereUniqueInput, {nullable:false})
    @Type(() => versionsWhereUniqueInput)
    where!: versionsWhereUniqueInput;

    @Field(() => versionsCreateWithoutVersion_namesInput, {nullable:false})
    @Type(() => versionsCreateWithoutVersion_namesInput)
    create!: versionsCreateWithoutVersion_namesInput;
}
