import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsCreateWithoutMove_effect_proseInput } from './move-effects-create-without-move-effect-prose.input';
import { Type } from 'class-transformer';
import { move_effectsCreateOrConnectWithoutMove_effect_proseInput } from './move-effects-create-or-connect-without-move-effect-prose.input';
import { move_effectsUpsertWithoutMove_effect_proseInput } from './move-effects-upsert-without-move-effect-prose.input';
import { move_effectsWhereUniqueInput } from './move-effects-where-unique.input';
import { move_effectsUpdateWithoutMove_effect_proseInput } from './move-effects-update-without-move-effect-prose.input';

@InputType()
export class move_effectsUpdateOneRequiredWithoutMove_effect_proseNestedInput {

    @Field(() => move_effectsCreateWithoutMove_effect_proseInput, {nullable:true})
    @Type(() => move_effectsCreateWithoutMove_effect_proseInput)
    create?: move_effectsCreateWithoutMove_effect_proseInput;

    @Field(() => move_effectsCreateOrConnectWithoutMove_effect_proseInput, {nullable:true})
    @Type(() => move_effectsCreateOrConnectWithoutMove_effect_proseInput)
    connectOrCreate?: move_effectsCreateOrConnectWithoutMove_effect_proseInput;

    @Field(() => move_effectsUpsertWithoutMove_effect_proseInput, {nullable:true})
    @Type(() => move_effectsUpsertWithoutMove_effect_proseInput)
    upsert?: move_effectsUpsertWithoutMove_effect_proseInput;

    @Field(() => move_effectsWhereUniqueInput, {nullable:true})
    @Type(() => move_effectsWhereUniqueInput)
    connect?: move_effectsWhereUniqueInput;

    @Field(() => move_effectsUpdateWithoutMove_effect_proseInput, {nullable:true})
    @Type(() => move_effectsUpdateWithoutMove_effect_proseInput)
    update?: move_effectsUpdateWithoutMove_effect_proseInput;
}
