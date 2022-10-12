import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutEncounter_condition_value_proseInput } from './languages-update-without-encounter-condition-value-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutEncounter_condition_value_proseInput } from './languages-create-without-encounter-condition-value-prose.input';

@InputType()
export class languagesUpsertWithoutEncounter_condition_value_proseInput {

    @Field(() => languagesUpdateWithoutEncounter_condition_value_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutEncounter_condition_value_proseInput)
    update!: languagesUpdateWithoutEncounter_condition_value_proseInput;

    @Field(() => languagesCreateWithoutEncounter_condition_value_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutEncounter_condition_value_proseInput)
    create!: languagesCreateWithoutEncounter_condition_value_proseInput;
}
