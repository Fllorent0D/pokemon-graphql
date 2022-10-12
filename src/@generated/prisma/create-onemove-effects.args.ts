import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effectsCreateInput } from '../move-effects/move-effects-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveEffectsArgs {

    @Field(() => move_effectsCreateInput, {nullable:false})
    @Type(() => move_effectsCreateInput)
    data!: move_effectsCreateInput;
}
