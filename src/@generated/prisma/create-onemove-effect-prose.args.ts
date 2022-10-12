import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_proseCreateInput } from '../move-effect-prose/move-effect-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveEffectProseArgs {

    @Field(() => move_effect_proseCreateInput, {nullable:false})
    @Type(() => move_effect_proseCreateInput)
    data!: move_effect_proseCreateInput;
}
