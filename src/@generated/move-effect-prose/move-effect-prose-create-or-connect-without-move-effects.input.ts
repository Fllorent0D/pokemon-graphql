import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_proseWhereUniqueInput } from './move-effect-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_effect_proseCreateWithoutMove_effectsInput } from './move-effect-prose-create-without-move-effects.input';

@InputType()
export class move_effect_proseCreateOrConnectWithoutMove_effectsInput {

    @Field(() => move_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_proseWhereUniqueInput)
    where!: move_effect_proseWhereUniqueInput;

    @Field(() => move_effect_proseCreateWithoutMove_effectsInput, {nullable:false})
    @Type(() => move_effect_proseCreateWithoutMove_effectsInput)
    create!: move_effect_proseCreateWithoutMove_effectsInput;
}
