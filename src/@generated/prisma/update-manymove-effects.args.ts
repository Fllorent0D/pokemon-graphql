import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effectsUncheckedUpdateManyInput } from '../move-effects/move-effects-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { move_effectsWhereInput } from '../move-effects/move-effects-where.input';

@ArgsType()
export class UpdateManymoveEffectsArgs {

    @Field(() => move_effectsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => move_effectsUncheckedUpdateManyInput)
    data!: move_effectsUncheckedUpdateManyInput;

    @Field(() => move_effectsWhereInput, {nullable:true})
    @Type(() => move_effectsWhereInput)
    where?: move_effectsWhereInput;
}
