import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_proseWhereInput } from '../move-effect-prose/move-effect-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveEffectProseArgs {

    @Field(() => move_effect_proseWhereInput, {nullable:true})
    @Type(() => move_effect_proseWhereInput)
    where?: move_effect_proseWhereInput;
}
