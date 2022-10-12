import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsUpdateWithoutMove_effect_proseInput } from './move-effects-update-without-move-effect-prose.input';
import { Type } from 'class-transformer';
import { move_effectsCreateWithoutMove_effect_proseInput } from './move-effects-create-without-move-effect-prose.input';

@InputType()
export class move_effectsUpsertWithoutMove_effect_proseInput {

    @Field(() => move_effectsUpdateWithoutMove_effect_proseInput, {nullable:false})
    @Type(() => move_effectsUpdateWithoutMove_effect_proseInput)
    update!: move_effectsUpdateWithoutMove_effect_proseInput;

    @Field(() => move_effectsCreateWithoutMove_effect_proseInput, {nullable:false})
    @Type(() => move_effectsCreateWithoutMove_effect_proseInput)
    create!: move_effectsCreateWithoutMove_effect_proseInput;
}
