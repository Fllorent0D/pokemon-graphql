import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsCreateWithoutEncountersInput } from './encounter-slots-create-without-encounters.input';
import { Type } from 'class-transformer';
import { encounter_slotsCreateOrConnectWithoutEncountersInput } from './encounter-slots-create-or-connect-without-encounters.input';
import { encounter_slotsWhereUniqueInput } from './encounter-slots-where-unique.input';

@InputType()
export class encounter_slotsCreateNestedOneWithoutEncountersInput {

    @Field(() => encounter_slotsCreateWithoutEncountersInput, {nullable:true})
    @Type(() => encounter_slotsCreateWithoutEncountersInput)
    create?: encounter_slotsCreateWithoutEncountersInput;

    @Field(() => encounter_slotsCreateOrConnectWithoutEncountersInput, {nullable:true})
    @Type(() => encounter_slotsCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: encounter_slotsCreateOrConnectWithoutEncountersInput;

    @Field(() => encounter_slotsWhereUniqueInput, {nullable:true})
    @Type(() => encounter_slotsWhereUniqueInput)
    connect?: encounter_slotsWhereUniqueInput;
}
