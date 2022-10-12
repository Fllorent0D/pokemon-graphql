import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import { versionsCreateWithoutEncountersInput } from './versions-create-without-encounters.input';

@InputType()
export class versionsCreateOrConnectWithoutEncountersInput {

    @Field(() => versionsWhereUniqueInput, {nullable:false})
    @Type(() => versionsWhereUniqueInput)
    where!: versionsWhereUniqueInput;

    @Field(() => versionsCreateWithoutEncountersInput, {nullable:false})
    @Type(() => versionsCreateWithoutEncountersInput)
    create!: versionsCreateWithoutEncountersInput;
}
