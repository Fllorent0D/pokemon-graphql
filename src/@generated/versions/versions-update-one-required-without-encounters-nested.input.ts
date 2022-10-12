import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsCreateWithoutEncountersInput } from './versions-create-without-encounters.input';
import { Type } from 'class-transformer';
import { versionsCreateOrConnectWithoutEncountersInput } from './versions-create-or-connect-without-encounters.input';
import { versionsUpsertWithoutEncountersInput } from './versions-upsert-without-encounters.input';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { versionsUpdateWithoutEncountersInput } from './versions-update-without-encounters.input';

@InputType()
export class versionsUpdateOneRequiredWithoutEncountersNestedInput {

    @Field(() => versionsCreateWithoutEncountersInput, {nullable:true})
    @Type(() => versionsCreateWithoutEncountersInput)
    create?: versionsCreateWithoutEncountersInput;

    @Field(() => versionsCreateOrConnectWithoutEncountersInput, {nullable:true})
    @Type(() => versionsCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: versionsCreateOrConnectWithoutEncountersInput;

    @Field(() => versionsUpsertWithoutEncountersInput, {nullable:true})
    @Type(() => versionsUpsertWithoutEncountersInput)
    upsert?: versionsUpsertWithoutEncountersInput;

    @Field(() => versionsWhereUniqueInput, {nullable:true})
    @Type(() => versionsWhereUniqueInput)
    connect?: versionsWhereUniqueInput;

    @Field(() => versionsUpdateWithoutEncountersInput, {nullable:true})
    @Type(() => versionsUpdateWithoutEncountersInput)
    update?: versionsUpdateWithoutEncountersInput;
}
