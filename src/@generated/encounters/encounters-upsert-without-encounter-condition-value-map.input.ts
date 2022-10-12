import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersUpdateWithoutEncounter_condition_value_mapInput } from './encounters-update-without-encounter-condition-value-map.input';
import { Type } from 'class-transformer';
import { encountersCreateWithoutEncounter_condition_value_mapInput } from './encounters-create-without-encounter-condition-value-map.input';

@InputType()
export class encountersUpsertWithoutEncounter_condition_value_mapInput {

    @Field(() => encountersUpdateWithoutEncounter_condition_value_mapInput, {nullable:false})
    @Type(() => encountersUpdateWithoutEncounter_condition_value_mapInput)
    update!: encountersUpdateWithoutEncounter_condition_value_mapInput;

    @Field(() => encountersCreateWithoutEncounter_condition_value_mapInput, {nullable:false})
    @Type(() => encountersCreateWithoutEncounter_condition_value_mapInput)
    create!: encountersCreateWithoutEncounter_condition_value_mapInput;
}
