import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effectsWhereUniqueInput } from '../move-effects/move-effects-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnemoveEffectsArgs {

    @Field(() => move_effectsWhereUniqueInput, {nullable:false})
    @Type(() => move_effectsWhereUniqueInput)
    where!: move_effectsWhereUniqueInput;
}
