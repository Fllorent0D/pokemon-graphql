import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_proseWhereUniqueInput } from './encounter-condition-prose-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_proseUpdateWithoutLanguagesInput } from './encounter-condition-prose-update-without-languages.input';

@InputType()
export class encounter_condition_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => encounter_condition_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    where!: encounter_condition_proseWhereUniqueInput;

    @Field(() => encounter_condition_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => encounter_condition_proseUpdateWithoutLanguagesInput)
    data!: encounter_condition_proseUpdateWithoutLanguagesInput;
}
