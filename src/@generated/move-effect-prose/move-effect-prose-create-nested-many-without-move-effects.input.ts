import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_proseCreateWithoutMove_effectsInput } from './move-effect-prose-create-without-move-effects.input';
import { Type } from 'class-transformer';
import { move_effect_proseCreateOrConnectWithoutMove_effectsInput } from './move-effect-prose-create-or-connect-without-move-effects.input';
import { move_effect_proseWhereUniqueInput } from './move-effect-prose-where-unique.input';

@InputType()
export class move_effect_proseCreateNestedManyWithoutMove_effectsInput {

    @Field(() => [move_effect_proseCreateWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_effect_proseCreateWithoutMove_effectsInput)
    create?: Array<move_effect_proseCreateWithoutMove_effectsInput>;

    @Field(() => [move_effect_proseCreateOrConnectWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_effect_proseCreateOrConnectWithoutMove_effectsInput)
    connectOrCreate?: Array<move_effect_proseCreateOrConnectWithoutMove_effectsInput>;

    @Field(() => [move_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_proseWhereUniqueInput)
    connect?: Array<move_effect_proseWhereUniqueInput>;
}
