import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_method_proseWhereUniqueInput } from './encounter-method-prose-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_method_proseUpdateWithoutLanguagesInput } from './encounter-method-prose-update-without-languages.input';

@InputType()
export class encounter_method_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => encounter_method_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_method_proseWhereUniqueInput)
    where!: encounter_method_proseWhereUniqueInput;

    @Field(() => encounter_method_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => encounter_method_proseUpdateWithoutLanguagesInput)
    data!: encounter_method_proseUpdateWithoutLanguagesInput;
}
