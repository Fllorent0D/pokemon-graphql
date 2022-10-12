import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { version_groupsCreateNestedOneWithoutEncounter_slotsInput } from '../version-groups/version-groups-create-nested-one-without-encounter-slots.input';
import { encountersCreateNestedManyWithoutEncounter_slotsInput } from '../encounters/encounters-create-nested-many-without-encounter-slots.input';

@InputType()
export class encounter_slotsCreateWithoutEncounter_methodsInput {

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => Int, {nullable:true})
    rarity?: number;

    @Field(() => version_groupsCreateNestedOneWithoutEncounter_slotsInput, {nullable:false})
    version_groups!: version_groupsCreateNestedOneWithoutEncounter_slotsInput;

    @Field(() => encountersCreateNestedManyWithoutEncounter_slotsInput, {nullable:true})
    encounters?: encountersCreateNestedManyWithoutEncounter_slotsInput;
}
