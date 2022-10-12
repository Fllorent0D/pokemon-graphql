import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_methodsWhereUniqueInput } from './encounter-methods-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_methodsCreateWithoutEncounter_slotsInput } from './encounter-methods-create-without-encounter-slots.input';

@InputType()
export class encounter_methodsCreateOrConnectWithoutEncounter_slotsInput {

    @Field(() => encounter_methodsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_methodsWhereUniqueInput)
    where!: encounter_methodsWhereUniqueInput;

    @Field(() => encounter_methodsCreateWithoutEncounter_slotsInput, {nullable:false})
    @Type(() => encounter_methodsCreateWithoutEncounter_slotsInput)
    create!: encounter_methodsCreateWithoutEncounter_slotsInput;
}
