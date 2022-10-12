import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_proseWhereUniqueInput } from '../move-effect-prose/move-effect-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_effect_proseCreateInput } from '../move-effect-prose/move-effect-prose-create.input';
import { move_effect_proseUpdateInput } from '../move-effect-prose/move-effect-prose-update.input';

@ArgsType()
export class UpsertOnemoveEffectProseArgs {

    @Field(() => move_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_proseWhereUniqueInput)
    where!: move_effect_proseWhereUniqueInput;

    @Field(() => move_effect_proseCreateInput, {nullable:false})
    @Type(() => move_effect_proseCreateInput)
    create!: move_effect_proseCreateInput;

    @Field(() => move_effect_proseUpdateInput, {nullable:false})
    @Type(() => move_effect_proseUpdateInput)
    update!: move_effect_proseUpdateInput;
}
