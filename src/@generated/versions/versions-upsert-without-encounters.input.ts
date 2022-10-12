import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsUpdateWithoutEncountersInput } from './versions-update-without-encounters.input';
import { Type } from 'class-transformer';
import { versionsCreateWithoutEncountersInput } from './versions-create-without-encounters.input';

@InputType()
export class versionsUpsertWithoutEncountersInput {

    @Field(() => versionsUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => versionsUpdateWithoutEncountersInput)
    update!: versionsUpdateWithoutEncountersInput;

    @Field(() => versionsCreateWithoutEncountersInput, {nullable:false})
    @Type(() => versionsCreateWithoutEncountersInput)
    create!: versionsCreateWithoutEncountersInput;
}
