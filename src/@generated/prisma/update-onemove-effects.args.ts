import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effectsUpdateInput } from '../move-effects/move-effects-update.input';
import { Type } from 'class-transformer';
import { move_effectsWhereUniqueInput } from '../move-effects/move-effects-where-unique.input';

@ArgsType()
export class UpdateOnemoveEffectsArgs {

    @Field(() => move_effectsUpdateInput, {nullable:false})
    @Type(() => move_effectsUpdateInput)
    data!: move_effectsUpdateInput;

    @Field(() => move_effectsWhereUniqueInput, {nullable:false})
    @Type(() => move_effectsWhereUniqueInput)
    where!: move_effectsWhereUniqueInput;
}
