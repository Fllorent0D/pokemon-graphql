import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_effect_proseWhereUniqueInput } from './super-contest-effect-prose-where-unique.input';
import { Type } from 'class-transformer';
import { super_contest_effect_proseUpdateWithoutLanguagesInput } from './super-contest-effect-prose-update-without-languages.input';

@InputType()
export class super_contest_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => super_contest_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => super_contest_effect_proseWhereUniqueInput)
    where!: super_contest_effect_proseWhereUniqueInput;

    @Field(() => super_contest_effect_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => super_contest_effect_proseUpdateWithoutLanguagesInput)
    data!: super_contest_effect_proseUpdateWithoutLanguagesInput;
}
