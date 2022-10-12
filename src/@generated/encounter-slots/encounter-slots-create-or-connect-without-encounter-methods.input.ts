import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_slotsCreateWithoutEncounter_methodsInput } from './encounter-slots-create-without-encounter-methods.input';

@InputType()
export class encounter_slotsCreateOrConnectWithoutEncounter_methodsInput {

    @Field(() => encounter_slotsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_slotsWhereUniqueInput)
    where!: encounter_slotsWhereUniqueInput;

    @Field(() => encounter_slotsCreateWithoutEncounter_methodsInput, {nullable:false})
    @Type(() => encounter_slotsCreateWithoutEncounter_methodsInput)
    create!: encounter_slotsCreateWithoutEncounter_methodsInput;
}
