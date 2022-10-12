import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_proseWhereUniqueInput } from './encounter-condition-value-prose-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_proseCreateWithoutLanguagesInput } from './encounter-condition-value-prose-create-without-languages.input';

@InputType()
export class encounter_condition_value_proseCreateOrConnectWithoutLanguagesInput {

    @Field(() => encounter_condition_value_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    where!: encounter_condition_value_proseWhereUniqueInput;

    @Field(() => encounter_condition_value_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => encounter_condition_value_proseCreateWithoutLanguagesInput)
    create!: encounter_condition_value_proseCreateWithoutLanguagesInput;
}
