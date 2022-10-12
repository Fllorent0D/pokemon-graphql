import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_proseWhereUniqueInput } from './encounter-condition-value-prose-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_proseUpdateWithoutLanguagesInput } from './encounter-condition-value-prose-update-without-languages.input';

@InputType()
export class encounter_condition_value_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => encounter_condition_value_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    where!: encounter_condition_value_proseWhereUniqueInput;

    @Field(() => encounter_condition_value_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => encounter_condition_value_proseUpdateWithoutLanguagesInput)
    data!: encounter_condition_value_proseUpdateWithoutLanguagesInput;
}
