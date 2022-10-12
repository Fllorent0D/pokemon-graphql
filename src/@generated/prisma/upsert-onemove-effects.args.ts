import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effectsWhereUniqueInput } from '../move-effects/move-effects-where-unique.input';
import { Type } from 'class-transformer';
import { move_effectsCreateInput } from '../move-effects/move-effects-create.input';
import { move_effectsUpdateInput } from '../move-effects/move-effects-update.input';

@ArgsType()
export class UpsertOnemoveEffectsArgs {

    @Field(() => move_effectsWhereUniqueInput, {nullable:false})
    @Type(() => move_effectsWhereUniqueInput)
    where!: move_effectsWhereUniqueInput;

    @Field(() => move_effectsCreateInput, {nullable:false})
    @Type(() => move_effectsCreateInput)
    create!: move_effectsCreateInput;

    @Field(() => move_effectsUpdateInput, {nullable:false})
    @Type(() => move_effectsUpdateInput)
    update!: move_effectsUpdateInput;
}
