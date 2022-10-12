import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_proseWhereUniqueInput } from './move-effect-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_effect_proseUpdateWithoutMove_effectsInput } from './move-effect-prose-update-without-move-effects.input';

@InputType()
export class move_effect_proseUpdateWithWhereUniqueWithoutMove_effectsInput {

    @Field(() => move_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_proseWhereUniqueInput)
    where!: move_effect_proseWhereUniqueInput;

    @Field(() => move_effect_proseUpdateWithoutMove_effectsInput, {nullable:false})
    @Type(() => move_effect_proseUpdateWithoutMove_effectsInput)
    data!: move_effect_proseUpdateWithoutMove_effectsInput;
}
