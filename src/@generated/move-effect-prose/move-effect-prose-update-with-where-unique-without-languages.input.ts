import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_proseWhereUniqueInput } from './move-effect-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_effect_proseUpdateWithoutLanguagesInput } from './move-effect-prose-update-without-languages.input';

@InputType()
export class move_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => move_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_proseWhereUniqueInput)
    where!: move_effect_proseWhereUniqueInput;

    @Field(() => move_effect_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_effect_proseUpdateWithoutLanguagesInput)
    data!: move_effect_proseUpdateWithoutLanguagesInput;
}
