import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effectsWhereInput } from '../move-effects/move-effects-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveEffectsArgs {

    @Field(() => move_effectsWhereInput, {nullable:true})
    @Type(() => move_effectsWhereInput)
    where?: move_effectsWhereInput;
}
