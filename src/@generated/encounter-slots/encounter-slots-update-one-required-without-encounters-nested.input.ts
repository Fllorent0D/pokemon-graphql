import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsCreateWithoutEncountersInput } from './encounter-slots-create-without-encounters.input';
import { Type } from 'class-transformer';
import { encounter_slotsCreateOrConnectWithoutEncountersInput } from './encounter-slots-create-or-connect-without-encounters.input';
import { encounter_slotsUpsertWithoutEncountersInput } from './encounter-slots-upsert-without-encounters.input';
import { encounter_slotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { encounter_slotsUpdateWithoutEncountersInput } from './encounter-slots-update-without-encounters.input';

@InputType()
export class encounter_slotsUpdateOneRequiredWithoutEncountersNestedInput {

    @Field(() => encounter_slotsCreateWithoutEncountersInput, {nullable:true})
    @Type(() => encounter_slotsCreateWithoutEncountersInput)
    create?: encounter_slotsCreateWithoutEncountersInput;

    @Field(() => encounter_slotsCreateOrConnectWithoutEncountersInput, {nullable:true})
    @Type(() => encounter_slotsCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: encounter_slotsCreateOrConnectWithoutEncountersInput;

    @Field(() => encounter_slotsUpsertWithoutEncountersInput, {nullable:true})
    @Type(() => encounter_slotsUpsertWithoutEncountersInput)
    upsert?: encounter_slotsUpsertWithoutEncountersInput;

    @Field(() => encounter_slotsWhereUniqueInput, {nullable:true})
    @Type(() => encounter_slotsWhereUniqueInput)
    connect?: encounter_slotsWhereUniqueInput;

    @Field(() => encounter_slotsUpdateWithoutEncountersInput, {nullable:true})
    @Type(() => encounter_slotsUpdateWithoutEncountersInput)
    update?: encounter_slotsUpdateWithoutEncountersInput;
}
