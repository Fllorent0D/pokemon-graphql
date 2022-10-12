import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_methodsCreateWithoutEncounter_slotsInput } from './encounter-methods-create-without-encounter-slots.input';
import { Type } from 'class-transformer';
import { encounter_methodsCreateOrConnectWithoutEncounter_slotsInput } from './encounter-methods-create-or-connect-without-encounter-slots.input';
import { encounter_methodsUpsertWithoutEncounter_slotsInput } from './encounter-methods-upsert-without-encounter-slots.input';
import { encounter_methodsWhereUniqueInput } from './encounter-methods-where-unique.input';
import { encounter_methodsUpdateWithoutEncounter_slotsInput } from './encounter-methods-update-without-encounter-slots.input';

@InputType()
export class encounter_methodsUpdateOneRequiredWithoutEncounter_slotsNestedInput {

    @Field(() => encounter_methodsCreateWithoutEncounter_slotsInput, {nullable:true})
    @Type(() => encounter_methodsCreateWithoutEncounter_slotsInput)
    create?: encounter_methodsCreateWithoutEncounter_slotsInput;

    @Field(() => encounter_methodsCreateOrConnectWithoutEncounter_slotsInput, {nullable:true})
    @Type(() => encounter_methodsCreateOrConnectWithoutEncounter_slotsInput)
    connectOrCreate?: encounter_methodsCreateOrConnectWithoutEncounter_slotsInput;

    @Field(() => encounter_methodsUpsertWithoutEncounter_slotsInput, {nullable:true})
    @Type(() => encounter_methodsUpsertWithoutEncounter_slotsInput)
    upsert?: encounter_methodsUpsertWithoutEncounter_slotsInput;

    @Field(() => encounter_methodsWhereUniqueInput, {nullable:true})
    @Type(() => encounter_methodsWhereUniqueInput)
    connect?: encounter_methodsWhereUniqueInput;

    @Field(() => encounter_methodsUpdateWithoutEncounter_slotsInput, {nullable:true})
    @Type(() => encounter_methodsUpdateWithoutEncounter_slotsInput)
    update?: encounter_methodsUpdateWithoutEncounter_slotsInput;
}
