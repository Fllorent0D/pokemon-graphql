import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsCreateWithoutMove_effect_proseInput } from './move-effects-create-without-move-effect-prose.input';
import { Type } from 'class-transformer';
import { move_effectsCreateOrConnectWithoutMove_effect_proseInput } from './move-effects-create-or-connect-without-move-effect-prose.input';
import { move_effectsWhereUniqueInput } from './move-effects-where-unique.input';

@InputType()
export class move_effectsCreateNestedOneWithoutMove_effect_proseInput {

    @Field(() => move_effectsCreateWithoutMove_effect_proseInput, {nullable:true})
    @Type(() => move_effectsCreateWithoutMove_effect_proseInput)
    create?: move_effectsCreateWithoutMove_effect_proseInput;

    @Field(() => move_effectsCreateOrConnectWithoutMove_effect_proseInput, {nullable:true})
    @Type(() => move_effectsCreateOrConnectWithoutMove_effect_proseInput)
    connectOrCreate?: move_effectsCreateOrConnectWithoutMove_effect_proseInput;

    @Field(() => move_effectsWhereUniqueInput, {nullable:true})
    @Type(() => move_effectsWhereUniqueInput)
    connect?: move_effectsWhereUniqueInput;
}
