import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_slotsUpdateWithoutEncounter_methodsInput } from './encounter-slots-update-without-encounter-methods.input';
import { encounter_slotsCreateWithoutEncounter_methodsInput } from './encounter-slots-create-without-encounter-methods.input';

@InputType()
export class encounter_slotsUpsertWithWhereUniqueWithoutEncounter_methodsInput {

    @Field(() => encounter_slotsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_slotsWhereUniqueInput)
    where!: encounter_slotsWhereUniqueInput;

    @Field(() => encounter_slotsUpdateWithoutEncounter_methodsInput, {nullable:false})
    @Type(() => encounter_slotsUpdateWithoutEncounter_methodsInput)
    update!: encounter_slotsUpdateWithoutEncounter_methodsInput;

    @Field(() => encounter_slotsCreateWithoutEncounter_methodsInput, {nullable:false})
    @Type(() => encounter_slotsCreateWithoutEncounter_methodsInput)
    create!: encounter_slotsCreateWithoutEncounter_methodsInput;
}
