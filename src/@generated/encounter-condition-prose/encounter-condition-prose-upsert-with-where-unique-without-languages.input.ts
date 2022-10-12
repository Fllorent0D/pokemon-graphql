import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_proseWhereUniqueInput } from './encounter-condition-prose-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_proseUpdateWithoutLanguagesInput } from './encounter-condition-prose-update-without-languages.input';
import { encounter_condition_proseCreateWithoutLanguagesInput } from './encounter-condition-prose-create-without-languages.input';

@InputType()
export class encounter_condition_proseUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => encounter_condition_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    where!: encounter_condition_proseWhereUniqueInput;

    @Field(() => encounter_condition_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => encounter_condition_proseUpdateWithoutLanguagesInput)
    update!: encounter_condition_proseUpdateWithoutLanguagesInput;

    @Field(() => encounter_condition_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => encounter_condition_proseCreateWithoutLanguagesInput)
    create!: encounter_condition_proseCreateWithoutLanguagesInput;
}
