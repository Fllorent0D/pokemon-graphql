import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsWhereUniqueInput } from './move-effects-where-unique.input';
import { Type } from 'class-transformer';
import { move_effectsCreateWithoutMove_effect_proseInput } from './move-effects-create-without-move-effect-prose.input';

@InputType()
export class move_effectsCreateOrConnectWithoutMove_effect_proseInput {

    @Field(() => move_effectsWhereUniqueInput, {nullable:false})
    @Type(() => move_effectsWhereUniqueInput)
    where!: move_effectsWhereUniqueInput;

    @Field(() => move_effectsCreateWithoutMove_effect_proseInput, {nullable:false})
    @Type(() => move_effectsCreateWithoutMove_effect_proseInput)
    create!: move_effectsCreateWithoutMove_effect_proseInput;
}
