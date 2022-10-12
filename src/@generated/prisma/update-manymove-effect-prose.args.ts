import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_proseUpdateManyMutationInput } from '../move-effect-prose/move-effect-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_effect_proseWhereInput } from '../move-effect-prose/move-effect-prose-where.input';

@ArgsType()
export class UpdateManymoveEffectProseArgs {

    @Field(() => move_effect_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => move_effect_proseUpdateManyMutationInput)
    data!: move_effect_proseUpdateManyMutationInput;

    @Field(() => move_effect_proseWhereInput, {nullable:true})
    @Type(() => move_effect_proseWhereInput)
    where?: move_effect_proseWhereInput;
}
