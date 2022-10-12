import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsCreateWithoutEncountersInput } from './versions-create-without-encounters.input';
import { Type } from 'class-transformer';
import { versionsCreateOrConnectWithoutEncountersInput } from './versions-create-or-connect-without-encounters.input';
import { versionsWhereUniqueInput } from './versions-where-unique.input';

@InputType()
export class versionsCreateNestedOneWithoutEncountersInput {

    @Field(() => versionsCreateWithoutEncountersInput, {nullable:true})
    @Type(() => versionsCreateWithoutEncountersInput)
    create?: versionsCreateWithoutEncountersInput;

    @Field(() => versionsCreateOrConnectWithoutEncountersInput, {nullable:true})
    @Type(() => versionsCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: versionsCreateOrConnectWithoutEncountersInput;

    @Field(() => versionsWhereUniqueInput, {nullable:true})
    @Type(() => versionsWhereUniqueInput)
    connect?: versionsWhereUniqueInput;
}
