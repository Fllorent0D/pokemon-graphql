import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsUpdateWithoutVersion_namesInput } from './versions-update-without-version-names.input';
import { Type } from 'class-transformer';
import { versionsCreateWithoutVersion_namesInput } from './versions-create-without-version-names.input';

@InputType()
export class versionsUpsertWithoutVersion_namesInput {

    @Field(() => versionsUpdateWithoutVersion_namesInput, {nullable:false})
    @Type(() => versionsUpdateWithoutVersion_namesInput)
    update!: versionsUpdateWithoutVersion_namesInput;

    @Field(() => versionsCreateWithoutVersion_namesInput, {nullable:false})
    @Type(() => versionsCreateWithoutVersion_namesInput)
    create!: versionsCreateWithoutVersion_namesInput;
}
