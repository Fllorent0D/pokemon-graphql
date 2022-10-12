import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_conditionsCreateWithoutEncounter_condition_proseInput } from './encounter-conditions-create-without-encounter-condition-prose.input';
import { Type } from 'class-transformer';
import { encounter_conditionsCreateOrConnectWithoutEncounter_condition_proseInput } from './encounter-conditions-create-or-connect-without-encounter-condition-prose.input';
import { encounter_conditionsUpsertWithoutEncounter_condition_proseInput } from './encounter-conditions-upsert-without-encounter-condition-prose.input';
import { encounter_conditionsWhereUniqueInput } from './encounter-conditions-where-unique.input';
import { encounter_conditionsUpdateWithoutEncounter_condition_proseInput } from './encounter-conditions-update-without-encounter-condition-prose.input';

@InputType()
export class encounter_conditionsUpdateOneRequiredWithoutEncounter_condition_proseNestedInput {

    @Field(() => encounter_conditionsCreateWithoutEncounter_condition_proseInput, {nullable:true})
    @Type(() => encounter_conditionsCreateWithoutEncounter_condition_proseInput)
    create?: encounter_conditionsCreateWithoutEncounter_condition_proseInput;

    @Field(() => encounter_conditionsCreateOrConnectWithoutEncounter_condition_proseInput, {nullable:true})
    @Type(() => encounter_conditionsCreateOrConnectWithoutEncounter_condition_proseInput)
    connectOrCreate?: encounter_conditionsCreateOrConnectWithoutEncounter_condition_proseInput;

    @Field(() => encounter_conditionsUpsertWithoutEncounter_condition_proseInput, {nullable:true})
    @Type(() => encounter_conditionsUpsertWithoutEncounter_condition_proseInput)
    upsert?: encounter_conditionsUpsertWithoutEncounter_condition_proseInput;

    @Field(() => encounter_conditionsWhereUniqueInput, {nullable:true})
    @Type(() => encounter_conditionsWhereUniqueInput)
    connect?: encounter_conditionsWhereUniqueInput;

    @Field(() => encounter_conditionsUpdateWithoutEncounter_condition_proseInput, {nullable:true})
    @Type(() => encounter_conditionsUpdateWithoutEncounter_condition_proseInput)
    update?: encounter_conditionsUpdateWithoutEncounter_condition_proseInput;
}
