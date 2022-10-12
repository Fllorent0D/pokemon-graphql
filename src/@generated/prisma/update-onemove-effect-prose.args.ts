import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_proseUpdateInput } from '../move-effect-prose/move-effect-prose-update.input';
import { Type } from 'class-transformer';
import { move_effect_proseWhereUniqueInput } from '../move-effect-prose/move-effect-prose-where-unique.input';

@ArgsType()
export class UpdateOnemoveEffectProseArgs {

    @Field(() => move_effect_proseUpdateInput, {nullable:false})
    @Type(() => move_effect_proseUpdateInput)
    data!: move_effect_proseUpdateInput;

    @Field(() => move_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_proseWhereUniqueInput)
    where!: move_effect_proseWhereUniqueInput;
}
